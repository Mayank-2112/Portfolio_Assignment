import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card.jsx';
import { motion, animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";


export default function Contact() {
    const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
    const color = useMotionValue(colors[0]);
    const border = useMotionTemplate`1px solid ${color}`;
    const box_shadow = useMotionTemplate`0px 4px 24px ${color}`;

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

        animate(color, colors, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    return (
        <div className='relative min-h-screen mt-[150px] flex flex-col gap-10 justify-center items-center font-caveat'>
            <motion.h1 className='text-white text-6xl pt-10'>Contact Me</motion.h1>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'linear' }} style={{ boxShadow: box_shadow }} className="rounded-xl">

                <CardContainer className="inter-var font-caveat" >
                    <CardBody className="bg-gray-950/10 hover:bg-gray-950/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  sm:w-[45rem] h-auto rounded-xl p-3 border">
                        <div className="flex flex-col-reverse sm:flex-row-reverse justify-center items-center gap-5 ">
                            <div className="flex flex-1 flex-col justify-center items-center p-4 gap-5">
                                <CardItem translateZ="50" className="text-5xl font-bold text-white w-full">
                                    <Label className='text-xl'>Full Name</Label>
                                    <Input className='p-5' type='full_name' placeholder='Enter your name' />
                                </CardItem>
                                <CardItem translateZ="60" className="text-white text-2xl w-full">
                                    <Label className='text-xl'>Email</Label>
                                    <Input className='p-5' type='email' placeholder='Enter your email' />
                                </CardItem>
                                <CardItem translateZ="60" className="text-white text-2xl w-full">
                                    <Label className='text-xl'>Message</Label>
                                    <Textarea placeholder='Enter your message' />
                                </CardItem>
                                <CardItem  translateZ="60" className="text-white text-2xl max-w-sm mt-2 w-full">
                                    <motion.button whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }} style={{ border: border, boxShadow: box_shadow }} className='px-2 py-1 rounded-lg justify-center flex gap-2 w-full mt-5 text-2xl transition-colors bg-gray-950/10 hover:bg-gray-950/50' >
                                        Submit
                                    </motion.button>
                                </CardItem>
                                <CardItem translateZ="60" className="text-white text-2xl max-w-sm mt-2 w-full text-center">
                                    <h1>Or contact at</h1>
                                </CardItem>
                                <CardItem translateZ="60" className="text-white text-2xl max-w-sm mt-2 w-full">
                                    <div className='flex justify-center gap-5'>
                                        <InstagramLogoIcon className='h-7 w-7' />
                                        <TwitterLogoIcon className='h-7 w-7' />
                                        <GitHubLogoIcon className='h-7 w-7' />
                                        <LinkedInLogoIcon className='h-7 w-7' />
                                    </div>
                                </CardItem>

                            </div>
                            <CardItem translateZ="150" className="w-full mt-4 flex-1">
                                <img
                                    src='https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1711525564606-1j950d.webp'
                                    height="1000"
                                    width="1000"
                                    className="h-[400px] w-84 object-cover rounded-xl group-hover/card:shadow-xl"
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
