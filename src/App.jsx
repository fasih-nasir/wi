import { useState } from 'react'
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
import job from "./assets/pages/postjob"
import Job from './assets/pages/postjob';
import PostJob from './assets/pages/postjob';
// PAGES

function App() {


  return (
    <>
<BrowserRouter>
  <Navbar/>
<Routes>
  <Route>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/service' element={<Service />}/>
    <Route path='/postjob' element={<PostJob />}/>


  </Route>
</Routes>
<Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
