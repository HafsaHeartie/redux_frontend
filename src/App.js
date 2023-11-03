import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Navbar from "./Components/Navbar";
// import ProductCard from "./Components/ProductCard";
import Home from "./Pages/Home";
 import ProductPage from "./Components/ProductPage";
 import { Provider } from "react-redux";
 import { BrowserRouter } from "react-router-dom";
 import store from "./Store/Store";
import CartList from "./Components/CartList/CartList";



// import "./App.css";

const router = createBrowserRouter([
  {
    path: "home/",
    element: <Home/>
  },
  {
    path: "ProductPage/",
    element: <ProductPage/>
  },
  {
    path: "CartList/",
    element: < CartList/>
  },
]);


function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={router}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RouterProvider>
  </Provider>
    
  );
}

export default App;
