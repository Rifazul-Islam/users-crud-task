import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi2";
const ServicesCards = ({ travel }) => {
  const { _id, name, img, price, descripe } = travel;
  return (
    <div>
      <div className="my-4 ">
        <div className="card bg-blue-200   h-[500px]">
          <img className="h-52 rounded-lg" src={img} alt="sea" />

          <div className="card-body">
            <h2 className="card-title"> {name} </h2>
            <p>
              {" "}
              {descripe?.length > 100
                ? descripe.slice(0, 100) + ".."
                : descripe}{" "}
            </p>
            <p className="text-2xl">
              {" "}
              <b>Price</b> : ${price}{" "}
            </p>
            <div className="card-actions justify-start">
              {" "}
              <span>
                {" "}
                <button className="btn btn-primary"> Details </button>{" "}
              </span>{" "}
              <span>
                {" "}
                <HiStar className="ml-12  mt-2 text-3xl text-red-700"> </HiStar>
              </span>
              <span>
                {" "}
                <HiStar className="ml-1 mt-2 text-3xl text-red-700">
                  {" "}
                </HiStar>{" "}
              </span>
              <span>
                {" "}
                <HiStar className="ml-1 mt-2 text-3xl text-red-700"></HiStar>{" "}
              </span>
              <span>
                {" "}
                <HiStar className="ml-1 mt-2 text-3xl text-red-700"> </HiStar>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
