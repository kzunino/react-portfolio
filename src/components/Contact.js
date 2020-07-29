import React from 'react';
import Resume from './img/kyleZResume.pdf';

export default () => {
  return (
    <>
      <section className='container-fluid mt-5 p-0'>
        <h2 className='mb-3'>Let's connect and build something</h2>
        <a
          className='email link-decoration mb-1'
          href='mailto:kzunino@gmail.com'
        >
          <i className='far fa-envelope fa-md'></i>{' '}
          <strong>kzunino@gmail.com</strong>
        </a>
        <br></br>

        <a className='link-decoration' href={Resume} download>
          <i className='far fa-file fa-md' /> <strong>Download my CV </strong>
        </a>
      </section>
    </>
  );
};
