"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Project Managment</li>
        <li>Strategic Vision</li>
        <li>Computer Skills</li>
        <li>Leadership</li>
        <li>Team Management</li>
        <li>Technology Integration</li>
        <li>Press Releases</li>
        <li>Microsoft Office</li>
      </ul>
    ),
  },
  {
    title: "Awards",
    id: "awards",
    content: (
      <ul className="list-disc pl-2">
        <li>President&apos;s Volunteer Service Award Gold</li>
        <li>National Team Banking and Financial Systems</li>
        <li>7th Digital Video Production</li>
        <li>Honors with Distinction</li>
        <li>Business Achievement Awards</li>
        <li>LA County Biochemistry Recognition</li>
        <li>1st Dan Kukkiwon Black Belt Certification</li>
        <li>AP Scholar</li>
      </ul>
    ),
  },
  {
    title: "Courses",
    id: "courses",
    content: (
      <ul className="list-disc pl-2">
        <li>AP Precalculus &#40;5&#41;</li>
        <li>AP Computer Science Principles &#40;5&#41;</li>
        <li>AP European History &#40;4&#41;</li>
        <li>AP Calculus BC</li>
        <li>AP Physics 1</li>
        <li>AP English and Composition</li>
        <li>AP Computer Science A</li>
        <li>AP United States History</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/ayaan-about.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am an entrepreneurial rising junior with a profound interest in the integration of finance and technology in the business world. I&apos;m passionate and dedicated to staying on the cutting edge of these dynamic fields, constantly seeking opportunities to enhance my skills and expand my knowledge. My ultimate goal is to leverage this expertise to make a meaningful and positive impact on the industry and beyond.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("awards")}
              active={tab === "awards"}
            >
              {" "}
              Awards{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("courses")}
              active={tab === "courses"}
            >
              {" "}
              Courses{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
