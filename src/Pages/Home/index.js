import React, { } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Navbar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import ProductCard from "../../Components/ProductCard";
const Home = () => {
  
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 3, 750: 2, 900: 1 }}>
        <Masonry
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <Navbar />
          <Banner />
          <ProductCard/>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
export default Home;









