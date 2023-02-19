import "./Img2Style.css";
import React, { Component } from 'react';
import photo2 from "../assets/photo2.jpg";
import { Link } from "react-router-dom";

class Img2 extends Component {
  render(){
    return (
    <div className="hero">
        <div className="mask">
            <img className="photo2" src={photo2} alt="sklj"/>
        </div>
        <div className="content">
            <p>{this.props.heading}</p>
            <h3>{this.props.text}</h3>
        </div>
    </div>
  )
}}

export default Img2;
