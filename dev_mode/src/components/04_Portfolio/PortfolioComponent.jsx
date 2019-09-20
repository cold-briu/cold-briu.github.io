import React, { Component } from "react";
import Slider from "react-slick";
import './PortfolioComponentStyles.css';

class Portfolio extends Component {

    state = {
        imgs: [
            'https://66.media.tumblr.com/04106b07e469305064a1c3e2f12b8058/tumblr_pmisr4hbtI1y555i6o1_1280.png',
            'https://66.media.tumblr.com/11c734c73e6fda2e3b8b7dce5cdd5455/tumblr_pmisz3gpSk1y555i6o1_1280.png',
            'https://66.media.tumblr.com/dfd2b627bf9bbcf9d780466464015519/tumblr_pmit8pvcaV1y555i6o1_1280.png',
            'https://66.media.tumblr.com/e483d8b4a64df8321ad9e1838a6f5b21/tumblr_plhqz7ZfvE1y555i6o1_1280.png',
            'https://66.media.tumblr.com/cc024e4aa0e86cb82384dcafe2f44213/tumblr_pmit30U99q1y555i6o1_1280.png',
        ],
        webs: [
            'https://firebasestorage.googleapis.com/v0/b/tienda-virtual-geek.appspot.com/o/tstein%2FCaptura%20de%20pantalla%202019-08-12%20a%20las%209.15.48%20a.m..png?alt=media&token=e1c019a8-63df-4e6d-b122-1bcf541e7901',
            'https://firebasestorage.googleapis.com/v0/b/tienda-virtual-geek.appspot.com/o/tstein%2FCaptura%20de%20pantalla%202019-08-12%20a%20las%209.14.56%20a.m..png?alt=media&token=60ae970a-03ff-439a-a6af-c83229b9d86e',
            'https://firebasestorage.googleapis.com/v0/b/geek-conf.appspot.com/o/Captura%20de%20pantalla%202019-08-12%20a%20las%209.46.20%20a.m..png?alt=media&token=24c45990-675c-410a-bc43-d42dc46cf21d',
            'https://firebasestorage.googleapis.com/v0/b/finanzas-personal-fe319.appspot.com/o/Captura%20de%20pantalla%202019-08-12%20a%20las%2010.24.40%20a.m..png?alt=media&token=d25ff42d-a2d3-4627-965a-e83e9b3a7152',
        ],
        linkswebs: [
            'https://academia-geek-landing.firebaseapp.com',
            'https://tienda-virtual-geek.firebaseapp.com',
            'https://geek-conf.firebaseapp.com',
            'https://crud-8b7ac.firebaseapp.com'
        ],

        settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
    }
    render() {
        return (
            <div className="row portfolio__container" id="graphic" >

                <div className="col-12 text-center mb-5 " >
                    <h2 className="portfolio-title my-3">Graphic Design</h2>
                </div>

                <div className="col-12 mb-5">
                    <Slider {...this.state.settings}>
                        {
                            this.state.imgs.map(
                                entry => {
                                    return (
                                        <div>
                                            <img src={entry} alt="" />
                                        </div>
                                    )
                                }
                            )
                        }
                    </Slider>
                </div>




                <div className="col-12 text-center web-head my-5 " id="web">
                    <h2 className="portfolio-title my-3">Web Design</h2>
                </div>


                <div className="col-12 mb-5">
                    <Slider {...this.state.settings}>
                        {
                            this.state.webs.map(
                                (entry, i) => {
                                    return (
                                        <div>
                                            <a href={this.state.linkswebs[i]} target="_blank" rel="noopener noreferrer">
                                                <img src={entry} alt={`img${i}`} />
                                            </a>
                                        </div>
                                    )
                                }
                            )
                        }
                    </Slider>
                </div>

            </div>
        );
    }
}


export default Portfolio