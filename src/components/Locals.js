import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import weatherForecast from './img/forecastMain.png';
import travelmorBudget from './img/travelmorMain.png'


import localsLrg from './img/locals-lrg.png';
import reactLogo from './img/react-icon.png';
import herokuLogo from './img/heroku-icon.png';
import nodeLogo from './img/node-logo.png';
import javascriptLogo from './img/javascript-logo.png';
import postgresLogo from './img/postgres-logo.png';
import iphoneLocals from './img/iphone-locals.png';

const Locals = () => {
  //triggers the elements to fade in when the window loads
  const [fadeElement, setFadeElements] = useState('fade-element');

  useEffect(() => {
    window.scrollTo(0, 0);
    setFadeElements('fade-in');
  }, []);
  return (
    <div className={`container-fluid p-0 fade-element ${fadeElement}`}>
      <main className='container-fluid mt-5 px-0'>
        <h1 className='font-weight-bold mt-5'>Locals</h1>
        <p className='col-md-9 p-0 text-secondary'>
          Locals is a web application idea I had while backpacking and living in
          South America. The goal is to connect travelers to authentic local
          experiences outside the purview of mass tourism and help locals create
          their own micro-businesses in order to showcase their unique corner of
          the world.
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
              <td className='secondary-color font-weight-bold locals-heading'>
                <a
                  href='https://github.com/kzunino/locals'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Repository
                </a>
              </td>
              <td className='secondary-color font-weight-bold locals-heading'>
                <a
                  href='https://locals-deploy.herokuapp.com/home'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='font-weight-light'>Node.js</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className='font-weight-light'>Express.js</td>
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
        src={localsLrg}
        alt='Locals home page'
        className='project-main-photo'
      />

      <section className='container-fluid mt-5 px-0'>
        <h2 className='mt-5'>Web Stack</h2>
        <div className='row container-fluid pr-0 mr-sm-0 align-items-center'>
          <p className='col-md-7 p-0 text-secondary mb-5'>
            For this project I created a full stack web application using
            PostgreSQL, Express.js, React, and Node.js––i.e. the PERN stack. I
            chose PostgreSQL over a noSQL database for its long established
            legacy and popularity. Instead of raw queries I opted to use
            Sequelize ORM for its excellent documentation and readable syntax.
            <br></br> <br></br>I built the backend using Node.js with Express to
            handle routing and http requests. For authentication I'm using
            Express-Validator, Bcrypt, and JSON Web Tokens. I had originally
            thought about using Passport.js; however, I didn't think I would
            need the extensive features and opted for a lighter weight solution.
            For a photo database I am using Cloudinary because they have a
            generous free tier and wonderful documentation.
            <br></br> <br></br>
            The front is built with React and ReactStrap. My goal was to
            practice using React Hooks for state management instead of using
            class syntax because the React ecosystem seems to be evolving in
            that direction. To handle global state and making http requests I
            opted to use React Context with Axios. I chose Heroku to host the
            application because it is easy to use and the Postgres addon works
            great!
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
            <div className='program-icon d-inline node'>
              <img
                src={nodeLogo}
                alt='Node Logo'
                className='program-icon-img node'
              />{' '}
              Node
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
            <div className='program-icon d-inline javascript'>
              <img
                src={javascriptLogo}
                alt='Heroku Logo'
                className='program-icon-img javascript'
              />{' '}
              Express
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
            This was the first full stack project that I created from scratch,
            so my biggest challenge was figuring out what my idea really was and
            which features to include. For example, I wanted a message board
            where users could interact. I envisioned a place where local
            residents and businesses would promote events like a virtual
            bulletin board, while also driving traffic to the site. The message
            board needs further development to allow users to search more
            localized message boards for the areas they wish to explore.
            <br></br>
            <br></br>
            Because this was a personal project, I didn't create a way for a
            user to book a tour. To launch as a business, I would need to build
            a booking feature and add a calendar to the dashboard. The search
            feature is a little underdeveloped as well. If you search a first
            name, last name, or hit a key word in the title, the query will
            return a result but the longer the search query, the less likely it
            will return a match because it will be looking for exact matches.
            And the last big fix would be setting up a stricter verification
            process to ensure the identity of hosts. For the purpose of this app
            I just made a verification switch at the bottom of the profile.
            <br></br>
            <br></br>
            Overall, this project taught me a lot and gave me an opportunity to
            learn and practice many new technologies. There are countless
            features that could be added to a project like this and there is a
            lot of room for improvement. If I were to further pursue this
            project, my main priority would be strengthening the safety
            standards by verifying and vetting hosts. I’d want to ensure the
            experiences and hosts were high-quality to guarantee the safety of
            the users and capture repeat users.
          </p>
        </div>
      </section>
      <div className='text-center'>
        <img
          src={iphoneLocals}
          alt='locals profile on iphone'
          className='locals-iphone'
        />
      </div>

      <div className='row justify-content-center'>
        <div className='col-12 col-md-2 text-center'>
          <a
            className='link-decoration '
            href='https://github.com/kzunino/locals'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Code »
          </a>
        </div>
        <div className='col-12 col-md-2 text-center'>
          <a
            className='link-decoration'
            href='https://locals-deploy.herokuapp.com/home'
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
            <Link to='/travelmor'>
              <img className='project-img' src={travelmorBudget} alt='' />
            </Link>
            <h3 className='font-weight-bold mt-3'>Travelmor</h3>
            <p className='project-description col-md-9 pl-0 pr-0 text-secondary'>
            An app to help you budget smart, save money, and travel more.
            </p>
            <Link className='link-decoration' to='/travelmor'>
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

export default Locals;
