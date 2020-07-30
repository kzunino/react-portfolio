import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import travelBudget from './img/travelBudget.png';
import locals from './img/locals.png';
import weatherForecast from './img/fullWeather.png';
import weatherForecast2 from './img/fullWeather2.png';
import reactLogo from './img/react-icon.png';
import herokuLogo from './img/heroku-icon.png';

const Forecast = () => {
  //triggers the elements to fade in when the window loads
  const [fadeElement, setFadeElements] = useState('fade-element');

  useEffect(() => {
    window.scrollTo(0, 0);
    setFadeElements('fade-in');
  }, []);
  return (
    <div className={`container-fluid p-2 fade-element ${fadeElement}`}>
      <main className='container-fluid mt-5 px-0'>
        <h1 className='font-weight-bold mt-5'>Weather Forecast</h1>
        <p className='col-md-9 p-0 text-secondary'>
          Weather Forecast is a simple application I created after learning the
          basics of CSS. This project gave me a chance to focus on styling and
          managing large data sets from OpenWeatherMap API. Warning: not
          optimized for mobile devices.
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
              <td className='secondary-color font-weight-bold'>
                <a
                  href='https://github.com/kzunino/react-weather-app'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Repository
                </a>
              </td>
              <td className='secondary-color font-weight-bold'>
                <a
                  href='https://kz-react-weather-app.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='font-weight-light'>Heroku</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      <img
        src={weatherForecast}
        alt='forecast weather app'
        className={`project-main-photo`}
      />

      <section className={`container-fluid mt-5 px-0`}>
        <h2 className='mt-5'>Web Stack</h2>
        <div className='row container-fluid pr-0 mr-sm-0 align-items-center'>
          <p className='col-md-7 p-0 text-secondary'>
            For this project I used React and Heroku. I decided to make a clean,
            simple weather application to practice state management, work with
            larger data sets, and implement an icon library. React makes state
            management on a small application like this very easy to organize.
            <br></br> <br></br>I chose Heroku because they have a generous free
            tier package and I wanted to practice uploading projects to a
            cloud-based web service that could host full stack web applications.
            This came in handy for a later full stack application that utilized
            a database, server, and client.
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
            <div className='program-icon d-inline heroku'>
              <img
                src={herokuLogo}
                alt='Heroku Logo'
                className='program-icon-img heroku'
              />{' '}
              Heroku
            </div>
          </div>
        </div>
      </section>

      <section className={`container-fluid mt-5 px-0`}>
        <h2 className='mt-5 text-center'>Problems &amp; Afterthoughts</h2>
        <div className='row justify-content-center'>
          <p className='col-md-9 text-center text-secondary'>
            One of the issues I had with this project was getting accurate icons
            to render for the correct weather patterns. The API doesn't use a
            numerical database to reference different weather patterns so I was
            forced to use their general descriptions such as "clear" or "rain"
            in order to render an icon. Because of this, there isn't great
            diversity in the icons used for the myriad of weather patterns.
            <br></br>
            <br></br>
            One way to improve this project would be to save the zip code in
            local storage or as a cookie so the user doesn't have to re-enter
            their zip code every time the page is opened or refreshed. It would
            also be ideal if this project were global. However, it only accepts
            valid US zip codes.
            <br></br>
            <br></br>
            Another improvement would be to make the styling responsive. As it
            stands, the application is nowhere near ready for viewing on a
            mobile device. I didn't really take this into account when I started
            because I was aiming for more of a widget, but it could be made into
            a smaller, responsive mobile version as well.
          </p>
        </div>
      </section>
      <img
        src={weatherForecast2}
        alt='forecast weather app'
        className={`project-main-photo`}
      />
      <div className={`row justify-content-center`}>
        <div className='col-12 col-md-2 text-center'>
          <a
            className='link-decoration '
            href='https://github.com/kzunino/react-weather-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Code »
          </a>
        </div>
        <div className='col-12 col-md-2 text-center'>
          <a
            className='link-decoration'
            href='https://kz-react-weather-app.herokuapp.com/'
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
            <img className='project-img' src={travelBudget} alt='' />

            <h3 className='font-weight-bold mt-3'>Travel Budget</h3>
            <p className='project-description col-md-9 pl-0 pr-0 text-secondary'>
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
export default Forecast;
