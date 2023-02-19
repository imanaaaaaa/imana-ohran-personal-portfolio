import "./FooterStyle.css";

 import React from 'react';
 import {CiLinkedin, CiMail} from "react-icons/ci";
 import {AiFillGithub} from "react-icons/ai";
 
 const Footer = () => {
   return (
     <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="mail">
                    <CiMail size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                    <p>ohranimana@gmail.com</p>
                    </div>
                </div>
                <div className="linkedin">
                    <CiLinkedin size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <a href="www.linkedin.com/in/imana-ohran">www.linkedin.com/in/imana-ohran</a>
                    </div>
                </div>
                <div className="github">
                    <AiFillGithub size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <a href="https://github.com/imanaaaaaa">https://github.com/imanaaaaaa</a>
                    </div>
                </div>
            </div>
            <div className="right">
                <p className="p p1">Imana Ohran</p>
                <p className="p p2">Politehnicki fakultet, Univerzitet u Zenici</p>
                <p className="p p3">Zenica</p>
            </div>
        </div>
     </div>
   )
 }
 
 export default Footer