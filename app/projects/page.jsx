"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/Activities/1.png",
    name: "Keyboard-store",
    description: "Searching or Filtering",
    link: "https://mycustomkey-potsawat.netlify.app/",
    github: "https://github.com/Potswt/keyboard-store.git",
  },
  {
    image: "/Activities/2.png",
    name: "Bmi-cal",
    description: "BMI Calculator with JavaScript",
    link: "https://bmicalproject.netlify.app/",
    github: "https://github.com/Potswt/Bmi-cal.git",
  },
  {
    image: "/Activities/3.png",
    name: "Pokemon-react",
    description: "Your Favorite Pokemon, work with Poke API",
    link: "https://poke-api-project.netlify.app/",
    github: "https://github.com/Potswt/pokemon-react.git",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {projectData.map((project, index) => {
              return (
                <TabsContent key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
      <div className="h-[550px]"></div>
    </section>
  );
};

export default Projects;
