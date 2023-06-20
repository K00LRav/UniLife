import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import BottomBanner from './components/BottomBanner/BottomBanner';
import CityDetails from './pages/CityDetails/CityDetails';
import HomeDetails from './pages/HomeDetails/HomeDetails';

function App() {


  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/cityDetails/:cityId" element={<CityDetails />} />
        <Route path="/HomeDetails/:cityId" element={<HomeDetails />} />
      </Routes>
      <BottomBanner/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
