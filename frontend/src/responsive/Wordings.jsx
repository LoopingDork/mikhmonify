import React from "react"; 
import persons from '../img/persons.png'
import mikhmonvideo from '../audio/mikhmonvideo.mp4'
const Wordings = () => {
    return(
        <>
            <div className="container"id="adminword"style={{marginTop:"8rem"}}>
                <div className="row">
                    <div className="col-md-5 mt-5">
                        <h1>Admin's Word</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa recusandae voluptatum esse atque doloribus architecto quam, accusamus modi commodi magnam expedita velit obcaecati quae? Reiciendis cumque voluptatibus quaerat ab?
                        </p>
                        <audio controls>
                            <source src={mikhmonvideo} type="audio/mp3" />
                        </audio>
                    </div>
                    <div className="col-md-5">
                        <img src={persons} alt="persons image"  height="395" width="650"/>
                    </div>
                </div>
            </div>
            <svg class="wavess"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,170.7C672,171,768,117,864,133.3C960,149,1056,235,1152,245.3C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </>
    )
}
export default Wordings;