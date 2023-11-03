import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Buttons";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import {FaAngleUp} from "react-icons/fa"
import {FaAngleDown} from "react-icons/fa"
import { remove, removeAll } from "../../Store/ReduxSlices/CartSlice";

const CartList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  console.log("product", products);



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
        {products.map((el) => {
          return (
            <div className="p-8 flex shadow-md ml-12 mr-12 mt-12">
              <img className="w-12" src={el.image} alt="" />
              <p className="ml-4 text-sm">{el.title}</p>
              <p className="ml-20">{el.newPrice}</p>

              <span className="ml-80">
                <div className="relative flex justify-center w-12 h-12 mt-2">
                  <div className="bg-slate-200 rounded">
                    <input
                      className="bg-slate-200 h-full w-16 ml-4 rounded placeholder-gray-500"
                      placeholder="0"
                    />
                  </div>
                  <div className="absolute grid grid-row right-0.5 top-1.5 gap-1">
                    <button>
                      <FaAngleUp />
                    </button>
                    <button>
                      <FaAngleDown />
                    </button>
                  </div>
                </div>
              </span>
              <p className="ml-64">{el.newPrice}</p>
              <AiFillDelete
                size={25}
                className="ml-32"
                onClick={() => dispatch(remove(el.id))}
              />
            </div>
          );
        })}

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

        <div className="w-96 border-2 border-gray-700 p-6 rounded ml-12 mt-32 mb-6">
          <h1 className="p-2 font-bold">Cart Total</h1>
          <div className="flex text-md border-b p-3 grid grid-cols-2">
            Subtotal
            <span className="flex justify-end">$1750</span>
          </div>
          <div className="flex text-md border-b  p-3 grid grid-cols-2">
            Shiping
            <span className="flex justify-end">Free</span>
          </div>
          <div className="flex text-md  p-3 grid grid-cols-2">
            Total
            <span className="flex justify-end">$1750</span>
          </div>
          <div className="p-3 flex justify-center">
            <Button variant="danger" size="large" className="">
              Download Receipt
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartList;
