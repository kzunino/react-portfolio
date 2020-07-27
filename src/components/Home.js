import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import headerPhoto from './img/portfolio_picture.jpeg';
import weatherForecast from './img/weatherForcast.png';
import localsPhoto from './img/locals.png';
import traveBudget from './img/travelBudget.png';
import ucBerkeleySeal from './img/UC_Berkeley_Seal.png';
import treehouseSeal from './img/treehouse-seal.png';

const Home = () => {
  //triggers the elements to fade in when the window loads
  const [fadeElement, setFadeElements] = useState('fade-element');

  useEffect(() => {
    setFadeElements('fade-in');
  }, []);
  return (
    <div className='container-fluid p-0 bg-bracket'>
      <nav className={`nav row mt-5 ml-sm-2 fade-element ${fadeElement}`}>
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
            href='https://drive.google.com/file/d/199otrfuvg6wp0lGSeYYNlc05KnW2x0vK/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='far fa-file fa-lg' />
          </a>
        </div>
      </nav>
      {/* Heading */}
      <div
        className={`container mt-4 mt-md-5 px-0 ml-sm-1 ml-lg-4 fade-element ${fadeElement}`}
      >
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
      <div
        className={`container-fluid mt-4 mt-md-5 px-0 fade-element ${fadeElement}`}
      >
        <img src={headerPhoto} alt='kyle' className='kyle' />
        <div className=' container-fluid row  justify-content-between m-0 p-0'>
          <p className='col-12 col-md-6 pt-4 pl-0 pr-0 text-secondary'>
            I am a world-traveling hospitality veteran turned Full Stack
            JavaScript Web Developer located in the San Francisco Bay Area. I
            graduated from UC-Berkeley in 2014 and I am currently a
            Student-Developer Moderator a Treehouse.
            <br />
            <br />
            My interest in programming happened while I was teaching English and
            studying Spanish in Medellin, Colombia. I began networking with
            international expats and digital nomads and was introduced to the
            world of programming through a roommate. I've been hooked ever
            since.
            <br />
          </p>
          <p className='col-12 col-md-5 pt-4 pl-0 pr-0 text-secondary'>
            When I am not coding, you can find me hiking, traveling to far away
            lands, or vainly attempting to dance salsa. I created this portfolio
            so I could showcase my coding journey and make it easier for you to
            connect with me.
          </p>
        </div>
      </div>
      {/* Education */}
      <section
        className={`container-fluid mt-5 px-0 fade-element ${fadeElement}`}
      >
        <h2 className='mb-3'>Education</h2>
        <div className='row justify-content-around'>
          <div className='col-12 col-md-5 mb-4'>
            <img src={ucBerkeleySeal} alt='UC Berkeley Seal' className='seal' />
            <h6 className='font-weight-bold mt-2 mb-0'>UC Berkeley</h6>

            <p className='degree'>Bachelor's Degree in Sociology</p>
            <p className='degree small'>(2014)</p>
          </div>
          <div className='col-12 col-md-5'>
            <img src={treehouseSeal} alt='Treehouse Seal' className='seal' />
            <h6 className='font-weight-bold mt-2 mb-0'>Treehouse</h6>
            <p className='degree'>Full Stack JavaScript TechDegree</p>
            <p className='degree small'>(2019)</p>
          </div>
        </div>
      </section>
      {/* Skills */}
      <section
        className={`container-fluid mt-5 px-0 fade-element ${fadeElement}`}
      >
        <h2 className='mb-3'>Skills</h2>
        <div className='row'>
          <div className='col-12 col-sm-6 col-md-4 '>
            <h6 className='font-weight-bold m-0'>Languages:</h6>
            <p className='technologies small'>
              ( JavaScript / Python - in progress )
            </p>
          </div>

          <div className='col-12 col-sm-6 col-md-4 '>
            <h6 className='font-weight-bold m-0'>
              Web Design &amp; Development
            </h6>
            <p className='technologies small'>( HTML / CSS )</p>
          </div>

          <div className='col-12 col-sm-6 col-md-4 '>
            <h6 className='font-weight-bold m-0'>Frontend Frameworks:</h6>
            <p className='technologies small'>
              ( React / jQuery / Bootstrap 4)
            </p>
          </div>

          <div className='col-12 col-sm-6 col-md-4 '>
            <h6 className='font-weight-bold m-0'>Backend Frameworks:</h6>
            <p className='technologies small'>( Node.js / Express )</p>
          </div>

          <div className='col-12 col-sm-6 col-md-4 '>
            <h6 className='font-weight-bold m-0'>Database Managements:</h6>
            <p className='technologies small'>
              ( Postgres / SQLite / MongoDB / Sequelize ORM )
            </p>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section
        className={`container-fluid mt-5 px-0 fade-element ${fadeElement}`}
      >
        <h2 className='mb-3'>Projects</h2>
        <div className='row justify-content-around'>
          <div className='col-md-6'>
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
          <div className='col-md-6'>
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
