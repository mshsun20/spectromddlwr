import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
// import Account from './components/Account';
import Uplddta from './components/Uplddta';
// import Upldacc from './components/Upldacc';
import Departments from './components/deptparts/Departments';
import Adddept from './components/deptparts/Adddept';
import Designations from './components/desigparts/Designations';
import Adddesig from './components/desigparts/Adddesig';

const App = () => {
  return (
    <>
        <div>
          <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              {/* <Route path='/account' element={<Account />} /> */}
              <Route path='/dtaupld' element={<Uplddta />} />
              {/* <Route path='/upldacc' element={<Upldacc />} /> */}
              <Route path='/dept' element={<Departments />} />
              <Route path='/adddept' element={<Adddept />} />
              <Route path='/desig' element={<Designations />} />
              <Route path='/adddesig' element={<Adddesig />} />
          </Routes>
          <Footer />
        </div>
    </>
  )
}

export default App