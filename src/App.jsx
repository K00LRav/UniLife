import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import BottomBanner from './components/BottomBanner/BottomBanner';

function App() {


  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      <BottomBanner/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
