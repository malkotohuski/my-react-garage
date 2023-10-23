import React, { useState, useEffect } from 'react';
import './Home.css';

const images = [
  'https://wieck-nissanao-production.s3.amazonaws.com/photos/50ec55516d7fa6d3b43dcf4dd2b8e6183a4abc04/preview-928x522.jpg', // Replace with the URLs or paths to your images
  'https://hips.hearstapps.com/hmg-prod/images/2021-porsche-911-turbo-s-pdk-130-edit-1608061336.jpg?crop=0.622xw:0.466xh;0.376xw,0.500xh&resize=1200:*',
  'https://hobbyland.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/-/1-43-bmw-m5-competition-red-01.jpg',
];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const changeImageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

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
        <h1>Welcome to AUTOCAR</h1>
        <p>This is the home page of my React application.</p>
        <div className='header-search'>
          <input 
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
    </div>
  );
}

export default HomePage;
