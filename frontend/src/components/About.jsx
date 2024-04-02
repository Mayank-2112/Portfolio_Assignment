// import React, { useEffect } from 'react'
// import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
// import { DirectionAwareHover } from '@/components/ui/direction-aware-hover.jsx';
// export default function About() {





















//     <DirectionAwareHover
//      imageUrl={imageUrl}>
//         <p className="font-bold text-xl">John Doe</p>
//         <p className="font-normal text-sm">As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.</p>
//       </DirectionAwareHover>
//         </motion.div>
//     </div>
//   )
// }
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card.jsx';
import { motion, animate, useMotionTemplate, useMotionValue } from "framer-motion";
const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
export default function About() {
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
  const [about, setAbout] = useState(null);
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`);
        const data = await res.json();
        if (!res.ok) {
          return;
        }
        else {
          setAbout(data.user.about);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAbout();
  }, []);

  return (
    <div className='relative min-h-screen mt-[250px] flex flex-col gap-10 justify-center items-center font-caveat'>
      <motion.h1 className='text-white text-6xl pt-10'>About Me</motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'linear' }} style={{boxShadow: box_shadow}} className="rounded-xl">

        <CardContainer className="inter-var font-caveat" >
          <CardBody className="bg-gray-950/10 hover:bg-gray-950/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  sm:w-[45rem] h-auto rounded-xl p-6 border">
            <div className="flex flex-col-reverse sm:flex-row-reverse justify-center items-center gap-5 ">
              <div className="flex flex-1 flex-col justify-center items-center p-5 gap-5">
                <CardItem translateZ="50" className="text-5xl font-bold text-white">
                  {about && about.name}
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-white text-2xl max-w-sm mt-2">
                  {about && about.description}
                </CardItem>
              </div>
              <CardItem translateZ="150" className="w-full mt-4 flex-1">
                <img
                  src={about && about.avatar.url}
                  height="1000"
                  width="1000"
                  className="h-96 w-80 object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

            </div>
          </CardBody>
        </CardContainer>
      </motion.div>
    </div>
  );
}
