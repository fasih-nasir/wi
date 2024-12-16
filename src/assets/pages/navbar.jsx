// 
import '../../App.css'
import 'animate.css';

// 
import React from 'react'
import { useState,useEffect } from 'react';
import { Link, useLocation,useNavigate } from "react-router-dom";
import { Button, Dropdown, Space } from 'antd' 

// 
// IMAGES
import logodark from "../image/logo-dark.png"
// IMAGES

export default function Navbar() {

  // ANTD
  // const items = [
  //   {
  //     key: '1',
  //     label: (
  //       <Link   className='text-decoration-none' rel="noopener noreferrer" href="https://www.antgroup.com">
  //         HR Consulting
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: '2',
  //     label: (
  //       <Link  className='text-decoration-none text-capitalize' rel="noopener noreferrer" href="https://www.aliyun.com">
  //         Improving Resource
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: '3',
  //     label: (
  //       <Link  className='text-decoration-none text-capitalize' rel="noopener noreferrer" href="https://www.aliyun.com">
  //         Corporate program
  //       </Link>
  //     ),
  //   },
  // ];
  // ANTD
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

  e.classList.add("nav-items")
  })
}
else{
  navbar.classList.remove("fixtop")
  navitem.forEach((e)=>{
    e.classList.remove("nav-items")
    
  
  })

}
})


  // STICKY NAVBAR
  return (
    <>
{activePath === "/login"?(
  <div></div>
):(
    <div>
        {/* TOP HEADER */}
<div className="animate__fadeIn container-fluid d-flex flex-row d-lg-flex d-none justify-content-center align-items-center tophead m-0 px-4  py-3">

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
    <nav className="navbar navbar-expand-lg px-lg-3 bg-white" id="navbar">
  <div className="container-fluid">
    <a className="navbar-brand col-lg-2 col-6" href="#">
      <img src={logodark} className='col-12' alt="" />
    </a>
    <button className=" navbar-toggler"
     type="button"
      data-bs-toggle="offcanvas" 
      data-bs-target="#offcanvasRight"
       aria-controls="offcanvasRight"
       >
        <i className="fa-solid fa-bars"></i>
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
          onClick={() =>
            useEffect(()=>{
              setTimeout(() => {
                window.location.reload()
              },1000);
            },[])
          }
        >
          About
        </Link>
      </li>
      {/*  */}
      {/* <Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
     <li className="nav-item px-2">
        <Link
          to="/service"
          className={`nav-link ${activePath === "/service" ? "active" : ""}`}
        >
          Service
        </Link>
      </li>
      </Dropdown>
    
    </Space>
     </Space> */}
   <li className="nav-item px-2">
        <Link
          to="/service"
          className={`nav-link ${activePath === "/service" ? "active" : ""}`}
          onClick={() =>
            useEffect(()=>{
              setTimeout(() => {
                window.location.reload()
              },1000);
            },[])
          }
       >
          Service
        </Link>
      </li>
     
      {/*  */}
      <li className="nav-item px-2">
        <Link
          to="/contact"
          className={`nav-link ${activePath === "/contact" ? "active" : ""}`}
          onClick={() =>
            useEffect(()=>{
              setTimeout(() => {
                window.location.reload()
              },1000);
            },[])
          }
       >
          Contact
        </Link>
      </li>
      <li className="nav-item px-2">
        <Link
          to="/job"
          className={`nav-link ${activePath === "/job" ? "active" : ""}`}
          onClick={() =>
            useEffect(()=>{
              setTimeout(() => {
                window.location.reload()
              },1000);
            },[])
          }
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

{/* offcanvas */}
<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel" className='col-12 d-flex justify-content-center align-items-center'>
    <a className="navbar-brand mx-auto  col-12 d-flex justify-content-center align-items-center" href="#">
      <img src={logodark} className='col-8 mx-auto mt-3' alt="" />
    </a>
    </h5>
    {/* <button type="button" className="" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
  </div>
  <div className="offcanvas-body d-flex ">
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
          onClick={() =>
            useEffect(()=>{
              setTimeout(() => {
                window.location.reload()
              },1000);
            },[])
          }
        >
          About
        </Link>
      </li>
      {/*  */}
      {/* <Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
     <li className="nav-item px-2">
        <Link
          to="/service"
          className={`nav-link ${activePath === "/service" ? "active" : ""}`}
        >
          Service
        </Link>
      </li>
      </Dropdown>
    
    </Space>
     </Space> */}
   <li className="nav-item px-2">
        <Link
          to="/service"
          className={`nav-link ${activePath === "/service" ? "active" : ""}`}
          onClick={() =>
            useEffect(()=>{
              setTimeout(() => {
                window.location.reload()
              },1000);
            },[])
          }
       >
          Service
        </Link>
      </li>
     
      {/*  */}
      <li className="nav-item px-2">
        <Link
          to="/contact"
          className={`nav-link ${activePath === "/contact" ? "active" : ""}`}
          onClick={() =>
            useEffect(()=>{
              setTimeout(() => {
                window.location.reload()
              },1000);
            },[])
          }
       >
          Contact
        </Link>
      </li>
      <li className="nav-item px-2">
        <Link
          to="/job"
          className={`nav-link ${activePath === "/job" ? "active" : ""}`}
          onClick={() =>
            useEffect(()=>{
              setTimeout(() => {
                window.location.reload()
              },1000);
            },[])
          }
       >
          Jobs
        </Link>
      </li>
    </ul>
  </div>
</div>
{/* off canvas */}

    </div>
  )}
  </>
  )
}
