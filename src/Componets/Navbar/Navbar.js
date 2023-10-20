import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'


function DropdownMenu(){
  const [showTireSections, setShowTireSections] = useState(false);
  const [showCarPartsSections, setShowCarPartsSections] = useState(false);

  const handleTireLinkHover  = () => {
    setShowTireSections(true);
    setShowCarPartsSections(false);
  };

  const handleCarPartsLinkHover = () => {
    setShowCarPartsSections(true);
    setShowTireSections(false);
  }

  const handleDropdownLeave = () => {
    setShowTireSections(false);
    setShowCarPartsSections(false);
  };

  

  return (
    <div className='dropdown-menu' onMouseLeave={handleDropdownLeave} >
    <ul className="dropdown-item-list">
    <li className="dropdown-item"
     >
      <Link to="/tires" className="dropdown-link" onMouseEnter={handleTireLinkHover}>
            Tires
          </Link>
      {showTireSections && <TireSections />}
    </li>
    <li className="dropdown-item"> 
      <Link to="/carsParts" className="dropdown-link" onMouseEnter={handleCarPartsLinkHover}>
        Cars Parts
      </Link>
      {showCarPartsSections && <CarPartsSection />}
      </li>
  </ul>
  </div>
  )
}

function TireSections() {
  return (
    <div className="tire-sections">
      <ul >
      <li className="tire-section">
          <Link to="tires/wintertires" className="dropdown-link">Winters Tires</Link>
        </li>
        <li className="tire-section">
          <Link to="/" className="dropdown-link">Summer Tires</Link>
        </li>
        <li className="tire-section">
          <Link to="/" className="dropdown-link">All-Season Tires</Link>
        </li>
        </ul>
    </div>
  );
}

function CarPartsSection() {
  return (
    <div className="tire-sections">
      <ul >
      <li className="tire-section">
          <Link to="tires/wintertires" className="dropdown-link">Motors</Link>
        </li>
        <li className="tire-section">
          <Link to="/" className="dropdown-link">Gear</Link>
        </li>
        <li className="tire-section">
          <Link to="/" className="dropdown-link">parts</Link>
        </li>
        <li className="tire-section">
          <Link to="/" className="dropdown-link">roals</Link>
        </li>
        </ul>
    </div>
  );
}

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className='header-wrapper'>
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
    <div className="burger-icon" onClick={toggleMenu}>
    <FontAwesomeIcon icon={faCar}  color="white" size="2x" />
          </div >
          {isMenuOpen && <DropdownMenu />}
      <ul className='navbar-nav' >
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/parts" className="nav-link">Parts</Link>
        </li>
        <li className="nav-item">
          <Link to="/filter" className="nav-link">Filter</Link>
        </li>
        <li className="nav-item">
          <Link to="/tires" className="nav-link">Tires</Link>
        </li>
        <li className="nav-item">
          <Link to="/truck" className="nav-link">Truck parts</Link>
        </li>
        <li className="nav-item">
          <Link to="/motorcycle" className="nav-link">Motorcycle parts</Link>
        </li>
        <li className="nav-item">
          <Link to="/motoroil" className="nav-link">Motor Oil</Link>
        </li>
        <li className="nav-item">
          <Link to="/wintertires" className="nav-link">Winter Tires</Link>
        </li>
      </ul>
      
    </nav>
    </div>
  );
}

export default Navbar;
