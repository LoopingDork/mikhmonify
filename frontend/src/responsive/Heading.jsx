import '../App.css'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
const Heading = () => {
    const navigate = useNavigate()

    return(
        <>
            <div className="banner">
                <svg class="waves"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,170.7C672,171,768,117,864,133.3C960,149,1056,235,1152,245.3C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <div className="container">
                    <div className='heading'>
                        <h1 className='text-center'>
                            Welcome To Mikhmonify Landing Page!
                        </h1>
                        <p className='text-center'>
                           CV.Mikhmon
                        </p>
                        <center>
                            <button className='btn btn-primary'onClick={() => navigate('/login')}>
                                MikroServer
                            </button>
                            &nbsp;
                            <a className='btn btn-success'href='#adminword'>
                                Admin's word
                            </a>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Heading;