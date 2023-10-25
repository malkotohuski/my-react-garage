import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const images = [
  'https://wieck-nissanao-production.s3.amazonaws.com/photos/50ec55516d7fa6d3b43dcf4dd2b8e6183a4abc04/preview-928x522.jpg', // Replace with the URLs or paths to your images
  'https://hips.hearstapps.com/hmg-prod/images/2021-porsche-911-turbo-s-pdk-130-edit-1608061336.jpg?crop=0.622xw:0.466xh;0.376xw,0.500xh&resize=1200:*',
  'https://media.istockphoto.com/id/488467276/photo/man-calling-for-help.jpg?s=2048x2048&w=is&k=20&c=vzvZm9_SMI0CHJTpWfu_j4cgbgFytbVtphMrZxh3rCQ='
];

const menuItems = [
  {
    image: 'https://img.freepik.com/free-vector/realistic-complete-set-car-wheels_1284-29765.jpg?size=626&ext=jpg',
    label: 'Tires',
  },
  {
    image: 'https://s.aolcdn.com/commerce/blogcdn/www.autoblog.com/media/2006/09/advancedvtec3.jpg',
    label: 'Engine',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Mercedes-Benz_7G-Tronic_transmission.jpg',
    label: 'Gearbox',
  },
  {
    image: 'https://di-uploads-pod16.dealerinspire.com/toyotaofnorthcharlotte/uploads/2020/03/N-Charlotte-car-suspension-system.jpg',
    label: 'Suspension',
  },
  {
    image: 'https://i.gaw.to/content/photos/26/98/269855_La_petite_histoire_de_la_direction_assistee.jpg?1024x640',
    label: 'Steering Suspension',
  },
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
    </div>
    <div className="content">
      <div className="menu-images">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <Link to={item.label.toLowerCase() === 'tires' ? '/tires' : `/${item.label.toLowerCase()}`}>
              <img src={item.image} alt={`Menu Img ${index}`} className="menu-image" />
            </Link>
            <button className="menu-button">{item.label}</button>
          </div>
        ))}
      </div>
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
          <div className='footer_part left'>
            <div className='footer_image-left'>
              <img  className='footer-left' src="" alt="Left Part" />
            </div>
          </div>
          <div className='footer_part middle'>
            <div className='footer_text'>
              <div className='header-social'>
                Middle Part Text
              </div>
              <div className='text'>Some text for Middle Part</div>
            </div>
            <div className='footer_image'>
              <img src="your-image-url-for-middle-part" alt="Middle Part" />
            </div>
          </div>
          <div className='footer_part right'>
            <div className='footer_text'>
              <div className='header-social'>
                Right Part Text
              </div>
              <div className='text'>Some text for Right Part</div>
            </div>
            <div className='footer_image'>
              <img src="your-image-url-for-right-part" alt="Right Part" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;