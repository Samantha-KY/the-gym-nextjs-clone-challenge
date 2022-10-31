/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

function Header() {

    const [isLanguageDisplayed, setIsLanguageDisplayed] = useState(false);
    const DisplayLanguage = () => {
        setIsLanguageDisplayed(true);
    };
    const closeLanguage = () => {
        setIsLanguageDisplayed(false);
    };
    return (
        <section className='bg-white flex justify-between items-center fixed top-0 right-0 left-0 px-6 max-w-7xl mx-auto'>
            <div className='flex gap-2 mt-8 justify-between items-center'>
                <a href='/home' className='flex gap-2'>
                    <img src='/header.svg' alt='header icon' className='md:h-10 md:w-20 h-20 w-10' />
                    <p className='font-bold text-xl text-black/80 -ml-4 mt-1 hidden md:block'>Dacade</p>
                </a>
                <div className='border-r-2 h-10'></div>
                <a href='/about'>
                    <img src='/headerLogoDt.svg' alt='header logo' className='h-10 w-40 hidden md:block' />
                </a>
                <a href='/about'>
                    <img src='/headerLogoMb.svg' alt='header logo' className='h-10 w-10 md:hidden' />
                </a>
            </div>
            <div className='flex gap-20 mt-5'>
                <button className='hidden md:block mt-2 text-xl' onClick={DisplayLanguage}>
                    Start The Course
                </button>

                <a href='/wallet'>
                    <button className='md:w-40 md:h-10 bg-black/80 rounded-3xl text-white text-xl h-10 w-[10rem] p-1 md:py-0 md:px-2 md:text-xl'>Create Wallet</button>
                </a>
            </div>

            <div className={`${isLanguageDisplayed ? "fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex justify-center bg-black/20 opacity-1 transition-opacity duration-500" : "w-0 h-0 opacity-0 overflow-hidden fixed transition-opacity duration-500"}`}>
                <div className='hidden rounded-2xl bg-white md:flex md:flex-col w-80 gap-6 mt-44 h-fit py-10'>
                    <div className='border-b border-slate-600/25 px-5'>
                        <div className='flex gap-8 pb-5 justify-between items-center -mt-5 '>
                            <p className='font-semibold'>Choose Language</p>
                            <button className='text-2xl text-black/80' onClick={closeLanguage}>
                                x
                            </button>
                        </div>
                    </div>
                    <div className='border border-slate-600/50 rounded-md flex justify-between px-5 py-2 mx-5'>
                        <div className='flex justify-between space-x-3'>
                            <img src='country1.svg' alt='country flag' className='h-5 w-5' />
                            <p>Croatian</p>
                        </div>
                        <div>
                            <img src='fresh.svg' alt='fresh' className='bg-slate-500/30 rounded-full p-2' />
                        </div>
                    </div>
                    <div className='border border-slate-600/50 rounded-md flex justify-between px-5 py-2 mx-5'>
                        <div className='flex justify-between space-x-3'>
                            <img src='country2.svg' alt='country flag' className='h-5 w-5' />
                            <p>Bulgarian</p>
                        </div>
                        <div>
                            <img src='fresh.svg' alt='fresh' className='bg-slate-500/30 rounded-full p-2' />
                        </div>
                    </div>
                    <div className='border border-slate-600/50 rounded-md flex justify-between px-5 py-2 mx-5'>
                        <div className='flex justify-between space-x-3'>
                            <img src='country3.svg' alt='country flag' className='h-5 w-5' />
                            <p>English</p>
                        </div>
                        <div>
                            <img src='fresh.svg' alt='fresh' className='bg-slate-500/30 rounded-full p-2' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header