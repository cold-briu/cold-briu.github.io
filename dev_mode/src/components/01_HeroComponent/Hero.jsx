import React from 'react';
import './HeroStyles.css';

const Hero = () => (


    <div className="row">

        <div className="hero-parallax col-12">
            <div className="hero">


                <div className="hero-text col-lg-8 col-md-8 " >
                    <h1>Andrés Fernández</h1>
                    <h5>Graphic Design & Frontend Developement.</h5>


                    <div className="profile-wrapper">
                        <p>
                            My life is about learning and sharing knowlodege. <br />
                            My work is about effective & meaningful communication.

                    </p>

                        <ul className="admin-profile">
                            <li><span className="pro-title"> Age: </span> <span className="pro-detail">20</span></li>
                            <li><span className="pro-title"> Experience: </span> <span className="pro-detail">3.5 years</span></li>
                            <li><span className="pro-title"> Location: </span> <span className="pro-detail">Medellín, Colombia</span></li>
                            <li><span className="pro-title"> E-mail: </span> <span className="pro-detail">(See button below)</span></li>
                        </ul>
                    </div>

                    <div className="links-container fa-2x row">

                        <div className="col-6 col-lg-3">
                            <a href="/"><i className="fas fa-envelope-square "> <span> Mail me!</span> </i></a>
                        </div>
                        <div className="col-6 col-lg-3">
                            <a href="/"><i className="fab fa-linkedin "> <span> LinkedIn</span> </i></a>
                        </div>

                        <div className="col-6 col-lg-3">
                            <a href="https://drive.google.com/open?id=1eww07mDjZ2Ya83sMNKM0wszV98tCIXqU">
                                <i className="fas fa-address-card "> <span> Download CV</span> </i></a>
                        </div>
                        <div className="col-6 col-lg-3">
                            <a href="/"><i className="fab fa-github-square "><span> GitHub</span></i></a>
                        </div>


                    </div>

                </div>


            </div>


        </div>

    </div>

);

export default Hero