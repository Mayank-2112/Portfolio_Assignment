import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MoonIcon } from '@radix-ui/react-icons';
export default function Education() {
    const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
    const color = useMotionValue(colors[0]);
    const border = useMotionTemplate`1px solid ${color}`;
    const box_shadow = useMotionTemplate`0px 4px 24px ${color}`;
    const [Timeline, setTimeline] = useState([]);
    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const res = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`);
                const data = await res.json();
                if (!res.ok) {
                    return;
                }
                else {
                    setTimeline(data.user.timeline);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchAbout();

        animate(color, colors, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });

        
    }, []);
    const education = [];
        Timeline.forEach((item)=>{
            if(item.forEducation === true){
                education.push(item);
            }

        });
    return (
        <>
            <div className='relative min-h-screen mt-[250px] flex flex-col gap-10 justify-center items-center font-caveat'>
                <motion.h1 className='text-white text-6xl pt-10'>Education</motion.h1>
                <VerticalTimeline lineColor='black'>
                    { education &&
                        education.map((exp,idx) => (

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work text-white"
                                contentStyle={{ background: 'transparent', color: '#fff', borderBlockColor: 'rgb(156 163 175)' }}
                                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                                date={new Date(exp.startDate).toLocaleDateString().toString()+" - "+new Date(exp.endDate).toLocaleDateString().toString()}
                                iconStyle={{ background: 'black', color: '#fff' }}
                                key={idx}
                            >
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-4xl font-bold'>{exp.jobTitle}</h1>
                                    <h1 className='text-2xl font-semibold text-white'>{exp.company_name}, <span className='text-white'>{exp.jobLocation}</span></h1>
                                    <ul className='flex flex-col gap-1 text-lg'>
                                        {exp.bulletPoints.map((point,idx)=>(
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </VerticalTimelineElement>

                        ))
                    }
                </VerticalTimeline>
                
            </div>
        </>
    )
}
