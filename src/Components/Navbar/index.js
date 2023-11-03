import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import image1 from '../../Assets/Wishlist.png'
import image2 from '../../Assets/Cart1.png'

function Navbar() {
  const product = useSelector((state) => state.cart.products);
  const item = useSelector((state) => state.cart.favourite);
  return (
    <>
      <nav className=" flex justify-between bg-white text-black ">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <h2 className="text-2xl font-bold">Exclusive</h2>
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <a className="hover:text-gray-200" href="/home">
                Home
              </a>
            </li>
            <li>
              <Link to={"/ProductPage"}
               className="hover:text-gray-200" >
                Products
                </Link>
              
            </li>
          </ul>
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className=" mr-6 relative ">
              <input
                type="search"
                id="default-search"
                className="block w-64 p-3 text-sm text-gray-900  rounded-lg bg-slate-100 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="What are you looking for?"
                required
              />
              <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none ">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </form>
          <div className=" relative hidden xl:flex items-center space-x-5 ">
          
          <div className="flex items-center hover:text-gray-200">
              <Link to="/">
                <img src={image1} alt="" className="" />
              </Link>
              <span className="flex absolute top-2 ml-4">
                <span className=" inline-flex justify-center rounded-full w-6 h-6 bg-red-600">
                  <div className="text-black ">{item.length}</div>
                </span>
              </span>
            </div>
           
          



            <Link to={"/CartList"} className="flex items-center hover:text-gray-200" >
            <img src={image2} alt="" className="" />
              <span className="flex absolute top-2 ml-4">
                
                <span className=" inline-flex justify-center rounded-full h-6 w-6 bg-red-600 ">
                  <div className="text-black flex  ">{product.length}</div>
                </span>
              </span>
            </Link>
          </div>
        </div>
        <a  className="xl:hidden flex mr-6 items-center" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full  opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 "></span>
          </span>
        </a>
      </nav>
      <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10"></div>
      <hr />
      
    </>
  );
}
export default Navbar;







