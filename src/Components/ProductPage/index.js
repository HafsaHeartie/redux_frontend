import React from "react";
import image1 from "../../Assets/heart small.png";
import ProductData from "../../Pages/ProductData";
import { Button } from "../Buttons";
import Navbar from "../Navbar";
import Banner2 from "../Banner2";
import { useDispatch } from "react-redux";
import { add } from "../../Store/ReduxSlices/CartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(add(item));
  };
  return (
    <>
      <Navbar />
      <Banner2 />
      <div className="flex  ml-12">
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
          {ProductData.slice().map((product) => (
            <div key={product.id} className=" mb-6 mt-6   w-[322px] shadow-lg">
              <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
                <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                  {/* discount */}
                  <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                    {product.discountInPercentage}
                  </div>
                </div>
                <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
                  <div className="w-[34px] h-[34px] relative">
                    <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                    <div className="w-6 h-6 left-[5px] top-[5px] absolute">
                      <img
                        src={image1}
                        alt=""
                        className="flex justify-center "
                      />{" "}
                    </div>
                  </div>
                </div>
                {/* image */}
                <div className="w-[190px] h-[180px] px-[9px] py-3.5 left-[40px] top-[35px] absolute justify-center items-center inline-flex">
                  <img
                    className="w-[172px] h-[152px]"
                    src={product.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="mb-3 flex justify-center">
                <Button
                  variant="cart"
                  size="large"
                  className="w-[270px] h-[41px] -ml-14"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.25 3.75H5.25L7.5 16.5H19.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5 12.5H19.1925C19.2792 12.5001 19.3633 12.4701 19.4304 12.4151C19.4975 12.3601 19.5434 12.2836 19.5605 12.1986L20.9105 5.44859C20.9214 5.39417 20.92 5.338 20.9066 5.28414C20.8931 5.23029 20.8679 5.18009 20.8327 5.13717C20.7975 5.09426 20.7532 5.05969 20.703 5.03597C20.6528 5.01225 20.598 4.99996 20.5425 5H6"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="ml-2" onClick={() => handleAdd(product)}>
                    Add To Cart
                  </span>
                </Button>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                {/* title */}
                <div className="text-black text-base font-medium  leading-normal">
                  {product.title}
                </div>
                <div className="justify-start items-start gap-3 inline-flex">
                  {/* newprice */}
                  <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">
                    {product.newPrice}
                  </div>
                  {/* oldprice */}
                  <div className="opacity-50 text-black text-base font-medium  font-['Poppins'] line-through leading-normal">
                    {product.oldPrice}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductPage;
