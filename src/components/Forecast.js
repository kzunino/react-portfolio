import React from 'react';
import weatherForecast from './img/fullWeather.png';
import weatherForecast2 from './img/fullWeather2.png';
import reactLogo from './img/react-icon.png';
import herokuLogo from './img/heroku-icon.png';

const Forecast = () => {
  return (
    <div className='container-fluid p-2'>
      <main className='container-fluid mt-5 px-0'>
        <h1 className='font-weight-bold mt-5'>Weather Forecast</h1>
        <p className='col-md-9 p-0 text-secondary'>
          Weather Forecast is a simple application I created after learning the
          basics of Bootstrap 4. I wanted a way to practice styling, while at
          the same time exercise my skills at managing large data sets from
          OpenWeatherMap API.
        </p>
      </main>
      <section className='container-fluid mt-5 px-0'>
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
        className='project-main-photo'
      />

      <section className='container-fluid mt-5 px-0'>
        <h2 className='mt-5'>Web Stack</h2>
        <div className='row container-fluid pr-0 mr-sm-0 align-items-center'>
          <p className='col-md-7 p-0 text-secondary'>
            For this project I decided to use React and Heroku. I wanted to make
            a very simple and clean weather application in order to practice
            state management, working with larger data sets, and implementing an
            icon library. React makes state management on a small application
            like this very easy to organize.
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

      <section className='container-fluid mt-5 px-0'>
        <h2 className='mt-5 text-center'>Problems &amp; Afterthoughts</h2>
        <div className='row justify-content-center'>
          <p className='col-md-9 text-center text-secondary'>
            One of the issues I had with this project was getting accurate icons
            to render for the correct weather patterns. The API doesn't use a
            numerical database to reference different weather patterns so I was
            forced to use their general descriptions such as "clear" or "rain"
            in order to render an icon. Because of this, there isn't great
            diversity in the icons used for different weather patterns.
            <br></br>
            <br></br>
            One way to improve this project would be to save the zip code in
            local storage or as a cookie so the user doesn't have to re-enter
            their zip code every time the page refreshes or loads. It's a slight
            hassle to constantly have to input a your zip code. Additionally, it
            would be awesome if this project could be global, however, it only
            accepts valid US zip codes.
            <br></br>
            <br></br>
            Another improvement would be to make it more responsive. As it is
            now, the application is nowhere near ready for viewing on a mobile
            device. I didn't really take this into account when I started
            because I wanted to make a widget-like application, but it could be
            made into a smaller, clean mobile version as well.
          </p>
        </div>
      </section>
      <img
        src={weatherForecast2}
        alt='forecast weather app'
        className='project-main-photo'
      />
      <div className='row justify-content-center'>
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
    </div>
  );
};
export default Forecast;
