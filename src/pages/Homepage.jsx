import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Selutation from '../components/Selutation'
import Hero from '../components/Hero'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'

const Homepage = () => {
    return (
        <div className="h-[100] items-center justify-center bg-black">
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Skills />
            <Footer />
            <Selutation />
        </div>
    )
}

export default Homepage
