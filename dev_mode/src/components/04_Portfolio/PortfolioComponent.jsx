import React, { Component } from "react";
import Slider from "react-slick";
import './PortfolioComponentStyles.css';

class Portfolio extends Component {

    state = {
        imgs: [
            'https://66.media.tumblr.com/dfd2b627bf9bbcf9d780466464015519/tumblr_pmit8pvcaV1y555i6o1_1280.png',
            'https://66.media.tumblr.com/cc024e4aa0e86cb82384dcafe2f44213/tumblr_pmit30U99q1y555i6o1_1280.png',
            'https://66.media.tumblr.com/11c734c73e6fda2e3b8b7dce5cdd5455/tumblr_pmisz3gpSk1y555i6o1_1280.png',
            'https://66.media.tumblr.com/04106b07e469305064a1c3e2f12b8058/tumblr_pmisr4hbtI1y555i6o1_1280.png',
            'https://66.media.tumblr.com/a2a0107690d69564f3b2dcac673f23bf/tumblr_pmisk9SKQt1y555i6o1_1280.png',
            'https://66.media.tumblr.com/e483d8b4a64df8321ad9e1838a6f5b21/tumblr_plhqz7ZfvE1y555i6o1_1280.png',
        ],
        settings: {
            dots: true,
            infinite: false,
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
            <div className="row portfolio__container p-1">

                <div className="col-12 text-center mb-5 ">
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

                <div className="col-12 text-center my-5 ">
                    <h2 className="portfolio-title my-3">Web Design</h2>
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

            </div>
        );
    }
}


export default Portfolio