import React from "react";
import { Accordion } from "react-bootstrap";
import faqs from '../img/faq.png'
const Faq = () => {
    return(
        <>
            <div className="container"id="faqs"style={{marginTop:"8rem"}}>
                <div className="row">
                    <div className="col-md-7 mt-3">
                        <img src={faqs} alt="faq image" height="370" width="550" />
                    </div>
                    <div className="col-md-5 mt-5">
                        <h2>Frequently Ask Question !</h2>
                        <br />
                        <Accordion className="accordions">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Who is control mikhmonify?</Accordion.Header>
                                <Accordion.Body>
                                    Mikhmonify was controlled by : Admin
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <br />
                        <Accordion className="accordions">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Can Mikhmonify Detect Network?</Accordion.Header>
                                <Accordion.Body>
                                    Sure, Mikhmonify can detect browsing history, user device phone, ip address, mac address and etc.   
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Faq