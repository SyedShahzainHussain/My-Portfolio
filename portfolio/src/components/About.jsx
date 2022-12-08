import React from "react";

const About = () => {
  return (
    <div id="about"  className="bg-[#7652cc] w-full md:h-screen text-white">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#edb429] ">About</p>
          </div>
        
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div  className="sm:text-right text-4xl font-bold">

          <p>Hi, I'm Shahzain, nice to meet you. Please take a look around.</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut unde
          asperiores voluptatibus optio expedita qui quis nesciunt eveniet atque
          laudantium quidem placeat autem, quos, dignissimos, soluta similique.
          Labore neque atque at corporis dolorum doloribus velit?
        </p>
        </div>  
      </div>
    </div>
  );
};

export default About;
