/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Header() {
    return (
        <section className='bg-white flex justify-between items-center fixed top-0 right-0 left-0 px-6 max-w-7xl mx-auto'>
            <div className='flex gap-2 mt-5 justify-between items-center'>

                <img src='/header.svg' alt='header icon' className='md:h-10 md:w-20 h-20 w-10' />
                
                <p className='font-bold text-xl text-black/80 -ml-4 mt-1 hidden md:block'>Dacade</p>
                <div className='border-r-2 h-10'></div>
                <img src='/headerLogoDt.svg' alt='header logo' className='h-10 w-40 hidden md:block' />
                <img src='/headerLogoMb.svg' alt='header logo' className='h-10 w-10 md:hidden'/>
            </div>
            <div className='flex gap-5 mt-5'>
                <p className='hidden md:block mt-1'>Start The Course</p>
                <button className='md:w-40 md:h-10 bg-black/80 rounded-3xl text-white text-xl h-10 w-[10rem] p-1 md:py-0 md:px-2 md:text-xl'>Create Wallet</button>
            </div>
        </section>
    )
}

export default Header