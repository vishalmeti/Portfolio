import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Vishal Meti",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 9902638798",
  },
  {
    icon: <MailIcon size={20} />,
    text: "vishalmeti9@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 11 Jan, 2001",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelors Degree in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Bangalore, India",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "SDM College of Engineering and Technology",
        qualification: "Bachelor of Computer Science",
        years: "2018-2022",
        grade: "8.02 CGPA",
      },
      {
        university: "Scaler",
        qualification: "Programing and Upskilling",
        years: "2022-2023",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "SONY",
        qualification: "Software Engineer / Web Developer",
        years: "Aug 2022 - Aug 2023",
      },
      {
        company: "Disprz",
        qualification: "Associate Software Engineer / Web Developer",
        years: "Aug 2023 - Current",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "React Js / Redux",
      },
      {
        name: "Next Js",
      },
      {
        name: "Python",
      },
      {
        name: "Lit Js",
      },
      {
        name: "JavaScript",
      },
      {
        name: "FrontEnd Developement",
      },
      {
        name: "Git / Version control",
      },
      {
        name: "Django",
      },
      {
        name: "Express.js / Mongo Db",
      },
      {
        name: "HTML / CSS",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 mt-6 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="">
            {/* image  */}
            <div>
                {/* <DevImg containerStyles='bg_about_shape_light dark:bg_about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/hero/meFinal.png'/> */}
                {/* <Image className="w-[505px] h-[505px] hidden md:flex rounded-tl-3xl rounded-br-3xl" width={400} height={300} src='/hero/AboutImage.jpeg'/> */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
