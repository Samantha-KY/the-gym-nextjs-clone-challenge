/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Learning() {
    return (
        <section id='learnin' className='-mt-20'>
            <div className='flex flex-col justify-center items-center gap-6 md:justify-between'>
                <h1 className='text-black/70 text-3xl font-bold text-center md:text-5xl md:leading-snug'>Making your NEAR <br /> learning easy.</h1>
                <div className='flex flex-col justify-center items-center gap-y-6 md:flex-row md:mt-[182px] md:max-w-[940px] md:justify-between'>
                    <img src='/logoX.png' alt='logo' className='h-60 w-60 md:hidden' />
                    <div className='flex flex-col justify-center gap-6 md:gap-0 items-center md:justify-between md:items-start'>
                        <h1 className='text-black/70 text-2xl font-semibold text-center md:hidden'>Open NEAR wallet</h1>
                        <h1 className='text-black/70 text-2xl font-semibold md:text-start hidden md:block'>Open NEAR wallet</h1>
                        <p className='font-normal text-black/80 text-center text-base md:hidden'>Opening a NEAR wallet is the first step and<br />
                            essential part of joining the NEAR community<br />
                            as well as starting this course.</p>
                        <p className='font-normal text-black/80 text-base hidden md:block'>Opening a NEAR wallet is the first step and<br />
                            essential part of joining the NEAR community<br />
                            as well as starting this course.</p>
                        <button className='md:w-40 md:h-10 border border-black rounded-3xl text-black text-xl h-[3rem] w-[10rem] p-2 md:py-0 md:px-2 md:text-xl md:mt-8'>
                            Create Wallet</button>
                    </div>
                    <img src='/logoX.png' alt='logo' className='h-60 w-60 hidden md:block ml-80 ' />
                </div>
                <img src='lining.svg' alt='lines' className='items-center hidden md:block' />
            </div>

        </section>
    )
}

export default Learning