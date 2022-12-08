import React from "react";
import img from "../assets/img/logo.png";
import { FaBars,FaTimes } from "react-icons/fa";
import { useState } from "react";
import {animateScroll as scroll } from 'react-scroll'
import {Link} from "react-scroll"


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navHandler =  () => {
    setNav(!nav);
  };



  return (
    <>




 <div
  className="fixed flex   justify-between
items-center w-full px-4 text-gray-200 h-[80px]  bg-[#7652cc] "
>
  <div onClick={()=>{scroll.scrollToTop()}} >
    <img className="cursor-pointer" src={img} alt="" style={{ width: "80px" }} />
  </div>

  <ul className=" hidden md:flex  li cursor-pointer ">
    <Link className="li hover:text-[#bdca]   hover:border-b-[#edb429] hover:border-b-2 active:border-b-[#edb429] active:pb-[12px]  active:border-b-2 " to="home" smooth={true}  duration={500} offset={50}>Home</Link>
    <Link className="li hover:text-[#bdca]   hover:border-b-[#edb429] hover:border-b-2 active:border-b-[#edb429] active:pb-[12px] active:border-b-3 " to="about" smooth={true} duration={500} offset={50} >About</Link>
    <Link className="li hover:text-[#bdca] hover:border-b-[#edb429] hover:border-b-2" to="skills" smooth={true} duration={500} offset={50} >Skills</Link>
    <Link className="li hover:text-[#bdca]  hover:border-b-[#edb429] hover:border-b-2" to="work" smooth={true} duration={500} offset={50} >Work</Link>
    <Link className="li hover:text-[#bdca]   hover:border-b-[#edb429] hover:border-b-2" to="contacts" smooth={true} duration={500} offset={50} >Contacts</Link>
  </ul>
  <div onClick={navHandler} className="md:hidden z-10 cursor-pointer">
    {!nav ?<FaBars /> : <FaTimes/>}
  </div>

  <ul onClick={navHandler}
    className={
      !nav
        ? "hidden"
        : "absolute   inset-0 flex flex-col  py-6   justify-center items-center w-full h-screen bg-[#7652cc]"
    }
  >
      <Link className="li text-4xl py-5" onClick={navHandler} to="home" smooth={true}  duration={500} offset={50}>Home</Link>
    <Link className="li text-4xl py-5" onClick={navHandler} to="about" smooth={true} duration={500} offset={50} >About</Link>
    <Link className="li text-4xl py-5" onClick={navHandler} to="skills" smooth={true} duration={500} offset={50} >Skills</Link>
    <Link className="li text-4xl py-5" onClick={navHandler} to="work" smooth={true} duration={500} offset={50} >Work</Link>
    <Link className="li text-4xl py-5" onClick={navHandler} to="contacts" smooth={true} duration={500} offset={50} >Contacts</Link>
  </ul>
</div>



    </>

    
  );
};

export default Navbar;













