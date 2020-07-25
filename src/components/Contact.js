import React from 'react';
import Resume from './img/kyleZResume.pdf';

export default () => {
  return (
    <section className='container-fluid mt-5 px-lg-0'>
      <h2 className='font-weight-bold'>Let's Connect</h2>
      <a className='email link-decoration mb-1' href='mailto:kzunino@gmail.com'>
        <strong>kzunino@gmail.com</strong>
      </a>
      <br></br>

      <a className='link-decoration' href={Resume} download>
        <strong>Download my CV </strong> <i className='far fa-file fa-md' />
      </a>
    </section>
  );
};
