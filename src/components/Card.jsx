const Card = ({ obj }) => {
  return (
    <div>
      {/* <img className="w-96 h-96" src={obj?.thumbnail} alt="" />
            <p>{obj?.others?.views}</p> */}

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-60" src={obj?.thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          {/* <h2 className="card-title">{obj.title}</h2> */}
          <div className="mt-5 flex gap-10 items-center ">
            {/* avatar start */}
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={obj.authors[0].profile_picture} />
          </div>
        </div>
        {/* avatar end */}

        <div>
            <h2>{obj.title}</h2>
            <h3>{obj.others.views}</h3>


        </div>

          </div>
        </div>
        

        {/* <img src={obj.authors[0].profile_picture} alt="author image" /> */}
      </div>
    </div>
  );
};

export default Card;
