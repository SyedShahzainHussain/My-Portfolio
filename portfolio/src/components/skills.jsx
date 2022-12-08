import React from "react";
import html from "../assets/img/html.png"
import css from "../assets/img/css.png"
import js from "../assets/img/javascript.png"
import github from "../assets/img/github.png"
import react from "../assets/img/react.png"
import tailwind from "../assets/img/tailwind.png"
import firebase from "../assets/img/firebase.png"


const skills = () => {
  return (
    <div  id="skills" className=" bg-[#7652cc] w-full md:h-screen text-white ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
            <p className="font-bold text-4xl inline border-b-4 border-[#edb249]">Skills</p>
            <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className=" w-full grid  grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8  ">
        <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
            <img src={html} alt="" className="w-20 mx-auto" />
            <p className="my-2">HTML</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
            <img src={css} alt="" className="w-20 mx-auto" />
            <p className="my-2">CSS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
            <img src={js} alt="" className="w-20 mx-auto" />
            <p className="my-2">JAVASCRIPT</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
            <img src={react} alt="" className="w-20 mx-auto" />
            <p className="my-2">REACT</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
            <img src={tailwind} alt="" className="w-20 mx-auto" />
            <p className="my-2">TAILWIND</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
            <img src={github} alt="" className="w-20 mx-auto" />
            <p className="my-2">GITHUB</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-90   duration-500">
            <img src={firebase} alt="" className="w-20 mx-auto   " />
            <p className="my-2">FIREBASE</p>
        </div>
      
    

        </div>
      </div>
    </div>
  );
};

export default skills;
