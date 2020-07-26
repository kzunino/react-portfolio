import React from 'react';

const Instagram = () => {
  return (
    <section className='container-fluid mt-5 p-0 instagramGrid'>
      <div className='instagramGrid-right'>
        <h2 className='mb-3'>I'm more interesting on instagram</h2>
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
  );
};

export default Instagram;
