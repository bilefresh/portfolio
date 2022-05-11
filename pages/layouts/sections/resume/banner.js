import React from 'react';
import Typed from 'react-typed';
import {Container,Row,Col} from 'reactstrap'
const Banner = () => (
    <section className="resume header" id="header">
        <div className="header7-content">
            <div className="resume bg bg-pink">
                <Container>
                    <Row>
                        <Col lg="5" md="6">
                            <img alt="" className="img-fluid set-abs bottom-0 right-0" src="/assets/images/resume/techhero.jpg"  />
                        </Col>
                        <Col lg="6" md="6" className="offset-lg-1">
                            <div className="center-text">
                                <div>
                                    <div className="header-sub-text">
                                        <h5 className="text-hash text-uppercase"># resume</h5>
                                    </div>
                                    <div className="header-text">
                                        <h1><span className="bold-text">Hi, I’m</span><br /> Bilesanmi Faruk</h1>
                                    </div>
                                    <div className="header-sub-text">
                                        <h4 className="font-secondary">Full Stack Developer, <span className="typed-resume"><Typed
                                                strings={['Data Analyst, Machine Learning Engineer, Cloud Engineer, Technical Support Engineer']}
                                                typeSpeed={80}
                                                backSpeed={50}
                                                showCursor={false}
                                                loop >
                                            </Typed></span></h4>
                                    </div>
                                    <div className="header-sub-text">
                                        <p className="font-secondary font-large">A "superhero" that brings ideas and designs to life and kills villains known as "bugs". I am also a diligent, hardworking and fast paced person that also adapts and learns quickly. Do you want to know my other superpowers? Click the button below to find out.</p>
                                    </div>
                                    <div className="link-horizontal">
                                        <ul>
                                            <li><a className="btn btn-default primary-btn back-white" href="#about">know more</a></li>
                                            <li><a className="btn btn-default primary-btn back-white" href="/assets/CV_Faruk_Bilesanmi.pdf">download CV</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </section>
)

export default Banner;