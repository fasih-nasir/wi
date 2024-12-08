import { useState,useEffect } from 'react'
// import { useLocation } from 'react-router-dom';
import './App.css'
// BOOTSTRAP 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// BOOTSTRAP 
// PAGES
import Home from './assets/pages/home'
import About from './assets/pages/about'
import Contact from './assets/pages/contact'
import Navbar from './assets/pages/navbar'
import Footer from './assets/pages/footer';
import Service from './assets/pages/service';
// import job from "./assets/pages/postjob"
import Jobs from './assets/pages/jobs';
import PostJob from './assets/pages/postjob';
import Login from './assets/pages/login';
// PAGES

function App() {
  // const currentURL = window.location.href; 

  return (
    <>
    <BrowserRouter>
{/* {currentURL.includes("login")?"":<Navbar/>} */}
<Navbar/>
      <Routes>
        <Route>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/service' element={<Service />}/>
          <Route path='/postjob' element={<PostJob />}/>
          <Route path='/job' element={<Jobs />}/>

          <Route path='/login' element={<Login />}/>
        </Route>
      </Routes>
      <Footer/>
{/* {currentURL.includes("login")?"": <Footer/>} */}


    </BrowserRouter>
    </>
  );
}

export default App;
