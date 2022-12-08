import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [isVisible , setVisible] = useState(false)
    const listenToScroll =()=>{
        let heightToHidden = 250
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if(winScroll>heightToHidden){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",listenToScroll)
    },[])

  return (
    <>    {isVisible && (
    <div  onClick={()=>{scroll.scrollToTop()}} className=' icon flex justify-center 
    items-center text-2xl h-[3rem] shadow-md fixed bottom-5 cursor-pointer right-5 z-[999] w-[3rem]  
      bg-[#edb429] rounded-[50%]  '>
   <FaArrowUp className='top-2'/>

    </div>
    )}

</>

  )}

export default ScrollToTop
