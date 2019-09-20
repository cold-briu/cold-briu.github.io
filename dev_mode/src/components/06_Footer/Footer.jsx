import React from 'react';
import './FooterStyles.css';

const Footer = () => {
    const cv_url = 'https://drive.google.com/file/d/1ELZi7fgqOGXdpmtUkXjvMtbe_VZUKk-c/view'
    return (

        <footer className="py-5 px-2 navbar-dark bg-dark sticky-bottom footer__container">
            <div className="container">

                <div className="row text-center">

                    <div className="col col-md-6 col-12 p-0 footer__brand">
                        <span>ñ</span>

                        <p>Andrés Fernández</p>

                        <div className="col-12 footer__icons mt-4 mb-2">
                            <a href="https://wa.me/573113391423" target="blank">
                                <i className="fab fa-whatsapp-square" target="blank"></i></a>
                            <a href={cv_url} target="blank">
                                <i className="fas fa-address-card "></i></a>
                            <a href="https://www.linkedin.com/in/andr%C3%A9s-fern%C3%A1ndez-467735168/" target="blank">
                                <i className="fab fa-linkedin "></i></a>
                            <a href="https://github.com/cold-briu" target="blank">
                                <i className="fab fa-github-square "></i></a>
                        </div>
                    </div>

                    <div className="col col-12 col-md-6 p-0 mini-nav">
                        <ul className="pt-4 pb-0 pl-0 m-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about">Skills & Resume</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#graphic">Graphic Design</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#web">Web Projects</a>
                            </li>
                            <li className="nav-item contacto">
                                <a className="nav-link text-ac-geek" href="/" data-toggle="modal" data-target="#modalCompra">
                                    Contact</a>
                            </li>

                        </ul>
                        <div className="col-12 text-center my-3 py-4">
                            <p>Copyright · Andrés Fernández <br />
                                2019</p>

                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
export default Footer