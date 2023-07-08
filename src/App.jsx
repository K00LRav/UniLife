import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import BottomBanner from './components/BottomBanner/BottomBanner';
import CityDetails from './pages/CityDetails/CityDetails';
import PropertyDetails from './pages/HomeDetails/PropertyDetails';
import ShortList from './pages/ShortList';

function App() {


  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/cityDetails/:cityId" element={<CityDetails />} />
        <Route path="/PropertyDetails/:propertyId" element={<PropertyDetails />} />
        <Route path="/ShortList" element={<ShortList/>}/>
      </Routes>
      <BottomBanner/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
