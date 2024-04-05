import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card.jsx";
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export function Testimonials() {
    const [testimonial, setTestimonial] = useState([]);

    
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
                 const data = await res.json();
                if (!res.ok) {
                  console.log('Error')
                    return;
                }
                else{
                  setTestimonial(data.user.testimonials);

                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchTestimonials();

        
    }, []);
    
    const Testimonials_Array = [];
        testimonial.forEach((test) => {
            let obj = {
                name: test.name,
                title: test.position,
                quote: test.review
            }
            Testimonials_Array.push(obj);
        });

  return (
    
    <div className='relative min-h-screen mt-[250px] flex flex-col gap-10 items-center font-caveat'>
            <motion.h1 className='text-white text-6xl pt-10'>Testimonials</motion.h1>
        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'linear' }}  
        >
      <InfiniteMovingCards
        items={Testimonials_Array}
        direction="right"
        speed="slow"
      />
      </motion.div>
    </div>
  );
}

