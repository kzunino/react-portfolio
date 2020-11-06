import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import weatherForecast from './img/forecastMain.png';
import travelmorMain from './img/travelmorDashboard2.png'
import locals from './img/locals.png';

import reactLogo from './img/react-icon.png';
import herokuLogo from './img/heroku-icon.png';
import pythonLogo from './img/python-logo.png';
import materialUILogo from './img/materialui.svg';
import postgresLogo from './img/postgres-logo.png';
import travelmorHistoryDesktop from './img/travelmorComputer.png';
 
const Travelmor = () => {
  //triggers the elements to fade in when the window loads
  const [fadeElement, setFadeElements] = useState('fade-element');

  useEffect(() => {
    window.scrollTo(0, 0);
    setFadeElements('fade-in');
  }, []);
  return (
    <div className={`container-fluid p-0 fade-element ${fadeElement}`}>
      <main className='container-fluid mt-5 px-0'>
        <h1 className='font-weight-bold mt-5'>Travelmor.</h1>
        <p className='col-md-9 p-0 text-secondary'>
          Travelmor is a light weight budget web application with over 200 foreign currencies to choose from.
          Traveling for extended periods of time inspired me to make a budget application 
          that would allow me to track my spending and help me keep a birds eye view of my budget.
          The front and backend end are hosted separately on heroku, so it may 
          take about 10 to 15 seconds to wake the app from inactivity.
        </p>
      </main>
      <section className={`container-fluid mt-5 px-0`}>
        <table className='table table-borderless table-sm'>
          <thead>
            <tr>
              <th scope='col' className='col-heading pb-3'>
                TYPE
              </th>
              <th scope='col' className='col-heading pb-3'>
                STACK
              </th>
              <th scope='col' className='col-heading pb-3'>
                CODE
              </th>
              <th scope='col' className='col-heading pb-3'>
                LIVE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='font-weight-light'>Personal</td>
              <td className='font-weight-light'>React</td>
              <td className='secondary-color font-weight-bold travelmor-heading'>
                <a
                  href='https://github.com/kzunino/travelmor_client'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Client Repository
                </a>
              </td>
              <td className='secondary-color font-weight-bold travelmor-heading'>
                <a
                  href='https://travelmor-client.herokuapp.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='font-weight-light'>Django</td>
              <td className='secondary-color font-weight-bold travelmor-heading'>
                <a
                  href='https://github.com/kzunino/travelmor_api'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  API Repository
                </a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className='font-weight-light'>Material UI</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className='font-weight-light'>PostgreSQL</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      <img
        src={travelmorMain}
        alt='Locals home page'
        className='project-main-photo'
       
      />

      <section className='container-fluid mt-5 px-0'>
        <h2 className='mt-5'>Web Stack</h2>
        <div className='row container-fluid pr-0 mr-sm-0 align-items-center'>
          <p className='col-md-7 p-0 text-secondary mb-5'>
            Travelmor budgeting app is written in React and Material UI. I chose 
            Material UI because I liked the idea of having a HOC theme provider and
            having the option to style each component without having to maintain 
            a bunch of css files.
            <br></br> <br></br>The backend is written in Django with Django Rest Framework.
            I wanted to try and branch out from Node.js and practice my Python skills. Django
            also comes with some great features right out of the box such as their admin dashboard feature.
            Django Rest Framework makes setting up token authentication easy and customizable,
            while also integrating well with PostgreSQL.
            <br></br> <br></br>
            The front end is built with React using Redux for global state handling. This was
            my first time using Redux and I really enjoyed the ease of updating state with JavaScript
            Switch Statements. I hosted the client and api on Heroku because their CLI is user 
            friendly and they have a generous free tier PostgreSQL addon.
          </p>

          <div className='col-md-5 pl-0 text-center'>
            <div className='program-icon d-inline react'>
              <img
                src={reactLogo}
                alt='React Logo'
                className='program-icon-img'
              />{' '}
              React
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='program-icon d-inline django'>
              <img
                src={pythonLogo}
                alt='Node Logo'
                className='python-program-icon-img'
              />
              Django
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='program-icon d-inline heroku'>
              <img
                src={herokuLogo}
                alt='Heroku Logo'
                className='program-icon-img heroku'
              />{' '}
              Heroku
            </div>

            <br></br>
            <br></br>
            <br></br>
            <div className='program-icon d-inline materialUI'>
              <img
                src={materialUILogo}
                alt='Material UI Logo'
                className='program-icon-img '
              />{' '}
              Material UI
            </div>

            <br></br>
            <br></br>
            <br></br>
            <div className='program-icon d-inline postgres'>
              <img
                src={postgresLogo}
                alt='Heroku Logo'
                className='program-icon-img postgres'
              />{' '}
              PostgreSQL
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid mt-5 px-0'>
        <h2 className='mt-5 text-center'>Afterthoughts &amp; Improvements</h2>
        <div className='row justify-content-center'>
          <p className='col-md-9 text-center text-secondary'>
            As with any project, I ran into bumps along the way. One of my biggest
            troubles was organizing and structuring the code. I found myself designing,
            building, and then refactoring a lot to make the project more maintainable. I tried to 
            keep the codebase as reusable as possible. One of the difficulties I had was handling
            dates and timezones. I used Moment.js to handle date parsing and calculations. It took me a few days and
            lot of research to figure out how dates should be stored in order to account for differences 
            in timezones. I settled on storing all dates in UTC when stored in the database and then I used Moment to parse
            the dates on the client side into the local timezone.
    
            <br></br>
            <br></br>
            There's a few improvements I would like to develop for this project in the future.
            If the project is over a month long, I should change the
            trip history graphs to toggle between months of the trip instead of display each
            and every day of the trip on one continuous graph. The design breaks when the trip becomes too long.
            The next improvement I would make would be to add unit testing to the components,
            so I can more easily track down bugs and make sure the calculations output the correct
            values. After I had people test my app, I ran into a lot of unexpected behavior, usually stemming
            from the date range of the trip and the current date from which the user was operating from.
          </p>
        </div>
      </section>
      <div className='text-center'>
        <img
          src={travelmorHistoryDesktop}
          alt='travelmor spending history on desktop'
          className='travelmor-computer'
        />
      </div>

      <div className='row justify-content-center'>
        <div className='col-12 col-md-2 text-center'>
          <a
            className='link-decoration '
            href='https://github.com/kzunino/travelmor_client'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Code »
          </a>
        </div>
        <div className='col-12 col-md-2 text-center'>
          <a
            className='link-decoration'
            href='https://travelmor-client.herokuapp.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Live »
          </a>
        </div>
      </div>

      {/* Other Projects */}
      <section className={`container-fluid mt-5 px-0`}>
        <h2 className='font-weight-bold'>Explore other projects</h2>
        <div className='row justify-content-around'>

        <div className='col-md-6 mt-5'>
            <Link to='/locals'>
              <img className='project-img' src={locals} alt='' />
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

        </div>
      </section>
    </div>
  );
};

export default Travelmor;
