import React from "react";
import img1 from "../../src/assets/img/img1.png";
import img from "../../src/assets/img/img.png";
import img2 from "../../src/assets/img/img2.png";
import img4 from "../../src/assets/img/img4.png";
import Cart from "./Cart";


const Works = () => {
  return  (
    <div  id="work" className="w-full bg-[#7652cc] md:h-screen  text-white">
      <div className="flex flex-col max-w-[1000px] w-full   justify-center  p-4 ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#edb249]">
            Work
          </p>
          <p className="py-6">Check out my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        
<Cart img={img1}  heading={"JavaScript Project"} publish="https://syedshahzainhussain.github.io/PasswordGenerator.github.io/" code="https://github.com/SyedShahzainHussain/PasswordGenerator.github.io"  />
 <Cart img={img}  heading={"JavaScript Project"} publish="https://syedshahzainhussain.github.io/React-Todo-App/" code="https://github.com/SyedShahzainHussain/React-Todo-App"  />
 <Cart img={img2}  heading={"JavaScript Project"} publish="https://syedshahzainhussain.github.io/GitHUbProfile.github.io/" code="https://github.com/SyedShahzainHussain/GitHUbProfile.github.io"  /> 
<Cart img={img4}  heading={"Html Css Project"} publish="https://syedshahzainhussain.github.io/Gym-Responsive-Website-With-html-and-css-github.i/" code="https://github.com/SyedShahzainHussain/Gym-Responsive-Website-With-html-and-css-github.i"  />


  
        </div>
      </div>
    </div>
  );
};

export default Works;
