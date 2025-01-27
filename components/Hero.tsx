import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { IoArrowForwardSharp } from 'react-icons/io5'
import { BsArrowDownCircle } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='pb-20 pt-20 h-[650px]'>
      <div className=''>
      <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-0 left-full h-[100vh] absolute"
          fill="green"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* grid background */}

      <div className="h-[700px] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center z-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>
      
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-8'>
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web Magic with Next.js
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className='text-center text-sm md:text-lg'>Hi! I&apos;m Sohan, A Full-Stack Developer based in Bangladesh.
          </p>
          <MagicButton title='See my work' icon={<BsArrowDownCircle />} position='right'/>
        </div>
      </div>

    </div>
  )
}

export default Hero