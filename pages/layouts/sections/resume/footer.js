import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Footer = () => (
    <footer className="resume copyright copyright-bg">
        <Container>
            <Row>
                <Col xs="12">
                    <div className="link link-horizontal">
                        <ul className="justify-content-center">
                            <li><a className="copyright-text" href="#">home</a></li>
                            <li><a className="copyright-text" href="#about">About</a></li>
                            <li><a className="copyright-text" href="#services">Services</a></li>
                            <li><a className="copyright-text" href="#works">Works </a></li>
                            <li><a className="copyright-text" href="#experience">Experience</a></li>
                            <li><a className="copyright-text" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <hr />
                </Col>
                <Col xs="12">
                    <div className="text-center">
                        <div className="social-link link-horizontal">
                            <ul className="justify-content-center">
                                <li><a className="copyright-text" href="https://www.linkedin.com/in/bilesanmifaruk"><i aria-hidden="true" className="fa fa-linkedin"></i></a>
                                </li>
                                <li><a className="copyright-text" href="https://twitter.com/bilefresh"><i aria-hidden="true" className="fa fa-twitter"></i></a>
                                </li>
                                <li><a className="copyright-text" href="https://github.com/bilefresh"><i aria-hidden="true" className="fa fa-github"></i></a>
                                </li>
                                <li><a className="copyright-text " href="https://instagram/sg4l_ng"><i aria-hidden="true" className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xs="12">
                    <div className="m-l-auto center-para">
                        <h6 className="copyright-text text-center">© 2022 Bilesanmi Faruk</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;