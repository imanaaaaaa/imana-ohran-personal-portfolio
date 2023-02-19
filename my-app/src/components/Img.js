import "./ImgStyle.css";
import React from 'react';
import photo1 from "../assets/photo1.jpg";
import { Link } from "react-router-dom";

const Img = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="photo1" src={photo1} alt="sklj"/>
        </div>
        <div className="content">
            <p>Hi, I'm Imana</p>
            <h3>Software Engineering Student</h3>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Img;