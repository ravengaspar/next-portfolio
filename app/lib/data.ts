import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Programmer and Analyst",
    location: "George Brown College, Ontario",
    description:
      "Develop skills and techniques required for software application development and testing and advanced technical skills in systems analysis and design techniques.",
    icon: React.createElement(CgWorkAlt),
    date: "2010 - 2013",
  },
  {
    title: "The Odin Project",
    location: "Online",
    description:
      "Through The Odin Project, I've embarked on an enriching journey to master web development from start to finish. By completing a series of hands-on projects and challenges, I've gained practical experience in HTML, CSS, JavaScript, and more. With a strong emphasis on problem-solving and real-world application, I've honed my skills to become a proficient web developer, ready to tackle diverse projects and pursue exciting opportunities in the field.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "The Complete Javascript Developer Course - From Zero to Hero",
    location: "Udemy",
    description:
      "After completing this comprehensive course, I've emerged as an advanced JavaScript developer, equipped with the skills to confidently tackle real-world projects for my portfolio. Having mastered JavaScript fundamentals, modern ES6+ features, OOP principles, asynchronous programming, and code architecture, I'm fully prepared for job opportunities. Additionally, I've honed my problem-solving abilities, research methodologies, and development workflows, ensuring I think and work like a seasoned developer.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Lambton College Full Stack Web Developer",
    location: "Sarnia, ON",
    description:
      " maintaining legacy code while crafting cutting-edge user interfaces (UIs) for modern applications",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Lambton College Web Design Upgrade",
    description:
      "I worked as a full-stack developer on this  project for 2 years. Refactored the legacy codebase to modern web standards and created a responsive and user-friendly interface for the website.",
    tags: ["C#", "Javascript", "CSS", "HTML", "Sitefinity", "DOTNET CORE 6"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Lambton College Legacy App Upgrade",
    description:
      "I maintain content and develop widgets and components for Ektron and Sitefinity CMS. I collaborate with project managers and stakeholders to produce web solutions, ensuring they meet our objectives. Additionally, I refactor the codebase for improved readability, maintainability, and efficiency, contributing to the overall success of our projects.",
    tags: ["C#", "Javascript", "CSS", "HTML", "Sitefinity", "ASP.NET 4.8", "MSSQL"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Forkify",
    description:
      "Modern web app for searching recipes based on ingredients",
    tags: ["HTML", "CSS", "JAVASCRIPT", "API"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Framer Motion",
  "GSAP",
  "C#",
  "DOTNET CORE 6",
  "Sitefinity",
  "ASP.NET 4.8",
  "MSSQL",
  "Astro",
  "Vue"
] as const;
