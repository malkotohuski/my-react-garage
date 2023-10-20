import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Componets/Pages/Home/Home';
import ContactPage from './Componets/Pages/Contact/Contact';
import AboutPage from './Componets/Pages/About/About';
import Navbar from './Componets/Navbar/Navbar';
import PartsPage from './Componets/Pages/Patrs/Parts';
import FilterPage from './Componets/Pages/Filter/Filter';
import TiresPage from './Componets/Pages/Tires/Tires';
import TruckPartsPage from './Componets/Pages/Truck/TruckParts';
import MotorcyclePartsPage from './Componets/Pages/Motorcycle/MotorcycleParts';
import MotorOilPage from './Componets/Pages/MotorOil/MotorOil';
import WinterTiresPage from './Componets/Pages/Tires/Winter/WinterTires';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/parts" element={<PartsPage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/tires" element={<TiresPage />} />
        <Route path="/truck" element={<TruckPartsPage />} />
        <Route path="/motorcycle" element={<MotorcyclePartsPage />} />
        <Route path="/motoroil" element={<MotorOilPage />} />
        <Route path="tires/wintertires" element={<WinterTiresPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
