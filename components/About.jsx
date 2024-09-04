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
  User,
} from "lucide-react";
import { get } from "react-hook-form";
import { m } from "framer-motion";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Potsawat Krudprasert",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "097 227 4725",
  },
  {
    icon: <MailIcon size={20} />,
    text: "potsawat035@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "29 Jan, 2003",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Information communication and technology (ICT)",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Pakkred, Nonthaburi",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Sripatum University",
        qualification: "Bachelor of Science",
        years: "2021-Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Node.js",
      },
      {
        name: "Git",
      },
      {
        name: "React",
      },
      {
        name: "Tailwind css",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light 
          dark:bg-about_shape_dark w-[505px] h-[505px] 
          bg-no-repeat relative absolute -right-[50px]"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      I'm an ICT student passionate about Front-end Development.
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I've got a good grasp of HTML, CSS, and JavaScript, and
                      I'm diving into React frameworks now. I'm excited to join
                      a team and build amazing websites.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* wrapper */}
                    <div>
                      {/* eduction */}
                      <div className="flex gap-x-4 items-center text-[22px] text-primary mb-3">
                        <GraduationCap />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, "education").title}
                        </h4>
                      </div>
                      {/* list */}
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, "education").data.map(
                          (item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-primary relative ml-2">
                                  <div
                                    className="w-[11px] h-[11px] rounded-full bg-primary 
                                    absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"
                                  ></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I Use</h3>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-primary mb-4"></div>
                    </div>
                    {/* skill list */}
                    <div className="mb-16">
                      {getData(skillData, "skills").data.map((item, index) => {
                        const { name } = item;
                        return (
                          <div
                            className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="font-medium">{name}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-primary mb-4"></div>
                      {/* tool list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
