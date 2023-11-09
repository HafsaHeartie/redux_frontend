import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Buttons";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, remove, removeAll } from "../../Store/ReduxSlices/CartSlice";
import Receipt from "../Receipt/Receipt";

const CartList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  console.log("product", products);

  const calculateSubtotal = () => {
    let subtotal = 0;
    products.forEach((item) => {
      subtotal += item.newPrice * item.quantity;
    });
    return subtotal;
  };
  const subtotal = calculateSubtotal();

  return (
    <>
      <Navbar />

      <div>
        <div className="mt-12 ml-12">
          <Link to="/home" className="text-black text-xl font-normal">
            Home/
          </Link>
          <Link to="/cart" className="text-black text-xl font-bold">
            Cart
          </Link>
        </div>
        <div className="p-8 shadow-lg ml-12 mr-12 mt-10">
          <div className="grid grid-cols-4">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
        </div>
        <div className="flex-column justify-start items-start gap-[40px] display-[flex]">
        {products.map((el) => (
          <div className=" relative grid grid-cols-4  p-8 shadow-lg ml-12 mr-12 mt-10">
            <div className="flex" key={el.id}>
              <img src={el.image} alt="" className="flex ml-3 w-24 h-16" />
              <span className="text-xs mt-8 ml-3">{el.title}</span>
            </div>
            <div className="flex ml-3 mt-8">${el.newPrice}</div>
            <div className=" h-fit w-fit border-2 rounded-lg">
              <div className=" items-center font-semibold text-gray-500  outline-none hover-none border-none ">
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={el.quantity}
                  className=" h-12 w-16 text-center  "
                  placeholder="0"
                  onChange={(e)=>{
                    const newQuantity= parseInt(e.target.value,10);
                    if(
                      !isNaN(newQuantity) &&
                      newQuantity >=1 &&
                      newQuantity <= 10
                    ) {
                      if (newQuantity > el.quantity) {
                        dispatch(increaseQuantity(el.id));
                      } else if (newQuantity <el.quantity){
                        dispatch(decreaseQuantity(el.id))
                      }
                    }
                  }}
                />
              </div>
            </div>
            {/*SUbtotal*/}
            <div className="flex ml-3 mt-8">${el.newPrice * el.quantity}</div>
            <div className="absolute left-10 mt-5 w-fit ">
              <button
                className="bg-red-500 w-6 rounded-full"
                onClick={() => dispatch(remove(el.id))}
              >
                x
              </button>
            </div>
          </div>
        ))}
        </div>
        <div className="flex">
          <div className="border ml-12 mt-12 w-fit relative">
            <Button variant="cartall" size="large">
              <Link to="/Productpage">Return To Products</Link>
            </Button>
          </div>
          <div className="border mt-12 w-fit absolute right-12">
            <Button
              variant="cartall"
              size="large"
              onClick={() => dispatch(removeAll())}
            >
              Remove All
            </Button>
          </div>
        </div>
        <Receipt subtotal={subtotal} />
      </div>
    </>
  );
};
export default CartList;
