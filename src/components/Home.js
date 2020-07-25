import React from 'react';
import {Link} from 'react-router-dom';

import headerPhoto from './img/kyle_photo.jpg';
import weatherForecast from './img/weatherForcast.png';
import localsPhoto from './img/locals.png';
import Resume from './img/kyleZResume.pdf';
import traveBudget from './img/travelBudget.png';

const Home = () => {
  return (
    <div className='container-fluid pt-2 px-lg-0 bg-bracket'>
      <nav className='nav row mt-5 ml-sm-2'>
        <div className='col-3 align-self-center'>
          <div className='vertical_line'></div>
        </div>
        <div className='col pl-0 icons'>
          <a
            className='icon github m-1 mr-4'
            href='https://github.com/kzunino'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github fa-lg' />
          </a>
          <a
            className='icon linkedin m-1 mr-4'
            href='https://www.linkedin.com/in/kylezunino/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin fa-lg' />
          </a>
          <a
            className='icon instagram m-1 mr-4'
            href='https://www.instagram.com/kzunino'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram fa-lg' />
          </a>
          <a
            className='icon resume m-1'
            href={Resume}
            target='_blank'
            download
            rel='noopener noreferrer'
          >
            <i className='far fa-file fa-lg' />
          </a>
        </div>
      </nav>
      {/* Heading */}
      <div className='container mt-4 mt-md-5 px-0 ml-sm-1 ml-lg-4'>
        <h1 className='heading'>
          Hi, I'm Kyle Zunino.
          <br />
          Student, Traveler, and <br />
          Full Stack JavaScript{' '}
          <span className='secondary-color'>Developer</span>
        </h1>
      </div>{' '}
      {/* /Heading */}
      {/* Jumbotron */}
      <div className='container-fluid mt-4 mt-md-5 px-0'>
        <img src={headerPhoto} alt='kyle' className='kyle' />
        <p className='col-md-9 pt-4 pl-0 pr-0 text-secondary'>
          I am a world-traveling hospitality veteran turned Full Stack
          JavaScript Web Developer located in the San Francisco Bay Area. I
          graduated from UC-Berkeley in 2014 and currently a Student-Developer
          Moderator at Team Treehouse.
          <br />
          <br />
          When I'm not coding, you can find me hiking, traveling to far away
          lands, vainly attempting to dance salsa, or training in the gym.
        </p>
      </div>
      {/* Skills */}
      <section className='container-fluid mt-5 px-0'>
        <h2 className='font-weight-bold mb-3'>Skills</h2>
        <ul className='row pl-3'>
          <li className='col-6 col-md-3'>
            <span>JavaScript</span>
          </li>
          <li className='col-6 col-md-3'>
            <span>Node.js</span>
          </li>
          <li className='col-6 col-md-3'>
            <span>React</span>
          </li>
          <li className='col-6 col-md-3'>
            <span>Express</span>
          </li>
          <li className='col-6 col-md-3'>
            <span>Sequelize</span>
          </li>
          <li className='col-6 col-md-3'>
            <span>SQLite</span>
          </li>
          <li className='col-6 col-md-3'>
            <span>PostgreSQL</span>
          </li>
          <li className='col-6 col-md-3'>
            <span>Pug</span>
          </li>
          <li className='col-6 col-md-3'>
            <span>HTML5</span>
          </li>
          <li className='col-6 col-md-3'>
            <span>CSS3</span>
          </li>
          <li className='col-6 col-md-3'>
            <span>Bootstrap4</span>
          </li>
          <li className='col-6 col-md-3'>
            <span>Git</span>
          </li>
        </ul>
      </section>
      {/* Projects */}
      <section className='container-fluid mt-5 px-0'>
        <h2 className='font-weight-bold'>Projects</h2>
        <div className='row justify-content-around'>
          <div className='col-md-6 mt-5'>
            <Link to='/locals'>
              <img className='project-img' src={localsPhoto} alt='' />
            </Link>
            <h3 className='font-weight-bold mt-3'>Locals</h3>
            <p className='project-description col-md-9 pl-0 pr-0 text-secondary'>
              A full stack application that connects travelers to locals
              crafting authentic experiences in cities they love.
            </p>
            <Link className='link-decoration' to='/locals'>
              View Project »
            </Link>
          </div>
          <div className='col-md-6 mt-5'>
            <Link to='/forecast'>
              <img className='project-img' src={weatherForecast} alt='' />
            </Link>
            <h3 className='font-weight-bold mt-3'>Forecast App</h3>
            <p className='project-description col-md-9 pl-0 pr-0 text-secondary'>
              A five day forecast app that shows a US city forecast based on a
              user's zip code.
            </p>
            <Link className='link-decoration' to='/forecast'>
              View Project »
            </Link>
          </div>

          <div className='col-12 mt-5 text-center'>
            <img className='project-img-lrg' src={traveBudget} alt='' />
            <h3 className='font-weight-bold text-center mt-3'>Travel Budget</h3>
            <p className='project-description text-center pl-0 pr-0 text-secondary'>
              An app to help you budget smart, save more, and travel longer.
            </p>
            <p className='project-description text-center pl-0 pr-0 text-secondary'>
              <strong>Coming soon...</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
