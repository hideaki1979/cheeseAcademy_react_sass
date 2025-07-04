import React from 'react'
import Header from './Header'
import '../styles/main.sass'
import MainVisual from './MainVisual'
import About from './About'
import News from './News'
import Course from './Course'
import Access from './Access'
import Contact from './Contact'

const CheeseAcademy = () => {
    return (
        <div className='wrap'>
            <Header />
            <MainVisual />
            <About />
            <Course />
            <News />
            <Access />
            <Contact />
        </div>
    )
}

export default CheeseAcademy