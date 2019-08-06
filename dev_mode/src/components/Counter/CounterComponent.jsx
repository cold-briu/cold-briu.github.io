
import React from 'react';

const Counter = () => (

    <section className="counter-section section-padding">
        <div className="container">
            <div className="row">

                <div className="col-md-4 col-sm-6 work-counter-widget text-center">
                    <div className="counter wow fadeInDown" data-wow-delay="0.3s">
                        <div className="icon"><i className="icon-briefcase"></i></div>
                        <div className="counterUp">5</div>
                        <p>Project Working</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6 work-counter-widget text-center">
                    <div className="counter wow fadeInDown" data-wow-delay="0.6s">
                        <div className="icon"><i className="icon-check"></i></div>
                        <div className="counterUp">14</div>
                        <p>Project Done</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6 work-counter-widget text-center">
                    <div className="counter wow fadeInDown" data-wow-delay="1.2s">
                        <div className="icon"><i className="icon-heart"></i></div>
                        <div className="counterUp">7</div>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Counter
