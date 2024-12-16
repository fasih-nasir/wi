// import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
// IAMGES
import homeimg from "../image/abouthom.png"
import car2 from "../image/car2.png";

// IAMGES
export default function About() {
  // 
  const [customers, setCustomers] = useState(0);
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    const customerInterval = setInterval(() => {
      setCustomers((prev) => (prev < 2404 ? prev + 5 : 2404));
    }, 200);

    const countryInterval = setInterval(() => {
      setCountries((prev) => (prev < 5672 ? prev + 5 : 5672));
    }, 200);

    return () => {
      clearInterval(customerInterval);
      clearInterval(countryInterval);
    };
  }, []);
  // 
  return (
    <>
    {/* home */}
    <div className='about-page container-fluid d-flex flex-column justify-content-center align-items-center'>
<h2 className='text-white text-center display-3 fw-normal mx-auto col-lg-5'>About-Us</h2>
  <span className='text-white'>About Our HR-Consultancy_</span>
  {/* <h5 className='text-white text-center fw-light mt-3 col-7'>Business consultancy enables companies to stay competitive in a rapidly evolving
  digital landscape, ultimately leading to increased efficiency</h5> */}
    </div>
    {/* home */}

 {/* ABOUT */}
 <div className="py-5 container-fluid about d-flex  flex-column justify-content-center align-items-center">
{/* <div className="col-1"></div> */}
  <div className="col-lg-9 col-12 text-center px-lg-4 col-12 py-4">
    {/* <span className="text-uppercase px-1 py-2 col-org">About Us</span> */}
    <h1 className="display-4 fw-normal col-12 text-capitalize">
    We create solutions that are bold & up with the times
    </h1>
    <p className="col-grey">We provide scalable HR solutions tailored to meet the unique needs of businesses. Our services streamline operations, enhance employee engagement, and drive organizational growth.</p>
    <Link to={"/about"} className="text-decoration-none">
       
            <button className="bookmarkBtn bookmarkBtn1 mt-4 mx-auto">
    <span className="IconContainer">
     
      <i className="fa-solid fa-arrow-right icon"></i>
    </span>
    <Link className="text text1 col-8 text-decoration-none" to={"/about"}>More-Info</Link>
    
  </button>
  </Link>
  
  </div>
{/* middle */}
 {/* LAST */}
 <section className="container my-5 py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6 col-12">
          <h6 className="col-org mb-2 col-12">ABOUT US</h6>
          <h2 className="mb-4">It's everything you'll ever need.</h2>
          <p className="text-muted">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Essepisum suspendisse ultrices gravida ultrices commodo viverra.
          </p>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-2">
              <i className="fa-solid fa-check-circle col-org me-2"></i>
              Consectetur adipiscing sed do eiusmod tempor.
            </li>
            <li className="d-flex align-items-center mb-2">
              <i className="fa-solid fa-check-circle col-org me-2"></i>
              Incididunt ut labore sed dolore magna aliqua.
            </li>
            <li className="d-flex align-items-center">
              <i className="fa-solid fa-check-circle col-org me-2"></i>
              Essepisum suspendisse ultrices commodo.
            </li>
          </ul>
          <button className="btn btn-warnin mt-4 mb-3">Let's Get Started</button>
        </div>

        {/* Right Content */}
        <div className="col-md-6 col-12 text-center">
          <div className="position-relative col-12">
            <img
              src="https://themewant.com/products/wordpress/bizgen/wp-content/uploads/2024/09/post1.webp"
              alt="Person with Laptop"
              className="col-lg-10 col-12 ab-cri-img"
            />
            <div className="position-absolute top-50 start-0 translate-middle bg-white mx-lg-0 mx-auto text-center col-12 align-items-end col-lg-5 d-flex flex-column justify-content-end p-3 rounded shadow">
              <h3 className="mb-0 col-org">{customers.toLocaleString()}+</h3>
              <p className="mb-0">GLOBAL CUSTOMERS</p>
            </div>
            <div className="position-absolute top-100 start-50 translate-middle bg-white p-3 rounded shadow">
              <h3 className="mb-0 col-org">{countries}+</h3>
              <p className="mb-0">COUNTRIES SERVED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
 {/* LAST */}
  {/* middle */}
  <div className="col-12 flex-column d-flex justify-content-center align-items-center car-img-2">
    <h1 className='text-white  col-lg-5 col-12 text-center'>Have Any Project? Let’s Talk
    & Grow your Business</h1>
    <Link to={"/about"} className="text-decoration-none">

<button className="bookmarkBtn mt-4">
<span className="IconContainer">

<i className="fa-solid fa-arrow-right icon"></i>
</span>
<Link className="text col-10 text-decoration-none" to={"/about"}>Contact Now</Link>

</button>
</Link>
  </div>


</div>
 {/* ABOUT */}

  </>
  )
}
