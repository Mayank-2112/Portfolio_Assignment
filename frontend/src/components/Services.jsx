import React, { useEffect, useState } from 'react'
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover.jsx';
const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
export default function Services() {
    const color = useMotionValue(colors[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const box_shadow = useMotionTemplate`0px 4px 24px ${color}`;
    const imageUrl = 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k';
    const imageClassName = 'w-[250px] sm:w-[400px] sm:h-[500px] rounded-lg border-none transition-transform duration-1000 rotate-y-180';
    const [service, setService] = useState(null);
   
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`);
                const data = await res.json();
                if (!res.ok) {
                    return;
                }
                else {
                    setService(data.user.services);
                  
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
        animate(color, colors, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);
    

    return (
        <div className='relative min-h-screen mt-[250px] flex flex-col gap-10 items-center font-caveat'>
            <motion.h1 className='text-white text-6xl pt-10'>What I Do</motion.h1>
            <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 p-5'>

            {service && service.map((ser) => (
                <motion.div key={ser._id}
                initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'linear' }}
                    style={{boxShadow: box_shadow}} className='rounded-lg'
                    >
                    
                    <DirectionAwareHover imageUrl={ser.image.url}>
                        <p className="font-bold text-4xl">{ser.name}</p>
                        <p className="font-semibold text-2xl">{ser.charge}</p>
                    </DirectionAwareHover>
                </motion.div>
            ))}
            </div>
        </div>
    )
}