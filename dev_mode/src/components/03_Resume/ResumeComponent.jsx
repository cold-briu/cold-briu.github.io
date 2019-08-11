import React from 'react';
import ResumeCard from './ResumeCardComponent';
import './ResumeComponentStyles.css';

const Resume = () => (

    <div className="row resume__container p-3">

        <div className="col-12 text-center my-5 ">
            <h2 className="resume-title my-3">Resume</h2>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6">

            <div className=" experience">
                <section className="section-title text-center col-12 mb-5">
                    <i class="far fa-clock">

                    </i>
                    <h4 className="timelin-title">Experience</h4>
                </section>
                <ul className="resume-card timeline p-5">

                    <ResumeCard
                        header="IT and media contents"
                        link="htts://instagram.com/proyectoraices"
                        sub="Proyecto Raíces"
                        time="Jan 2017 - May 2019"
                    />

                    <ResumeCard
                        header="Social media management"
                        link="https://instagram.com/arrechonta"
                        sub="Arrechonta"
                        time="Sept 2016 - nov 2017"
                    />

                    <ResumeCard
                        header="Writer and editor"
                        link="https://instagram.com/elhumanistainem"
                        sub="El Humanista"
                        time="jan 2015 - oct 2017"
                    />
                </ul>

            </div>
        </div>



        <div className="col-lg-6 col-md-6 col-sm-6 mb-3">



            <section className="section-title text-center col-12 mb-5">

                <i class="fas fa-graduation-cap"></i>
                <h4 className="timelin-title">Education</h4>
            </section>

            <ul className="resume-card timeline p-5">

                <ResumeCard
                    header="Front-End Developement"
                    link="https://academiageek.co"
                    sub="Academia Geek"
                    time="2019 - current"
                />

                <ResumeCard
                    header="Basic Programming"
                    link="https://platzi.com"
                    sub="Platzi"
                    time="2019"
                />

                <ResumeCard
                    header="Sociology"
                    link="/"
                    sub="Universidad de Antioquia"
                    time="2019 - current"
                />

            </ul>
        </div>



        <div className="col-12 text-center my-5">
            <a href="https://drive.google.com/open?id=1eww07mDjZ2Ya83sMNKM0wszV98tCIXqU" className="btn btn-dark"  >
                <i className="icon-paper-clip"></i>Download cv</a>
        </div>

    </div >




);

export default Resume
