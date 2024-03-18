"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ProgressiveTutor",
    description: "This is a project developed as a prototype for my bachelor's thesis where it's function is to help the learning process of IT related tecnologies. The way it does that is by having a simple and modular approach where one can use the baseline structure provided to make tutorials with the content that already exist, but is scattered across the internet, gathering it all in a single place to help save of the users of the modules created with this project.",
    image: "/images/projects/ProgressiveTutor.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ArturRA/progressive_tutor_tutorial",
    previewUrl: "https://raw.githubusercontent.com/ArturRA/portfolio-website/master/public/images/projects/ProgressiveTutor.png",
  },
  {
    id: 2,
    title: "Multiplataform App",
    description: "This is the note keeping web application developped for the web module of ProgressiveTutor.",
    image: "/images/projects/MultiplataformApp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ArturRA/progressive_tutor_multiplataform",
    previewUrl: "https://raw.githubusercontent.com/ArturRA/portfolio-website/master/public/images/projects/MultiplataformApp.png",
  },
  {
    id: 3,
    title: "Desktop App",
    description: "This is the note keeping desktop application developped for the desktop module of ProgressiveTutor.",
    image: "/images/projects/DesktopApp.png",
    tag: ["All", "Desktop"],
    gitUrl: "https://github.com/ArturRA/NoteKeeperTCC",
    previewUrl: "https://raw.githubusercontent.com/ArturRA/portfolio-website/master/public/images/projects/DesktopApp.png",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;