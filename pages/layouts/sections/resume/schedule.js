import React from 'react';
import { ScheduleData } from '../../../../database/layouts/resume/database';
import {Container,Row,Col} from 'reactstrap'
const Schedule = () => (
    <section className="resume schedule" id ="experience">
        <Container>
            <div className="title title2">
                <Row>
                    <Col md="8" className=" offset-md-2">
                        <h6 className="font-primary borders main-text text-uppercase"><span>details</span></h6>
                        <div className="sub-title">
                            <div>
                                <h2 className="title-text">Where I have showed my superhero abilities</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col xs="12">
                    <div className="cal-time">
                        <div className="time">
                            <h5 className="text-capitalize">Monday, May 9, 2022</h5>
                        </div>
                    </div>
                    <div className="event-container scrollbar">
                        <div>
                            {
                                ScheduleData.map((item, i) => {
                                    return (
                                        <div className="cal-time events" key={i}>
                                            <Row>
                                                <Col md="10">
                                                    <div className="schedule-event">
                                                        <h4 className="names">{item.name}</h4>
                                                        <img alt="" className="img-fluid schedule-img"
                                                            src={item.img} />
                                                        <p className="schedule-description">{item.desc}</p>
                                                    </div>
                                                </Col>
                                                <Col md="2">
                                                    <div className="timing">
                                                        <h5 className="event-time">{item.time}</h5>
                                                        <div className="border-container">
                                                            <div className="border-dashed"></div>
                                                        </div>
                                                        <h5 className="event-time">{item.endTime}</h5>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                                })
                            }
                            <div className="cal-time events">
                                <Row>
                                    <Col md="10">
                                        <div className="schedule-event">
                                            <h4 className="names">Technical Support at  ITSupport.ng</h4>
                                            <img alt="" className="img-fluid schedule-img"
                                                src="" />
                                            <p className="schedule-description">After saving so many lives and killing so many villians, I extended my superhero prowess and provided support for the following companies: BPL Nigeria, First Ally Capital
Limited, Personal Trust Microfinance Bank</p>
                                        </div>
                                    </Col>
                                    <Col md="2">
                                        <div className="timing">
                                            <h5 className=" event-time center-content">August 2021</h5>
                                            <div className="border-container">
                                                <div className="border-dashed active"></div>
                                            </div>
                                            <h5 className=" event-time center-content"></h5>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Schedule;