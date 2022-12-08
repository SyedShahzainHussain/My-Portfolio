import React from 'react'
import {Link} from "react-scroll"
const Cart = (props) => {
  return (
    <div>
          <div
            style={{ backgroundImage: `url(${props.img})` }}
            className="shadow-lg shadow-[#040c16] group container  h-[250px] rounded-md flex justify-center items-center mx-auto bg-cover bg-no-repeat bg-center object-cover  "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold text-2xl tracking-wider">
                {props.heading}
              </span>
              <div className="text-center pt-8 ">
                <a href={props.publish} target="_blank" >
                  <button className="px-4 text-center rounded-lg py-3 m-2 bg-black font-bold text-large">
                    Demo
                  </button>
                </a>
                <a href={props.code} target="_blank">
                  <button className="px-4 rounded-lg bg-black py-3 m-2 font-bold text-center text-large">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Cart
