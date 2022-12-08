import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div id='home' className=" bg-[#7652cc] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex h-full flex-col justify-center">
        <p className="text-[#edb429]">Hi, my name is</p>
        <h1 className="text-4xl md:text-7xl text-[#ffffff] font-bold ">
          Syed Shahzain
        </h1>
        <h2 className="text-4xl md:text-7xl my-2 text-[#b0bbf0] font-bold">
          I'm a Front End Developer.
        </h2>
        <p className="max-w-[700px] text-[#b0bbf0] py-4 text-1xl md:text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi optio,
          at error vel porro nesciunt enim iste quibusdam odio in sed
          architecto!
        </p>
        <div>
          <Link  to="work" smooth={true} offset={50} duration={500}  className="text-white group border-2 cursor-pointer w-fit flex px-4 items-center my-2 py-4 hover:bg-[#edb429] hover:border-[#edb429]">
            View Work
            <span className="group-hover:rotate-90 duration-300 ">
             <HiArrowNarrowRight className="ml-3" />

            </span>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
