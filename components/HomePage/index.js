import React, { Fragment } from 'react'
import Scroll from '../modules/Scroll'
import Course from './Course'
import Footer from './footer'
import Header from './Header'
import Hero from './Hero'
import HomeCertificate from './HomeCertificate'
import Learning from './Learning'

function HomePage() {
    return (
        <Fragment>
            <Header/>
            <Hero/>
            <Scroll/>
            <Learning/>
            <Course/>
            <HomeCertificate/>
            <Footer/>
        </Fragment>
    )
}

export default HomePage