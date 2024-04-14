"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { motion } from "framer-motion";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Reveal from "./ui/Reveal";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./badge";

// import DevImg from './hero/developer.png';
// import Badge from './Badge'
// import Socials from './Socials'

const Me = () => {
  const [showArrow, setshowArrow] = useState(true);
  useEffect(() => {
    const listner = window.addEventListener("scroll", () => {
      window.scrollY > 140 ? setshowArrow(false) : setshowArrow(true);
    });

    return () => {
      window.addEventListener("scroll", listner);
    };
  }, []);

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-curve bg-no-repeat bg-bottom bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center md:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              <div className="">
                <h1 class="">Web developer</h1>
              </div>
            </div>
            <h1 className="h1 mb-4">
              Hello, my name is <Reveal>Vishal Meti </Reveal>
            </h1>
            <p className="subtitle max-w-[490px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              possimus iure est culpa labore necessitatibus aperiam incidunt nam
              illo autem.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>

            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[30px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden md:flex relative floating">
            <Badge className="" icon={<RiBriefcase4Fill/>} endCount={2} endCountText='Years of experience' />
            <div
              className="bg-hero_shape2_light zi--1 dark:bg-hero_shape2_dark w-[500px] z-0 h-[500px] bg-no-repeat absolute -top-1 -right-2"
              // style={{ "z-index": "-1" }}
            ></div>
            <DevImg
              containerStyles="bg-hero_shape  dark:bg-hero_shape_dark w-[510px] h-[462px] bg-no-repeat"
              imgSrc="/hero/meFinal.png"
            />
          </div>
        </div>
        <div className="xl:flex hidden absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          {showArrow && <RiArrowDownSLine className="text-6xl text-primary" />}
        </div>
      </div>
    </section>
  );
};

export default Me;