import React from 'react'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} flex flex-row items-start gap-5 absolute mt-[120px] inset-0 max-w-7xl`}>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915EFF]'>Minh</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>I develop web applications</p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Mounse */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
            animate={{
              y:[0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType:'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
            > 
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )

}

export default Hero