import React from 'react';
import './NavbarStyles.css';

const Navbar = () => (



    <nav id="header" className="p-0 navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">

            <a className="navbar-brand" href="/">
                ñ
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#main">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#place-time">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#conviertete-en-orador">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#conviertete-en-orador">Projects</a>
                    </li>
                    <li className="nav-item contacto">
                        <a className="nav-link text-ac-geek" href="/" data-toggle="modal" data-target="#modalCompra">Contact</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>



    /* 

<nav clasNameName="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
 <div clasNameName="container">

     <div clasNameName="navbar-header">
         <button clasNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
             <span clasNameName="navbar-toggler-icon"></span>
             <span clasNameName="icon-menu"></span>
             <span clasNameName="icon-menu"></span>
             <span clasNameName="icon-menu"></span>
         </button>

         <a href="index.html" clasNameName="navbar-brand"> <h1 clasNameName="script-font" >ñ</h1> </a>

     </div>
     <div clasNameName="collapse navbar-collapse" id="main-navbar">
         <ul clasNameName="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
             <li clasNameName="nav-item active">
                 <a clasNameName="nav-link" >
                     Home
       </a>
             </li>
             <li clasNameName="nav-item">
                 <a clasNameName="nav-link" href="#about">
                     Sobre mí
       </a>
             </li>
             <li clasNameName="nav-item">
                 <a clasNameName="nav-link" href="#services">
                     Habilidades
       </a>
             </li>
             <li clasNameName="nav-item">
                 <a clasNameName="nav-link" href="#resume">
                     Hoja de vida
       </a>
             </li>
             <li clasNameName="nav-item">
                 <a clasNameName="nav-link" href="#portfolios">
                     Proyectos
       </a>
             </li>
             <li clasNameName="nav-item">
                 <a clasNameName="nav-link" href="#contact">
                     Contacto
       </a>
             </li>
         </ul>
     </div>
 </div>






 <ul clasNameName="onepage-nev mobile-menu">
     <li>
         <a href="#home">Home</a>
     </li>
     <li>
         <a href="#about">Andrés F</a>
     </li>
     <li>
         <a href="#services">Habilidades</a>
     </li>
     <li>
         <a href="#resume">Hoja de vida</a>
     </li>
     <li>
         <a href="#portfolio">Proyectos</a>
     </li>
     <li>
         <a href="#contact">Contacto</a>
     </li>
 </ul>
</nav>
*/
);

export default Navbar