import React from "react";
import image1 from "../../Assets/1200px-Apple_gray_logo 1.png";
import image2 from "../../Assets/banner.png";
import image3 from "../../Assets/icons arrow-right.png";
function Banner() {
  return (
    <>
      <div className=" mt-9 w-screen h-[344px] relative bg-black">
        <img
          className="w-[496px] h-[325px] ml-[396px] top-[16px] absolute"
          src={image2}
          alt="image2"
        />
        <div className="left-[64px] top-[58px] absolute justify-start items-center gap-6 inline-flex">
          <img src={image1} className="w-10 h-[49px]" alt="image1" />

          <div className="w-[126px] h-5 text-center text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
            iPhone 14 Series
          </div>
        </div>
        <div className="w-[250px] left-[64px] top-[127px] absolute text-neutral-50 text-4xl font-semibold  leading-[60px] tracking-widest  ">
          Up to 10% off Voucher
        </div>
        <div className="left-[67px] top-[269px] absolute justify-start items-center gap-2 inline-flex">
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-center text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
              Shop Now
            </div>
            <div className="w-[81px] h-[0px] border border-neutral-50"></div>
          </div>
          <img className="flex -ml-4 -mt-1" src={image3} alt="image3" />
          <div className="w-6 h-6 relative" />
        </div>
      </div>
      
    </>
  );
}

export default Banner;
