// 
import '../../App.css'
// 
import React from 'react'
import { useState,useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
// 
// IMAGES
import logodark from "../image/logo-dark.png"
// IMAGES

export default function Navbar() {
  // ACTIVE
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname); // Update active path on location change
  }, [location]);
  // ACTIVE
  // STICKE NAVBAR
  window.addEventListener("scroll",function(){
    var navbar=document.getElementById('navbar')
    var navitem=document.querySelectorAll(".nav-item");

    
if(window.scrollY > 500){
  navbar.classList.add("fixtop")

navitem.forEach((e)=>{
  console.log(e);
  e.classList.add("nav-items")
  })
}
else{
  navbar.classList.remove("fixtop")
  navitem.forEach((e)=>{
    e.classList.remove("nav-items")
    console.log(e);
  
  })

}
})


  // STICKY NAVBAR
  return (
    <div>
        {/* TOP HEADER */}
<div className="container-fluid d-flex flex-row d-lg-flex d-none justify-content-center align-items-center tophead m-0 px-4 bg-white py-3">

   <div className="col-6 d-flex  align-items-center">
   <i className="fa-solid span-head fa-location-dot pe-2"></i>
    <span className='span-head'>76-C Second Floor Street 2 DHA,  Karachi, Pakistan</span>
   </div>
   <div className="col-6 d-flex justify-content-end  align-items-center">
   <i className="fa-solid fa-phone pe-2 span-head"></i>
    <span className='span-head'>
    +92 336 3170881
    </span>
   </div>
   
 
</div>
        {/* TOP HEADER */}

    {/*NAVBAR  */}
    <nav className="navbar navbar-expand-lg px-3" id="navbar">
  <div className="container-fluid">
    <a className="navbar-brand col-lg-2 col-6" href="#">
      <img src={logodark} className='col-12' alt="" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto ">
      <li className="nav-item px-2">
        <Link
          to="/"
          className={`nav-link ${activePath === "/" ? "active" : ""}`}
          aria-current="page"
        >
          Home
        </Link>
      </li>
      <li className="nav-item px-2">
        <Link
          to="/about"
          className={`nav-link ${activePath === "/about" ? "active" : ""}`}
        >
          About
        </Link>
      </li>
      <li className="nav-item px-2">
        <Link
          to="/service"
          className={`nav-link ${activePath === "/service" ? "active" : ""}`}
        >
          Service
        </Link>
      </li>
      <li className="nav-item px-2">
        <Link
          to="/contact"
          className={`nav-link ${activePath === "/contact" ? "active" : ""}`}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item px-2">
        <Link
          to="/job"
          className={`nav-link ${activePath === "/job" ? "active" : ""}`}
        >
          Jobs
        </Link>
      </li>
    </ul>
      <form className="d-flex flex-row justify-content-center col-3">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn p-2 ms-2" type="submit">
          
<i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  </div>
</nav>

    {/* NAVBAR */}



    </div>
  )
}
