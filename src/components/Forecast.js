import React, {Component} from 'react';
import weatherForecast from './img/fullWeather.png';
import reactLogo from './img/react-icon.png';
import herokuLogo from './img/heroku-icon.png';

export default class Project extends Component {
  render() {
    return (
      <div className='container-fluid p-2'>
        <main className='container-fluid mt-5 px-sm-0'>
          <h1 className='font-weight-bold mt-5'>Weather Forecast</h1>
          <p className='col-md-9 pl-0 text-secondary'>
            Weather Forecast is a simple application I put together after
            learning the basics of Bootstrap 4. I wanted a way to practice
            styling, while at the same time exercise my skills at managing large
            data sets from OpenWeatherMap API.
          </p>
        </main>
        <section className='container-fluid mt-5 px-sm-0'>
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
                    href='https://github.com/kzunino'
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
        <section className='container-fluid mt-5 px-sm-0'>
          <h2 className='mt-5'>Web Stack</h2>
          <div className='row container-fluid pr-0 align-items-center'>
            <p className='col-md-7 pl-0 text-secondary'>
              For this project I decided to use React and Heroku. I wanted to
              make a very simple and clean weather application in order to
              practice state management, working with larger data sets, and
              implementing an icon library. React makes state management on a
              small application like this very easy to organize.
              <br></br> <br></br>I chose Heroku because they have a generous
              free tier package and I wanted to practice uploading projects to a
              cloud-based web service that could host full stack web
              applications. This came in handy for a later project full stack
              application that utilized a database, server, and client.
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
              <div className='program-icon d-inline heroku'>
                <img
                  src={herokuLogo}
                  alt='Heroku Logo'
                  className='program-icon-img '
                />{' '}
                Heroku
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
