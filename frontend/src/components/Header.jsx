import React from "react";
import { Button } from "./ui/button";
import { HamburgerMenuIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
import {motion} from 'framer-motion';

export default function Header() {
  return (
    <>
        <motion.div initial={{y:-100}} animate={{y:0}} transition={{duration: 1 , ease:'easeIn'}}
        className="text-white flex justify-between md:justify-around items-center pt-3 font-caveat px-5 sticky top-0">
            <h1 className="text-2xl sm:text-5xl font-bold">Portfolio.</h1>
            <div className="hidden lg:inline">
            <ul className=" flex-row flex gap-10 items-center text-2xl">
                <li className="hover:border-b-2 font-semibold">Home</li>
                <li className="hover:border-b-2 font-semibold">About</li>
                <li className="hover:border-b-2 font-semibold">Services</li>
                <li className="hover:border-b-2 font-semibold">Experience</li>
                <li className="hover:border-b-2 font-semibold">Skills</li>
                <li className="hover:border-b-2 font-semibold">Projects</li>
                <li className="hover:border-b-2 font-semibold">Contact</li>
            </ul>
            </div>
            <div className='gap-2 hidden lg:inline'>
                <Button className='rounded-lg bg-transparent hover:scale-125'><InstagramLogoIcon className='h-6 w-6'/></Button>
                <Button className='rounded-lg bg-transparent hover:scale-125'><TwitterLogoIcon className='h-6 w-6'/></Button>
                <Button className='rounded-lg bg-transparent hover:scale-125'><GitHubLogoIcon className='h-6 w-6'/></Button>
                <Button className='rounded-lg bg-transparent hover:scale-125'><LinkedInLogoIcon className='h-6 w-6'/></Button>
            </div>
        <div className="lg:hidden">
        <Popover>
          <PopoverTrigger>
            <Button variant="icon">
              <HamburgerMenuIcon className="h-5 w-5 cursor-pointer" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='flex flex-col gap-5 w-auto bg-white text-black font-caveat'>
            <ul className="flex-row gap-10 items-center text-xl ">
                <li className="font-semibold">Home</li>
                <li className="font-semibold">About</li>
                <li className="font-semibold">Services</li>
                <li className="font-semibold">Experience</li>
                <li className="font-semibold">Skills</li>
                <li className="font-semibold">Projects</li>
                <li className="font-semibold">Contact</li>
            </ul>
            <div className='flex gap-2'>
                <InstagramLogoIcon className='h-5 w-5'/>
                <TwitterLogoIcon className='h-5 w-5'/>
                <GitHubLogoIcon className='h-5 w-5'/>
                <LinkedInLogoIcon className='h-5 w-5'/>
            </div>
          </PopoverContent>
        </Popover>
        </div>

        </motion.div>
    </>
  );
}
      