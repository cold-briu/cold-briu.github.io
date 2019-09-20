import React from 'react';

import Navbar from '../components/00_NavbarComponent/Navbar'
import Hero from '../components/01_HeroComponent/Hero';
import Skills from '../components/02_SkillsComponent/Skills';
import Resume from '../components/03_Resume/ResumeComponent';
import Portfolio from '../components/04_Portfolio/PortfolioComponent';
import Footer from '../components/06_Footer/Footer'
// import Counter from '../components/Counter/CounterComponent';
// import Contact from '../components/Contact/ContactComponent';

const MainEn = () => ( //{ children }
    <>
        <Navbar />

        <div className="containe-fluid w-100 p-0 m-0" >


            <Hero />
            <Skills />
            <Resume />
            <Portfolio />
            <Footer />

            {/*
        <Counter />
        <Contact /> */}



        </div>
    </>
);

export default MainEn