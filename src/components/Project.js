import React, {Component} from 'react';
import projectPhotos from './img/kyle_photo.jpg';

export default class Project extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <main className='container-fluid mt-5 px-lg-5'>
          <h1 className='font-weight-bold mt-5'>Project Name</h1>
          <p className='col-md-9 pl-0 text-secondary'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            alias eius error in eum est ut quas odio placeat reprehenderit
            impedit, nostrum accusantium, enim similique porro totam suscipit
            modi odit!
          </p>
        </main>
        <section className='container-fluid mt-5 px-lg-5'>
          <table className='table table-borderless'>
            <thead>
              <tr>
                <th scope='col'>STACK</th>
                <th scope='col'>CODE</th>
                <th scope='col'>LIVE LINK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React</td>
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
                  <a href='/' target='_blank' rel='noopener noreferrer'>
                    View Site
                  </a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
          <img src={projectPhotos} alt='' className='kyle' />
        </section>
      </div>
    );
  }
}
