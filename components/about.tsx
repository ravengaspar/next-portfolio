'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading> About Me </SectionHeading>
      <p className="mb-3">
        After graduating with an <span className="font-medium">Advanced Diploma</span> in <span className="font-medium">Computer Programming and Analysis</span>, I discovered a strong inclination towards creative web development. Supplementing my education with courses from <span className="font-medium">Udemy</span>, <span className="font-medium">The Odin Project</span>, <span className="font-medium">freecodecamp.org</span>, and <span className="font-medium">Front End Mentor</span>, I delved into the world of <span className="font-medium">full-stack web development</span>. The joy of problem-solving fuels my passion; nothing compares to the exhilaration of overcoming a challenging puzzle. I thrive in mastering <span className="font-medium">React</span>, <span className="font-medium">Next.js</span>, and <span className="font-medium">Drizzle ORM (PostgreSQL)</span>, complemented by <span className="font-medium">TypeScript</span>, <span className="font-medium">GSAP</span>, and <span className="font-medium">Framer Motion</span>. Each day, I commit to stretching my limits, aiming for continual <span className="font-medium">1%</span> improvements in my skills.

        I am actively seeking a <span className="font-medium">full-time position</span> as a software developer, eager to delve deeper into my passion for creative web development. I am excited to contribute my skills and enthusiasm, collaborating with like-minded professionals who share my vision for the future of web development.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, you'll find me engrossed in video games, gardening, or outdoor cooking. I am always eager to <span className="font-medium">expand my horizons</span>, currently exploring <span className="font-medium">Astro</span> and <span className="font-medium">Vue</span>. And of course, I am refining my palate with each cup of coffee brewed.
      </p>


    </motion.section>
  )
}
