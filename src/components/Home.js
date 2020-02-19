import React, {Component} from 'react';

import Project from './img/kyle_photo.jpg';
import headerPhoto from "./img/kyle_photo.jpg"



export default class Home extends Component {
  render() {
      return (
        <div className="container-fluid pt-2 px-lg-0 bg-bracket">

          <nav className="nav row mt-5 ml-sm-2">
            <div className="col-3 align-self-center">
              <div className="vertical_line">
              </div>
            </div>
            <div className="col pl-0 icons">
              <a className="icon m-1 mr-4" 
                href="https://github.com/kzunino"
                target="_blank"
                rel="noopener noreferrer">
                  <i className="fab fa-github fa-lg" />
              </a>
              <a className="icon m-1 mr-4"
                href="https://www.linkedin.com/in/kylezunino/"
                target="_blank"
                rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-lg" />
              </a>
              <a className="icon m-1" 
                href="https://www.instagram.com/kzunino"
                target="_blank"
                rel="noopener noreferrer">
                  <i className="fab fa-instagram fa-lg" />
              </a>
            </div>
          </nav>

          {/* Heading */}
          <div className="container mt-5 px-0 ml-sm-1 ml-lg-4">
            <h1 className="heading">Hi, I'm Kyle Zunino.<br />
              Student, Traveler, and <br />
              Full Stack JavaScript <span className="secondary-color">Developer</span>
            </h1>
          </div> {/* /Heading */}

          {/* Jumbotron */}
          <div className="container-fluid mt-5 px-0">
            <img src={headerPhoto} alt="kyle" className="kyle" />
            <p className="col-md-9 pt-4 pl-0 text-secondary">I am a world-traveling hospitality veteran turned
                Full Stack JavaScript Web Developer located in the San
                Francisco Bay Area. I graduated from UC-Berkeley in 2014 and
                currently a Student-Developer Moderator at Team Treehouse.
                <br /><br />
                When I'm not coding, you can find me hiking, traveling to far away lands,
                vainly attempting to dance salsa, or training in the gym.</p>
          </div>

        {/* Skills */}
        <section className="container-fluid mt-5 px-0">
          <h2 className="font-weight-bold mb-3">Skills</h2>
          <ul className="row pl-3">
            <li className="col-6 col-md-2">JavaScript</li>
            <li className="col-6 col-md-2">Node.js</li>
            <li className="col-6 col-md-2">React</li>
            <li className="col-6 col-md-2">Express</li>
            <li className="col-6 col-md-2">Sequelize</li>
            <li className="col-6 col-md-2">SQLite</li>
            <li className="col-6 col-md-2">PostreSQL</li>
            <li className="col-6 col-md-2">Pug</li>
            <li className="col-6 col-md-2">HTML5</li>
            <li className="col-6 col-md-2">CSS3</li>
            <li className="col-6 col-md-2">Bootstrap4</li>
            <li className="col-6 col-md-2">Git</li>
          </ul>
        </section>

        {/* Projects */}
            <section className="container-fluid mt-5 px-0">
            <h2 className="font-weight-bold">Projects</h2>
            <div className="row justify-content-around">
              <div className="col-lg-6 mt-5">
                <img className="project-img" src={Project} alt="" />
                <h3 className="font-weight-bold mt-3">Project Name</h3>
                <p className="project-description col-md-9 pl-0 text-secondary">A project description...</p>
                <a className="link-decoration" href="/">View Project »</a>
              </div>
              <div className="col-lg-6 mt-5">
                <img className="project-img" src={Project} alt="" />
                <h3 className="font-weight-bold mt-3">Project Name</h3>
                <p className="project-description col-md-9 pl-0 text-secondary">A project description...</p>
                <a className="link-decoration" href="/">View Project »</a>
              </div>
              <div className="col-lg-6 mt-5">
                <img className="project-img" src={Project} alt="" />
                <h3 className="font-weight-bold mt-3">Project Name</h3>
                <p className="project-description col-md-9 pl-0 text-secondary">A project description...</p>
                <a className="link-decoration" href="/">View Project »</a>
              </div>
              <div className="col-lg-6 mt-5">
                <img className="project-img" src={Project} alt="" />
                <h3 className="font-weight-bold mt-3">Project Name</h3>
                <p className="project-description col-md-9 pl-0 text-secondary">A project description...</p>
                <a className="link-decoration" href="/">View Project »</a>
              </div>
            </div>
          </section>


        </div>

        
      );
    };
  }