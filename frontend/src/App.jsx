import { useState } from 'react'

import './App.css';
import Navbar from './layout/Navbar.jsx';
import Card from './layout/Card.jsx';
import Head from './layout/head.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addbook from './scrapbooks/Addbook.jsx';
import Editbook from './scrapbooks/Editbook.jsx';
import Viewbook from './scrapbooks/Viewbook.jsx';
function App() {

  return (
    <>
      <div className='app'>
        <Router>
          <Navbar />
          <div className="cont">
            <Head />

            <Routes>
              <Route exact path="/" element={<Card />} />
              <Route exact path="/CreateScrapbook" element={<Addbook />} />
              <Route exact path="/EditScrapbook/:id" element={<Editbook />} />
              <Route exact path="/ViewScrapbook/:id" element={<Viewbook />} />
            </Routes>

          </div>
        </Router>

      </div>
    </>

  )
}

export default App
