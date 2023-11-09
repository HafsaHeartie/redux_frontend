import React from "react";
import { Button } from "../Buttons";
import items from "../../Pages/ProductData";
import { add } from "../../Store/ReduxSlices/CartSlice";
import { useDispatch } from "react-redux";

const Banner2 = () => {
  const dispatch = useDispatch();
  const handleAllToCart = () => {
    items.map((item) => dispatch(add(item)));
  };
  return (
    <div className="w-full h-fit p-3 mt-14 ">
      <div className="flex text-lg font-semibold ml-12 items-center relative">
        <h1 className="text-xl">{`Total Products(${items.length})`}</h1>

        <div className="right-6 absolute border-2 border-neutral-100 rounded">
          <Button variant="cartall" size="large" onClick={handleAllToCart}>
            Move All To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Banner2;
