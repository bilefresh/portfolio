import React from 'react';
import {Container,Row,Col,FormGroup,Input} from 'reactstrap'
const Subscribe = () => (
    <section className="resume subscribe" id="contact">
        <Container>
            <Row>
                <Col lg="8" className="offset-lg-2">
                    <div className="title title2">
                        <h3 className="subscribe-head">Need A Superhero To Bring Your Ideas and Designs To Life?</h3>
                        <p className="subscribe-sub-head font-primary">You don't need to contact me, I would find you. <br/>I'm just kidding, please enter your mail, so I would be able to reach you.</p>
                    </div>
                </Col>
                <Col xl="6"  lg="8"  className="offset-xl-3 offset-lg-2">
                    <div className="subscribe">
                        <div>
                            <FormGroup>
                                <div className="flex">
                                    <Input className="form-control" name="email" placeholder="Please Enter Your Email Address"
                                        type="email" />
                                    <div className="button-primary">
                                        <button className=" btn btn-default text-white primary-btn" type="submit">contact me
                                    </button>
                                    </div>
                                </div>
                            </FormGroup>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Subscribe;