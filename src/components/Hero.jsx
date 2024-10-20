import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
      <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#3ea7d1]'/>
            <div className='w-1 sm:h-80 h-40 bg-[#133340]'/>
          </div>
          <div>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Build your own</p>
            <h1 className={`${styles.heroHeadText} text-white`}><span className='text-[#3b9ec5]'>3D Renderer</span></h1>
          </div>
        </div>
        <ComputersCanvas />
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y:[0,24,0]
                }}
                transition={{
                  duration:1.5,
                  repeat:Infinity,
                  repeatType: 'loop'
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </section> 
    )
}

export default Hero