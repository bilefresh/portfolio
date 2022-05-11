import React from 'react';
import Portfolio from '../../../../containers/portfolio/basic'
import Layout from '../../../../containers/common/common-layout'
import {Row,Col} from 'reactstrap'

//<Portfolio className="col-lg-3 col-sm-6 isotopeSelector" />
const Section = () => (
    <section className="resume portfolio-section zoom-gallery" id="works">
        <Row>
            <Col md="8" className="offset-md-2">
                <div className="title title2">
                    <h6 className="font-primary borders main-text text-uppercase"><span>work</span></h6>
                    <div className="sub-title">
                        <div>
                            <h2 className="title-text">my latest work</h2>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <Portfolio
            className="col-sm-6 isotopeSelector"
            title="Lorem Ip"
            subTitle=""
        />
        
    </section>
)



export default Section;
