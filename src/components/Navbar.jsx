import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Card from "./Card";
const Navbar = () => {
  let [ArrayData, setArrayData] = useState([]);
  let [categoryData, setcategoryData] = useState([]);
  const [showMore,setShowMore]=useState(false)

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/videos/categories")
      .then((responsData) => responsData.json())
      .then((res) => setArrayData(res.data));
  }, []);

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
      .then((responsData) => responsData.json())
      .then((res) => setcategoryData(res.data));
  }, []);
  let buttonClick = (id) => {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
      .then((responsData) => responsData.json())
      .then((res) => setcategoryData(res.data));
  };

  const shortedData = () => {
    console.log(categoryData);
    let sort = categoryData.sort(
      (a, b) => parseFloat(b.others.views) - parseFloat(a.others.views)
    );
    setcategoryData([...sort]);
  };

 
  

  return (
    <div>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid black",
          paddingBottom: "50px",
        }}
      >
        <img src={logo} alt="" />
        <button
          onClick={shortedData}
          className="btn focus:bg-red-600 focus:text-white"
        >
          Sort By View
        </button>
        <button className="btn focus:bg-red-600 focus:text-white">Blog</button>
      </nav>
      <main className="my-10">
        <div className="mt-10  mx-auto flex justify-between">
          {ArrayData?.map((obj, i) => (
            <button
              onClick={() => buttonClick(obj.category_id)}
              className="btn focus:bg-red-600 focus:text-white"
              key={i}
            >
              {obj.category}
            </button>
          ))}
        </div>

        <div
          id="card"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10"
        >
          {showMore?categoryData.map((obj, i) => (<Card key={i} obj={obj} />)):categoryData.slice(0,6).map((obj, i) => (<Card key={i} obj={obj} />))}
        </div>

        <button className="btn btn-success text-white m-auto block" 
        onClick={() => setShowMore(!showMore)}>{showMore?'See Less':'show More'}</button>
      </main>
    </div>
  );
};

export default Navbar;
