import React from 'react';
import './HeroStyles.css';
const cv_url = 'https://drive.google.com/file/d/1ELZi7fgqOGXdpmtUkXjvMtbe_VZUKk-c/view'

const Hero = () => (


        < div className = "row hero__container" >


            <div className="hero" id="home">


                <div className="hero-text col-lg-8 col-md-8 " >
                    <h1>Andrés Fernández</h1>
                    <h5>Graphic Design & Frontend Developement.</h5>


                    <div className="profile-wrapper">
                        <p>
                            My life is about learning and sharing knowledge. <br />
                            My work is about effective & meaningful communication.
    
                    </p>

                        <ul className="admin-profile">
                            <li><span className="pro-title"> Age: </span> <span className="pro-detail">20</span></li>
                            <li><span className="pro-title"> Experience: </span> <span className="pro-detail">3.5 years</span></li>
                            <li><span className="pro-title"> Location: </span> <span className="pro-detail">Medellín, Colombia</span></li>
                            <li><span className="pro-title"> E-mail: </span> <span className="pro-detail">AndresAvena19@gmail.com</span></li>
                        </ul>
                    </div>

                    <div className="links-container fa-2x row">

                        <div className="col-6 col-lg-3">
                            <a href="https://wa.me/573113391423"
                                target="blank">
                                <button type="button" class="btn btn-outline-success w-100">
                                    <i className="fab fa-whatsapp "></i>
                                    <span> Contact me!</span>
                                </button>
                            </a>
                        </div>

                        <div className="col-6 col-lg-3 ">
                            <a href="https://www.linkedin.com/in/andr%C3%A9s-fern%C3%A1ndez-467735168/"
                                target="blank">
                                <button type="button" class="btn btn-outline-primary w-100 mb-3">
                                    <i className="fab fa-linkedin-in "></i>
                                    <span> LinkedIn</span>
                                </button>
                            </a>
                        </div>

                        <div className="col-6 col-lg-3">
                            <a href={cv_url}
                                target="blank">
                                <button type="button" class="btn btn-outline-warning w-100 px-2">
                                    <i className="far fa-address-card "> </i>
                                    <span> Download CV</span>
                                </button>
                            </a>
                        </div>

                        <div className="col-6 col-lg-3">
                            <a href="https://github.com/cold-briu"
                                target="blank">
                                <button type="button" class="btn btn-outline-info w-100">
                                    <i className="fab fa-github">
                                        <span> GitHub</span></i>
                                </button>
                            </a>

                        </div>


                    </div>

                </div>


            </div>




    </div >

);

export default Hero