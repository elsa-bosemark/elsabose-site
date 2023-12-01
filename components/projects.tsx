"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
 
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <p className="mb-4 text-center">Press Cards to Learn More</p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
           <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
