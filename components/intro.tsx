"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
    <div className='flex items-center justify-center'>
    <div className='relative'>
    <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ 
      type: 'tween',
      duration: 0.2,
    }}
    >
    <Image src='/Raven.jpg'
    alt='Raven portrait'
    width={192}
    height={192}
    quality={95}
    priority={true}
    className='w-24 h-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl' />
    </motion.div>
    <motion.span className='absolute bottom-0 right-0 text-4xl'
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1}}
    transition={{ 
      type: 'spring',
      stiffness: 125,
      duration: 0.7,
      delay: 0.2,
    }}
    >👋</motion.span>
    </div>
    </div>
    
    <motion.p className='px-4 mt-4 mb-10 text-2xl font-medium !leading-[1.5] sm:text-4xl'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    >
    <span className='font-bold'>Hi, I'm Raven</span>, a passionate full-stack developer specializing in <span className='italic'>creative web applications</span>. I thrive on <span className='italic'>challenging projects</span> where I can craft <span className='italic'>stunning user interfaces</span>.
    </motion.p>

    <motion.div className='flex flex-col justify-center gap-2 px-4 text-lg font-medium sm:flex-row' 
    initial={{ opacity: 0, y: 100 }} 
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    >
      <Link href="#contact" className='flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'>
        Contact me here <BsArrowRight className='transition opacity-70 group-hover:translate-x-1'/></Link>
        <a href="" className='flex items-center gap-2 py-3 transition bg-white rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 active:scale-105'>Download CV <HiDownload className='transition opacity-60 group-hover:translate-y-1'/></a>
        <a href="" className='flex items-center gap-2 p-4 text-gray-700 bg-white rounded-full focus:scale-110 hover:scale-110 active:scale-105'>
          <BsLinkedin />
        </a>
        <a href="" className='flex items-center gap-2 p-4 text-gray-700 bg-white rounded-full text-[1.35rem] focus:scale-110 hover:scale-110  active:scale-105'>
          <FaGithubSquare />
        </a>
    </motion.div>


    </section>
    )
  }
  