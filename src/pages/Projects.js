import React from "react";
import Header from "../components/Header";
import {FaLaptopCode} from 'react-icons/fa'
import projectsdata from "./projectsdata";
function Projects() {
  return (
    <div>
      <Header />
      <div className="container projects-intro">
        <div className="row flex-with-center mt-5">
          <div className="col-md-6 n-box2 px-3 py-5" data-aos='fade-down'>
            <div>
              <h1 className="font-bold">Projects</h1>
              <p className="font-bold">
                Good ideas are not adopted automatically. They must be driven
                into practice with courageous patience
              </p>
              <button className="primary-button projects-btn"><a href="#projects-list" className='white'>Get Started</a></button>
            </div>
          </div>

          <div className="col-md-6 position-relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#0F62FE"
                d="M45.7,-70.5C58.9,-62.5,69.3,-49.4,75.9,-34.7C82.5,-20,85.5,-3.7,83.8,12.5C82.2,28.7,76.1,44.7,65.4,56.2C54.7,67.8,39.4,74.9,23.5,79.2C7.6,83.5,-8.9,85,-23.6,80.6C-38.3,76.2,-51.1,65.8,-63.3,53.7C-75.5,41.7,-87.1,27.9,-89.5,12.7C-91.9,-2.4,-85,-19.1,-76.8,-34.3C-68.6,-49.5,-59,-63.2,-46,-71.3C-33,-79.4,-16.5,-81.8,-0.2,-81.6C16.2,-81.3,32.4,-78.5,45.7,-70.5Z"
                transform="translate(100 100)"
              />
            </svg>

            <FaLaptopCode 
            color='white'
            size='180'
            className='position-absolute top-50 start-50 translate-middle'/>
          </div>
        </div>
      </div>


      <div className="container projects-list" id='projects-list'>

          <h3 className="font-bold">Take a look of our projects</h3>
          <hr />

          <div className="row">

              {projectsdata.map(project=>{
                  return <div className="col-md-4">
                      <div className="position-relative project">
                          <img src={project.image} alt="" />
                          <div className="project-content">
                              <h3>{project.title}</h3>
                              <hr />
                              <p>{project.description}</p>
                              <button className='primary-button'>DEMO</button>
                          </div>
                      </div>
                  </div>
              })}

          </div>

      </div>
    </div>
  );
}

export default Projects;
