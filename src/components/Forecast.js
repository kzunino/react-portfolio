import React, {Component} from 'react';
import weatherForecast from './img/fullWeather.png';

export default class Project extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <main className='container-fluid mt-5 px-sm-0'>
          <h1 className='font-weight-bold mt-5'>Weather Forecast</h1>
          <p className='col-md-9 pl-0 text-secondary'>
            Weather Forecast is a simple application I put together after
            learning the basics of Bootstrap 4. I wanted a way to practice
            styling, while at the same time exercise my skills at managing data
            from a public API. I used OpenWeatherMap API.
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
          className='kyle'
        />
      </div>
    );
  }
}
