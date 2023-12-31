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
import AllCities from './pages/AllCities/AllCities';
import FavoriteContextProvider from "./contexts/FavoriteContext"

function App() {


  return (
    <FavoriteContextProvider>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/cityDetails/:cityId" element={<CityDetails />} />
        <Route path="/PropertyDetails/:propertyId" element={<PropertyDetails />} />
        <Route path="/ShortList" element={<ShortList/>}/>
        <Route path="/AllCities" element={<AllCities/>}/>
      </Routes>
      <BottomBanner/>
      <Footer/>
    </BrowserRouter>
      </FavoriteContextProvider>
  )
}

export default App
