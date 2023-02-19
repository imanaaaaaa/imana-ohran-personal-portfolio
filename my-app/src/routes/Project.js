import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Img2 from '../components/Img2';
import ProjectWork from '../components/ProjectWork';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Img2 heading="PROJECTS." text="Some of my works."/>
      <ProjectWork/>
      <Footer/>
    </div>
  )
};

export default Project;