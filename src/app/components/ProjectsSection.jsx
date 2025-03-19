"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Impact Code",
    description: "Impact Code is a 501(c)(3) non-profit organization providing the younger generation with essential coding and artificial intelligence skills.",
    image: "/images/projects/ic-full.png",
    tag: ["All","Initiatives"],
    gitUrl: "javascript:void(0)",
    previewUrl: "javascript:void(0)",
  },
  {
    id: 2,
    title: "The IB Project",
    description: "Fully supporting family-owned businesses. ranging from financial aid to business consultations actively raising $2000+ in support.",
    image: "/images/projects/ib-full.png",
    tag: ["All", "Initiatives"],
    gitUrl: "javascript:void(0)",
    previewUrl: "javascript:void(0)",
  },
  {
    id: 3,
    title: "Headstarter AI Fellowship",
    description: "Building 5+ AI apps with 98% accuracy as seen by 1000+ users; coached by Amazon, Bloomberg, Capital One, and MIT graduate engineers.",
    image: "/images/projects/headstart-full.png",
    tag: ["All","Upcoming"],
    gitUrl: "javascript:void(0)",
    previewUrl: "javascript:void(0)",
  },
  {
    id: 4,
    title: "FBLA External Communications Director",
    description: "Managing all external communication for the largest local chapter in the nation with 1100+ members through press releases and guest speakers.",
    image: "/images/projects/fbla-full.png",
    tag: ["All","Initiatives"],
    gitUrl: "javascript:void(0)",
    previewUrl: "javascript:void(0)",
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
        Experience
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Initiatives"
          isSelected={tag === "Initiatives"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Upcoming"
          isSelected={tag === "Upcoming"}
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
