import React, { Fragment } from 'react'
import Scroll from '../modules/Scroll'
import Course from './Course'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import HomeCertificate from './HomeCertificate'
import Learning from './Learning'

function HomePage() {
    return (
        < section className='relative'>
            <div className="bg-gradient-to-br from-indigo-400 to-blue-300 w-[50%] h-80 absolute -top-60 left-0 opacity-30 md:hidden -z-20 -mt-40 blur-2xl rounded-b-full"></div>
            <div className="bg-gradient-to-br from-indigo-400 to-blue-300 w-[40%] h-80 absolute -top-60 right-0 opacity-30 md:hidden -z-20 -mt-40 blur-2xl rounded-b-full"></div>
            <Header />
            <Hero />
            <Scroll />
            <Learning />
            <Course />
            <HomeCertificate />
            <Footer />
        </section >
    )
}

export default HomePage