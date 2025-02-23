import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Developers from './pages/Developers'
import UFS from './pages/UFS';
import SSS from './pages/SSS';
import CFS from './pages/CFS';

function App() {

  const [totalVisitors, setTotalVisitors] = useState(87676)
  const [totalHits, setTotalHits] = useState(723672)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/UrbanFloodingSimulation" element={<UFS />} />
          <Route path="/StormSurgSimulation" element={<SSS />} />
          <Route path="/CompoundFlowSimulation" element={<CFS />} />
        </Routes>
        <Footer visitor={totalVisitors} hits={totalHits} />
      </Router>
    </>
  )
}

export default App
