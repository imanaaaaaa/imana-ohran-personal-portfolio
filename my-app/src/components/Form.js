import "./FormStyle.css";

import React from "react";


const Form = () => {
  return (
    <div className="form">
        <label className="label">Your name</label>
        <input type="text" className="inputt"></input>
        <label className="label">Email</label>
        <input type="email" className="inputt"></input>
        <label className="label">Subject</label>
        <input type="text" className="inputt"></input>
        <label className="label">Message</label>
        <textarea rows="6" className="textarea" placeholder="Type your message here"/>
        <button className="btn">Submit</button>
    </div>
  )
}

export default Form;