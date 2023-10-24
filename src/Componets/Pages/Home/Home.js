import React, { useState, useEffect } from 'react';
import './Home.css';

const images = [
  'https://wieck-nissanao-production.s3.amazonaws.com/photos/50ec55516d7fa6d3b43dcf4dd2b8e6183a4abc04/preview-928x522.jpg', // Replace with the URLs or paths to your images
  'https://hips.hearstapps.com/hmg-prod/images/2021-porsche-911-turbo-s-pdk-130-edit-1608061336.jpg?crop=0.622xw:0.466xh;0.376xw,0.500xh&resize=1200:*',
  'https://media.istockphoto.com/id/488467276/photo/man-calling-for-help.jpg?s=2048x2048&w=is&k=20&c=vzvZm9_SMI0CHJTpWfu_j4cgbgFytbVtphMrZxh3rCQ='
];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const changeImageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(changeImageInterval);
    };
  }, []);

  return (
    <div className="homepage">
      <div className="ad-box left-ad">
        <img className='left-img' src={images[currentImageIndex]} alt="Gtr" />
        {/* Left Ad Content */}
      </div>
      <div className="content">
        <h1>AUTO GARAGE</h1>
        <p>Еverything for your car</p>
        <div className='header-search'>
          <input 
          className='search-field'
          type='text'
          placeholder='search here'
          />
            <button className='search-buuton'>Search</button>
        </div>
      </div>
      <div className="ad-box right-ad">
      <img className='right-img' src={images[currentImageIndex]} alt="porsche" />
        {/* Right Ad Content */}
      </div>
      <div className='footer'>
        <div className='footer_social'>
          <div className='footer_social-text'>
            <div className='header-social'>
              Finding parts has never been so easy
            </div>
            <div className='text'>some text!!!</div>
          </div>
          <div className='footer_social-block'>
            <div className='social-image'>some text!!!
            
            </div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
