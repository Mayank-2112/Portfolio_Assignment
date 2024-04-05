"use client";

import { Tabs } from "@/components/ui/tabs.jsx";
import { motion, animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"


export function Projects() {
  

  const tabs = [
    {
      title: "All",
      value: "All",
      content: (
        <div className="w-full relative h-full rounded-2xl p-5 text-white bg-gray-950/100 overflow-y-auto">
          <DummyContent tabName='All' />
        </div>
      ),
    },
    {
      title: "ReactJs",
      value: "ReactJs",
      content: (
        <div className="w-full relative h-full rounded-2xl p-5 text-white bg-gray-950/100 overflow-y-auto">
          <DummyContent tabName='ReactJs' />
        </div>
      ),
    },
    {
      title: "NextJs",
      value: "NextJs",
      content: (
        <div className="w-full relative h-full rounded-2xl p-5 text-white bg-gray-950/100 overflow-y-auto">
          <DummyContent tabName='NextJs' />
        </div>
      ),
    },
    {
      title: "MERN",
      value: "MERN",
      content: (
        <div className="w-full relative h-full rounded-2xl p-5 text-white bg-gray-950/100 overflow-y-auto">
          <DummyContent tabName='MERN' />
        </div>
      ),
    },
    {
      title: "CSS",
      value: "CSS",
      content: (
        <div className="w-full relative h-full rounded-2xl p-5 text-white bg-gray-950/100 overflow-y-auto">
          <DummyContent tabName='CSS' />
        </div>
      ),
    },
    {
      title: "Tailwind",
      value: "Tailwind",
      content: (
        <div className="w-full relative h-full rounded-2xl p-5 text-white bg-gray-950/100 overflow-y-auto">
          <DummyContent tabName='Tailwind' />
        </div>
      ),
    },

  ];
  
  return (
    <div className='relative min-h-screen mt-[250px] flex flex-col gap-10 items-center font-caveat'>
            <motion.h1 className='text-white text-6xl pt-10'>Projects</motion.h1>
        
    <motion.div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-20"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: 'linear' }}>

      <Tabs tabs={tabs} />
    </motion.div>
    </div>
  );
}

const DummyContent = ({ tabName }) => {
  const [project, setProject] = useState(null);
  const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(colors[0]);
  const border = useMotionTemplate`1px solid ${color}`;
  const box_shadow = useMotionTemplate`0px 4px 24px ${color}`;
 
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`);
        const data = await res.json();
        if (!res.ok) {
          return;
        }
        else {
          setProject(data.user.projects);

        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();

    animate(color, colors, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <>
    
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-10 p-5 w-auto h-auto">

        {project && project.map((pro) => (
            <div className="flex flex-col gap-5 hover:scale-125" key={pro._id} style={{boxShadow:box_shadow}}>
              <h1 className="text-4xl font-semibold font-caveat">{pro.title}</h1>
              <img src={pro.image.url} alt="" className="w-[250px] h-[150px] rounded-lg" />
              <div className="flex gap-3">

              {
                pro.techStack.map((tech,idx)=>(
                    <h1 className="text-lg font-caveat" key={idx}>{tech}</h1>    
                  ))
              }
                </div>
            </div>
        ))}

      </div>
    </>
  );
};
