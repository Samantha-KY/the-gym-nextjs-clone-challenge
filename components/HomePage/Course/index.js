/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Target from '../../modules/Target'

function Course() {
  return (
    <section className='flex flex-col justify-center items-center space-y-6 md:flex-row'>
            <Target/>
            <div className='flex flex-col justify-center items-center md:items-start md:gap-6 gap-6'>
        <h1 className='text-black/70 text-2xl font-semibold text-center'>Complete the course</h1>
        <p className='font-normal text-black/80 text-center text-base'>In three simple modules, learn:</p>
        <div className='md:flex md:flex-row md:gap-4 flex flex-col justify-center items-center'>
        <img src='courseIcon2.png' alt='icon 1' className='h-5 w-5' />
        <p className='font-normal text-black/80 text-center text-base'>Essential NEAR concept</p>
        </div>
        <div className='md:flex md:flex-row md:gap-4 flex flex-col justify-center items-center'>
        <img src='courseIcon3.png' alt='icon 2' className='h-5 w-5'/>
        <p className='font-normal text-black/80 text-center text-base'>How to write smart contracts on NEAR</p>
        </div>
        <div className='md:flex md:flex-row md:gap-4 flex flex-col justify-center items-center'>
        <img src='courseIcon4.png' alt='icon 3' className='h-5 w-5'/>
        <p className='font-normal text-black/80 text-center text-base'>How to build dapps on the NEAR blockchain</p>
        </div>
        <img src='lining2.svg' alt='line' className='items-center hidden md:block md:-ml-[6rem]' />
        </div>
        
    </section>
  )
}

export default Course