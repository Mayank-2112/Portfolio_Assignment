// import React, { useEffect, useState } from 'react'
// import { fadeIn } from "@/variants";
// export default function Hero() {

//   return (
//     <>
//         <motion.div
          
//         className='relative z-0 text-white font-caveat flex flex-col justify-center items-center pt-20 gap-5'>




//         </motion.div>
//     </>
//   )
// }

import { TypewriterEffectSmooth } from '@/components/ui/typewritter-effect';
import { animate, motion, useAnimation, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons'


export default function Hero() {
  const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(colors[0]);
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
  const words = [
    { text: 'I' }, { text: 'create' }, { text: '3D' }, { text: 'visuals,' }, { text: 'user' }, { text: 'interfaces' }, { text: 'and' }, { text: 'web' }, { text: 'applications' }
  ];

  return (
    <motion.div 
    className="flex flex-col items-center justify-center h-[40rem] font-caveat text-white">
      <div className='flex items-end gap-5 z-20'>
        <h1 id='text1' className=' text-2xl sm:text-3xl'>I'm</h1>
        <h1 id='text2' className='text-4xl sm:text-6xl font-bold'>John Doe</h1>
      </div>
      <div className='flex flex-col gap-5 mt-5 justify-center items-center text-center z-20'>
        <h1 id='text3' className=' text-4xl sm:text-8xl font-semibold'>Software Developer</h1>

        <TypewriterEffectSmooth words={words} />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 z-10">
        <motion.button whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }} style={{ border: border, boxShadow: box_shadow }} className='px-2 py-1 w-fit flex gap-2 items-center rounded-full mt-5 text-2xl transition-colors bg-gray-950/10 hover:bg-gray-950/50' >
          <span className=''>View Services</span>
          <ArrowRightIcon className='w-5 h-5' />
        </motion.button>

      </div>
    </motion.div>
  );
}
