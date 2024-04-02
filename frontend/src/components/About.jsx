import React, { useEffect } from 'react'
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover.jsx';
const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
export default function About() {
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const box_shadow = useMotionTemplate`0px 4px 24px ${color}`;
  const imageUrl  = 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k';
  const imageClassName = 'w-[250px] sm:w-[400px] sm:h-[500px] rounded-lg border-none transition-transform duration-1000 rotate-y-180'
  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <div className='relative min-h-screen mt-[250px] flex flex-col gap-10 justify-center items-center font-caveat'>
      <motion.h1 className='text-white text-6xl pt-10'>About Me</motion.h1>
      <motion.div
      initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'linear' }}>
    
    <DirectionAwareHover
     imageUrl={imageUrl}>
        <p className="font-bold text-xl">John Doe</p>
        <p className="font-normal text-sm">As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.</p>
      </DirectionAwareHover>
        </motion.div>
    </div>
  )
}