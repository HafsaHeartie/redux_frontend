import React, { useState } from "react";
import image1 from "../../Assets/heart small.png";
import { Button } from "../Buttons";
import ProductData from "../../Pages/ProductData";
import { add, addFavourite } from "../../Store/ReduxSlices/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = () => {
  const dispatch = useDispatch();
  const searchProduct = useSelector((state) => state.cart.search);
  const [viewAllProduct, setViewAllProduct] = useState(false);
  const Data = viewAllProduct ? ProductData : ProductData.slice(0, 4);

  const handleAdd = (item) => {
    dispatch(add(item));
    console.log(item, "item");
  };
  const AddFavourite = (item) => {
    dispatch(addFavourite(item));
  };
  return (
    <>
      <div className="flex  ml-12">
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
          {Data.filter((il) =>
            searchProduct
              ? il.title.toLowerCase().includes(searchProduct.toLowerCase())
              : true
          ).map((product) => (
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
                        onClick={() => AddFavourite(product)}
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
      <div className="flex justify-center items-center py-5">
        <button
          className="py-5 px-10 bg-[#DB4444] text-white rounded-sm"
          onClick={() => setViewAllProduct(!viewAllProduct)}
        >
          {viewAllProduct ? "Show Less Products" : "View All Products"}
        </button>
      </div>
    </>
  );
};
export default ProductCard;
