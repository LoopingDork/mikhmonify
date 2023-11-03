import React, {useState} from "react";
import banner from "../img/banner.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import mikhmonvideo from '../audio/mikhmonvideo.mp4'
const About = () => {
    const [show, setShow] = useState(false)
    return(
        <>
            <div className="container"id="about">
                <div className="row">
                    <div className="col-md-4">
                        <div className="about">
                            <h1>About Mikhmonify</h1>
                            <p>
                               Mikhmonify is a website hotspot microtic that easily use for admin.
                               It have a line chart data that admin can see when the device connect the internet
                            </p>
                            <p>
                                Note: <mark>Our video contain education !</mark>
                            </p>
                            <p>
                                <button className="btn btn-success"
                                    onClick={() => setShow(!show)}
                                >
                                    <FontAwesomeIcon icon={ faTv } /> 
                                    {
                                        show == true ?
                                        ' Close video' : ' Open video'
                                    }
                                </button>
                            </p>
                            {
                                show && (
                                    <>
                                        <video width="425" height="375"controls>
                                            <source src={mikhmonvideo} type="video/mp4" />
                                        </video>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={banner} alt="banner" height="500" width="820"/>
                    </div>
                </div>
            </div>
            <svg class="wavess"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,170.7C672,171,768,117,864,133.3C960,149,1056,235,1152,245.3C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </>
    )
}
export default About;