import React, { useEffect, useState } from "react";
import { PinContainer } from "@/components/ui/3d-pin.jsx";
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Skills() {
    const color = useMotionValue(colors[0]);
    const border = useMotionTemplate`1px solid ${color}`;
    const box_shadow = useMotionTemplate`0px 4px 24px ${color}`;
    const [skill, setSkill] = useState(null);
    useEffect(() => {
        animate(color, colors, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`);
                const data = await res.json();
                if (!res.ok) {
                    return;
                }
                else {
                    setSkill(data.user.skills);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className='relative min-h-screen mt-[250px] flex flex-col gap-10 items-center font-caveat'>
            <motion.h1 className='text-white text-6xl pt-10'>Skills</motion.h1>
            <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-y-24 gap-x-14 p-16 sm:p-5">
                { skill && skill.map((skill)=>(
                    <motion.div key={skill._id}
                    initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'linear' }}
                         className='rounded-lg'
                        >

                    <PinContainer
                    title={skill.name}
                    >
                    <div  
                    className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
                        
                        <div className="flex flex-1 w-full rounded-lg mt-4" >
                            <img src={skill.image.url} alt="" />
                        </div>
                    </div>
                </PinContainer>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
