import React from 'react';
import Resume from './img/kyleZResume.pdf';

export default () => {
  return (
    <>
      <section className='container-fluid mt-5 px-lg-0'>
        <h2 className='font-weight-bold'>Let's connect and build something!</h2>
        <a
          className='email link-decoration mb-1'
          href='mailto:kzunino@gmail.com'
        >
          <strong>kzunino@gmail.com</strong>
        </a>
        <br></br>

        <a className='link-decoration' href={Resume} download>
          <strong>Download my CV </strong> <i className='far fa-file fa-md' />
        </a>
      </section>

      <section className='container-fluid mt-5 px-lg-0 instagramGrid'>
        <div className='instagramGrid-right'>
          <h2 className='font-weight-bold'>
            I'm more interesting on instagram
          </h2>
        </div>
        <div className='instagramGrid-left mt-4'>
          <div className='grid-left'></div>
          <div className='center-top '></div>
          <div className='center-bottom '></div>
          <div className='grid-right'></div>
        </div>
        <a className='link-decoration' href='https://www.instagram.com/kzunino'>
          See More »
        </a>
      </section>
    </>
  );
};
