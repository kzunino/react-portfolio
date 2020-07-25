import React from 'react';

export default () => {
  return (
    <footer className='container-fluid mt-5 mb-5 p-0'>
      <div className='navbar d-flex px-0'>
        <a href='/' id='home' className='mr-auto'>
          <strong>KZ.</strong>
        </a>
        <a
          className='mr-3 link-decoration'
          href='https://github.com/kzunino'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
        <a
          className='link-decoration'
          href='https://www.linkedin.com/in/kylezunino/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};
