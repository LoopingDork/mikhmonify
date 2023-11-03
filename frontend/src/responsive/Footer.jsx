import React from "react";
import '../App.css';
const Footer = () => {
    return(
        <>
            <div className="btn-to-top">
                <a href="#"className="btn btn-success">
                    ↑
                </a>
            </div>
            <div className="bg-white"style={{marginTop:"8rem"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <center>
                                <h3>Quick Links</h3>
                                <hr />
                                <p><a href="#about">About</a></p>
                                <p><a href="#IOT">Internet of things</a></p>
                                <p><a href="#adminword">Admin's Word</a></p>
                                <p><a href="#faqs">FAQ'S</a></p>
                            </center>
                        </div>
                        <div className="col-md-6">
                            <center>
                                <h3>Top Links</h3>
                                <hr />
                                <p><a href="#">Responsive Page</a></p>
                                <p><a href="#">Tech Term</a></p>
                                <p><a href="#">Mikhmonify</a></p>
                                <p><a href="#">Privacy & Policy</a></p>
                            </center>
                        </div>
                        <p className="text-center mt-5">
                            &copy; Copy right All-right reserved 2023
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;