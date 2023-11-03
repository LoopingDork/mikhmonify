import React from "react";
import { Card } from "react-bootstrap";
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.png'
import card3 from '../img/card3.png'
const Main = () => {
    return(
        <>
            <div className="container"id="IOT">
                <div className="main text-center">
                    <h2>Internet Of Things</h2>
                    <p>Internet of things apps</p>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src={card1} />
                            <Card.Body>
                                <Card.Title>Music</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src={card2} />
                            <Card.Body>
                                <Card.Title>Social Media</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src={card3} />
                            <Card.Body>
                                <Card.Title>Steam Apps</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <svg class="wavess"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,170.7C672,171,768,117,864,133.3C960,149,1056,235,1152,245.3C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </>
    )
}
export default Main;