import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import SKT4 from "@/public/maker-cart/SKT4.png"


import MCP from "@/public/MCP.png";
import SBP from "@/public/SBP.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "React Native",
  "Figma",
  "Procreate",
  "Rhino (CAD)",
  "Canva",
  "Laser Cutter", 
  "Table Saw",
  "Miter Saw"
 
] as const;

export const projectsData = [
  {
    title: "Maker Cart",
    description:
      "Researched, designed, prototyped, and tested a Maker Cart whose goal was to share Maker opportunities with under-resourced students and was adopted by multiple public schools.",
    tags: ["Rhino CAD", "Procreate", "Woodworking"],
    imageUrl: SKT4,
    link: "maker-cart",
  },
  {
    title: "Safe Bites App",
    description:
      "Designed and developed an app that addressed the confusing process of finding restaurants dedicated to keeping customers and employees safe from COVID-19.​",
    tags: ["React Native", "Figma", "Video Editing"],
    imageUrl: SBP,
    link: "safe-bites-app",
  },
  // {
  //   title: "Interactive Art Exhibit",
  //   description:
  //     "Build an interactive art exhibit",
  //   tags: ["Procreate"],
  //   imageUrl: SBP,
  //   link: "interactive-art-exhibit",
  // },
] as const;

// export const projectInfo = [
//   { makercart: { title: 'Maker Cart' }, safebites: { title: 'Safe Bites App' }, artexhibit:{ title: 'Interactive Art Exhibit' }}

// ] as const ;
