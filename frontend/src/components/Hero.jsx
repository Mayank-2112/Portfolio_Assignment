import { ArrowRightIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
import { fadeIn } from "@/variants";
import { animate, motion, useAnimation, useMotionTemplate, useMotionValue } from 'framer-motion';
const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
export default function Hero() {
    const color = useMotionValue(colors[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const box_shadow = useMotionTemplate`0px 4px 24px ${color}`;
    useEffect(() => {
      animate(color, colors, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
      });
    }, []);
  return (
    <>
        <motion.div
          initial={{y:-250 ,opacity:0, scale:0}}
          whileInView={{opacity:1, scale:1, y:0}}
          transition={{duration:0.6, ease:'easeInOut'}}
        className='relative z-0 text-white font-caveat flex flex-col justify-center items-center pt-20 gap-5'>
        <div className='flex items-end gap-5'>
                <h1 id='text1' className=' text-2xl sm:text-3xl'>I'm</h1>
                <h1 id='text2' className='text-4xl sm:text-6xl font-bold'>John Doe</h1>
            </div>
            <div className='flex flex-col gap-5 mt-5 justify-center items-center text-center'>
                <h1 id='text3' className=' text-4xl sm:text-8xl font-semibold'>Software Developer</h1>
                <p id='text4' className=' text-3xl sm:text-6xl '>I create 3D visuals, user interfaces and web applications</p>
            </div>
            <motion.button whileHover={{scale:1.015}} whileTap={{scale:0.985}} style={{border: border, boxShadow: box_shadow}} className='px-2 py-1 w-fit flex gap-2 items-center rounded-full mt-5 text-2xl transition-colors bg-gray-950/10 hover:bg-gray-950/50' >
                <span className=''>View Services</span>
                <ArrowRightIcon className='w-5 h-5'/>
            </motion.button>
            
        </motion.div>
    </>
  )
}
