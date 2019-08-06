import React from 'react';

const Contact = () => (

    <section id="contact" className="section-padding">
        <div className="contact-form">
            <div className="container">
                <div className="row contact-form-area">
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="contact-block">
                            <h2>Contact Form</h2>
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" required data-error="Please enter your name" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" placeholder="Email" id="email" className="form-control" name="email" required data-error="Please enter your email" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" placeholder="Subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea className="form-control" id="message" placeholder="Your Message" rows="5" data-error="Write your message" required></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="submit-button">
                                            <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="footer-right-area wow fadeIn">
                            <h2>Contact Address</h2>
                            <div className="footer-right-contact">
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                    <p>Medellín, COL</p>
                                </div>
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <p><a href="mailto:andresAvena19@gmail.com">AndresAvena19@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


);


export default Contact