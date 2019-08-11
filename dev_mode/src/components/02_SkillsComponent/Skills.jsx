import React from "react";
import './SkillsStyles.css';

import Card from './Card';


const Skills = () => (



    <div className="row skills-container">

        <h2 className="skills-title m-5" >Skills</h2>

        <Card
            icon="fab fa-html5 fa-3x"
            name="Html5"
        />
        <Card
            icon="fab fa-js fa-3x"
            name="JavaScript"
        />
        <Card
            icon="fab fa-css3-alt fa-3x"
            name="Css3"
        />
        <Card
            icon="fab fa-node-js fa-3x"
            name="Node Js"
        />
        <Card
            icon="fab fa-bootstrap fa-3x"
            name="Bootstrap 4"
        />
        <Card
            icon="fab fa-react fa-3x"
            name="React Js"
        />
        <Card
            icon="fab fa-python fa-3x"
            name="Python 3"
        />
        <Card
            icon="fab fa-git-alt fa-3x"
            name="Git control"
        />
        <Card
            icon="fab fa-google-drive fa-3x"
            name="G Suite Apps"
        />
        <Card
            icon="fab fa-adobe fa-3x"
            name="Photoshop"
        />

        <Card
            icon="fab fa-adobe fa-3x"
            name="Illustrator"
        />
        <Card
            icon="fab fa-facebook-f fa-3x"
            name="Facebook ads"
        />


    </div>

)

export default Skills



// const Skills = () => (
//     <section id="services" className="services section-padding">
//         <h2 className="section-title">Habilidades</h2>
//         <div className="container">
//             <div className="row">

//                 <div className="col-md-6 col-lg-3 col-xs-12">
//                     <div className="services-item wow fadeInDown" data-wow-delay="0.3s">
//                         <div className="icon">
//                             <i className="icon-layers"></i>
//                         </div>
//                         <div className="services-content">
//                             <h3><a href="#">Front-end Dev</a></h3>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-md-6 col-lg-3 col-xs-12">
//                     <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
//                         <div className="icon">
//                             <i className="icon-pencil"></i>
//                         </div>
//                         <div className="services-content">
//                             <h3><a href="#">Diseño</a></h3>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-md-6 col-lg-3 col-xs-12">
//                     <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
//                         <div className="icon">
//                             <i className="icon-camera"></i>
//                         </div>
//                         <div className="services-content">
//                             <h3><a href="#">Audiovisual</a></h3>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-md-6 col-lg-3 col-xs-12">
//                     <div className="services-item wow fadeInDown" data-wow-delay="1.2s">
//                         <div className="icon">
//                             <i className="icon-rocket"></i>
//                         </div>
//                         <div className="services-content">
//                             <h3><a href="#">Social Media</a></h3>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
// )

// export default Skills