// 
import '../../App.css'
// 
import React from 'react'
import { Link } from 'react-router-dom'
// 
// IMAGES
import logodark from "../image/logo-dark.png"
// IMAGES

export default function Navbar() {
  return (
    <div>
        {/* TOP HEADER */}
<div className="container-fluid d-flex flex-row justify-content-center align-items-center tophead m-0 px-4 bg-white py-3">
   <div className="col-3 d-flex  align-items-center">
<a href="#">
<img src={logodark} className='img-fluid col-7' alt="" />
</a>
   </div>
   <div className="col-4 d-flex  align-items-center">
   <i class="fa-solid span-head fa-location-dot pe-2"></i>
    <span className='span-head'>76-C Second Floor Street 2 DHA,  Karachi, Pakistan</span>
   </div>
   <div className="col-2 d-flex  align-items-center">
   <i class="fa-solid fa-phone pe-2 span-head"></i>
    <span className='span-head'>
    +92 336 3170881
    </span>
   </div>
   <div className="col-3 d-flex justify-content-end align-items-center">
    <span className='mx-2 px-3 py-2  bg-d'><i class="fa-brands fa-facebook-f   "></i></span>
    <span className='mx-2 px-3 py-2 bg-d'><i class="fa-brands fa-linkedin-in "></i></span>
    <span className='mx-2 px-3 py-2 bg-d'><i class="fa-brands fa-instagram "></i></span>
    {/* <span><i class="fa-brands fa-facebook-f"></i></span> */}

   </div>
</div>
        {/* TOP HEADER */}

    {/*NAVBAR  */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="#"
            tabIndex={-1}
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    {/* NAVBAR */}
    </div>
  )
}
