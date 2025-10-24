import HeroButton from '@/components/ui/HeroButton'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <main className='w-full relative z-1 max-w-[1520px] h-[70vh] borer flex justify-center items-center'>

      <div className='w-full flex flex-col gap-6 justify-center items-center'>
        <div className='flex flex-col w-full gap-1 justify-center items-center'>
          <Batch />
          <h1 className='lg:text-6xl sm:text-4xl text-2xl leading-tight tracking-tighter md:w-[50%] w-[80%] font-medium text-center'>Instantly Understand What Your Logs Are Saying</h1>
        </div>

        <p className='lg:text-md md:w-[40%] w-[70%] text-center font-mono'>Gain instant insights, spot issues faster, and save hours of debugging with LogLense’s intelligent log interpretation.</p>

        <Link href="#upload">
          <HeroButton />

        </Link>

      </div>
    </main>
  )
}



const Batch = () => {
  return (
    <div className='px-4 py-2 bg-black/10 backdrop-blur-2xl  rounded-full'>
      <p className='lg:text-xs text-[8px]'>Beta Testing On</p>
    </div>
  )
}




export default Hero;
