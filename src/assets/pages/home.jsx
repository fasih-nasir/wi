import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'animate.css';

// FLES
import "../../App.css";
import 'animate.css';
// FILES
// ANTD
import { Collapse } from "antd";
// ANTD
// Import Images
import car1 from "../image/Untitled7.png";
import car2 from "../image/car2.png";
import car3 from "../image/Untitled6.png";
import stats1 from "../image/stats1.jpg"
import stats2 from "../image/stats2.jpg"
import stats3 from "../image/stats3.jpg"
import stats4 from "../image/stats4.jpg"
import faqs from "../image/faqs.webp";
import Footer from "./footer";
export default function Home() {
  // ANTD

  // ANTD
  var [stats,setstate]=useState("")
  // STATS
var num=0;

useEffect(()=>{
setInterval(() => {
  num+=5

  setstate(num)
  
}, 200)

},[])
  // STATS
  const [loader,setloader]=useState(true)

// LOADER
useEffect(()=>{
  var load=document.getElementById("loader")
const timer= setTimeout(() => {
load.classList.add("ad")
  setloader(false)

}, 2000);
return()=> {

    clearTimeout(timer)
  }
},[])
// LOADER

  return (
 <>
 {/* LOADER */}
  {loader?(
 
<div className="container-fluid z-3 d-flex justify-content-center align-items-center" id="loader">
<div className="loader col-1" ></div>
</div>
):(
<div>
{/* LOADER */}

 {/* HOME SECTION */}
      <div

        id="carouselExampleFade"
        className="animate__fadeIn container-fluid m-0 p-0 carousel slide carousel-fade"
        data-bs-ride="carousel"
      data-bs-interval="3500" // This will change the image every 2 seconds
      >
        <div className="carousel-inner m-0 ">
          <div className="carousel-item animate__fadeIn active d-flex flex-column justify-content-center align-items-center">
            <img
              className="d-block w-100 h-100 position-relative"
              src={car2}
              alt="Car 1"
            />
            <div className="position-absolute d-flex flex-column col-lg-10 col-12 justify-content-center align-items-center">
            <h1 className="carousel-fade animate__animated animate__fadeInDown    col-lg-7 col-10 text-center text-white text-capitalize display-5  fw-bold">
              Helping businesses unlock their true potential with{" "}
              <span className="org  px-2 py-0 rounded-3"> consultancy.</span>
            </h1>
           {/*  */}
           <Link to={"/about"} className="text-decoration-none">
       
            <button className="bookmarkBtn mt-4">
    <span className="IconContainer">
     
      <i className="fa-solid fa-arrow-right icon"></i>
    </span>
    <Link className="text col-8 text-decoration-none" to={"/about"}>More-Info</Link>
    
  </button>
  </Link>
  {/*  */}
          </div>
          </div>
          <div className=" carousel-item animate__fadeIn d-flex justify-content-center align-items-center">
            <img
              className="d-block w-100 position-relative"
              src={car1}
              alt="Car 2"
            />
            <div className="position-absolute d-flex flex-column col-12  justify-content-center align-items-center">

            <h1 className="carousel-fade animate__animated animate__fadeInDown col-12   col-lg-8 text-center text-white text-capitalize display-5 fw-bold">
              Empowering organizations to grow through{" "}
              <span className="org  px-2 py-0 rounded-3">strategic</span>{" "}
              insights and innovative solutions.
            </h1>
            <Link to={"/about"} className="text-decoration-none">

            <button className="bookmarkBtn mt-4">
    <span className="IconContainer">
     
      <i className="fa-solid fa-arrow-right icon"></i>
    </span>
    <Link className="text col-8 text-decoration-none" to={"/about"}>More-Info</Link>
    
  </button>
</Link>
  {/*  */}

            </div>
         
          </div>
          <div className="carousel-item animate__fadeIn d-flex justify-content-center align-items-center">
            <img
              className="d-block w-100 position-relative"
              src={car3}
              alt="Car 3"
            />
            <div className="position-absolute d-flex flex-column col-12 justify-content-center align-items-center">

            <h1 className="carousel-fade animate__animated animate__fadeInDown  col-lg-8 col-11 text-center text-white text-capitalize display-5 fw-bold">
              Guiding leaders toward success with tailored solutions for a{" "}
              <span className="org  px-2 py-0 rounded-3"> brighter</span>{" "}
              future.
            </h1>
            <Link to={"/about"} className="text-decoration-none">
            <button className="bookmarkBtn mt-4">
    <span className="IconContainer">
     
      <i className="fa-solid fa-arrow-right icon"></i>
    </span>
    <Link className="text col-8 text-decoration-none" >More-Info</Link>
    
  </button>
  </Link>
  {/*  */}
            </div>

          </div>
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          {/* <span className="visually-hidden">Next</span> */}
        </button>
      </div>
 {/* HOME SECTION */}
 {/* ABOUT */}
<div className="py-5 container-fluid about d-flex flex-lg-row flex-column justify-content-center align-items-center">
{/* <div className="col-1"></div> */}
  <div className="col-lg-6 px-4 col-12 py-4">
    <span className="text-uppercase px-1 py-2 col-org">About Us</span>
    <h1 className="display-4 fw-normal text-capitalize">
    scalable HR solutions for businesses.
    </h1>
    <p className="col-grey">We provide scalable HR solutions tailored to meet the unique needs of businesses. Our services streamline operations, enhance employee engagement, and drive organizational growth.</p>
    <Link to={"/about"} className="text-decoration-none">
       
            <button className="bookmarkBtn bookmarkBtn1 mt-4">
    <span className="IconContainer">
     
      <i className="fa-solid fa-arrow-right icon"></i>
    </span>
    <Link className="text text1 col-8 text-decoration-none" to={"/about"}>More-Info</Link>
    
  </button>
  </Link>
  </div>

  <div className="col-lg-3 col-12 py-4 ab-img1 me-2  mt-5 mb-lg-0 mb-2"></div>

  <div className="col-lg-3 col-12 py-4 ab-img2">
    
  </div>
</div>
 {/* ABOUT */}
 {/* SERVICE */}

 {/* SERVICE */}
 <div className="container-fluid m-0" id="serv">
  <div className="container-fluid m-0 ">
    <div className="row p-5 d-flex flex-column justify-content-center align-items-center dhru">
      <div className=" text-center" id="serc1">
        <p className="fw-normal">OUR SERVICE AREA</p>
      </div>
      <div className="text-center" id="serc1">
        <h1 className="fw-normal">
          Outsourced Hiring &amp; Job
          <br />
          Rules Services
        </h1>
      </div>
    </div>
    <div className="row dhru  px-4" id="ur">
      <div
        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12"
        id="sercol"
      >
        <div className="sercoll">
          <div className="seri" />
          <div className="serj">
            <i className="fa fa-desktop" aria-hidden="true" id="ope" />
            <h4 id="ope">Executive Search and Selection</h4>
            {/* <p className"text-center">WIGroups offers comprehensive <br>Executive Search and Selection</p> */}
            {/* <i className="fa fa-arrow-right" aria-hidden="true" /> */}
          </div>
        </div>
      </div>
      <div
        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12"
        id="sercol"
      >
        <div className="sercoll">
          <div className="seri" />
          <div className="serj">
            <i className="fa fa-user" aria-hidden="true" id="ope" />
            <h4 id="ope">
              Manpower
             Outsourcing
            </h4>
            {/* <i className="fa fa-arrow-right" aria-hidden="true" /> */}
         
          </div>
        </div>
      </div>
      <div
        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12"
        id="sercol"
      >
        <div className="sercoll">
          <div className="seri" />
          <div className="serj">
            <i className="fa fa-comment uii" aria-hidden="true" id="ope" />
            <h4 id="ope">Executive Search and Selection</h4>
            {/* <i className="fa fa-arrow-right" aria-hidden="true" /> */}
          </div>
        </div>
      </div>
    </div>
    <div className="row dhru px-4 pb-5" id="ur">
      <div
        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12"
        id="sercol"
      >
        <div className="sercoll">
          <div className="seri" />
          <div className="serj">
            <i className="fa-solid fa-image" aria-hidden="true" id="ope" />
            <h4 id="ope">HR / Payroll / etc. Outsourcing</h4>
            {/* <p className"text-center">WIGroups offers comprehensive <br>Executive Search and Selection</p> */}
            {/* <i className="fa fa-arrow-right" aria-hidden="true" /> */}
          </div>
        </div>
      </div>
      <div
        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12"
        id="sercol"
      >
        <div className="sercoll">
          <div className="seri" />
          <div className="serj">
            <i className="fa fa-th" aria-hidden="true" id="ope" />
            <h4 id="ope">Financial and Tax Consultancy</h4>
            {/* <i className="fa fa-arrow-right" aria-hidden="true" /> */}
          </div>
        </div>
      </div>
      <div
        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12"
        id="sercol"
      >
        <div className="sercoll">
          <div className="seri" />
          <div className="serj">
            <i className="fa fa-cog uii" aria-hidden="true" id="ope" />
            <h4 id="ope">Bulk Recruitment (Both National and International)</h4>
            {/* <i className="fa fa-arrow-right" aria-hidden="true" /> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* SERVICE */}
{/* STATS */}
<div className="container my-5 mt-5 pt-4 px-3 px-lg-4 py-2">
     <div className="row d-flex justify-content-center align-items-center">
      <div className="col-lg-9 ">
<h1 className="text-center mb-4">
Empowering <span className="org fw-bold px-2 rounded-3">Workplaces</span> with HR Expertise</h1>
<p className="text-center pb-5 col-grey"> Our HR consultancy services empower businesses to optimize their workforce strategies, fostering a culture of growth and innovation. With tailored solutions, we address unique organizational needs, ensuring compliance and enhancing employee engagement. </p>
      </div>
     </div>
      <div className="container d-flex flex-lg-row gap-lg-4 flex-column justify-content-between">
        {/* Stat 1 */}
        <div className="col-lg-3 col-12 mb-4">
          <div className="d-flex flex-row  card ">
            <img
              src={stats1}
              className="col-lg-4 col-6"
              alt="Satisfied Customers"
            />
            <div className="card-body d-flex flex-column justify-content-center align-items-start">
            <h1 className="card-title fw-bold ft">{stats > 5000?5000: stats }<span className="col-org">+</span> </h1>
             
              <h6 className=" text-start col-grey">Satisfied <br /> Customers</h6>
              
            </div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="col-lg-3 col-12 mb-4">
          <div className="d-flex flex-row  card ">
            <img
              src={stats2}
              className="col-lg-4 col-6"
              alt="Satisfied Customers"
            />
            <div className="card-body d-flex flex-column justify-content-center align-items-start">
            <h1 className="card-title fw-bold ft">{stats > 97?97: stats }<span className="col-org">%</span></h1>

             
              <h6 className="col-grey text-start">Job Placement Ratio
              </h6>
              
            </div>
          </div>
        </div>
        {/* Stat 3 */}
        <div className="col-lg-3 col-12 mb-4">
          <div className="d-flex flex-row  card ">
            <img
              src={stats3}
              className="col-lg-4 col-6"
              alt="Satisfied Customers"
            />
            <div className="card-body d-flex flex-column justify-content-center align-items-start">
            <h1 className="card-title fw-bold ft">{stats > 5000?5000: stats } </h1>

             
              <h6 className="col-grey text-start">Candicate Nationwide</h6>
              
            </div>
          </div>
        </div>
        {/* Stat 4 */}
        <div className="col-lg-3 col-12 mb-4">
          <div className="d-flex flex-row  card ">
            <img
              src={stats4}
              className="col-lg-4 col-6"
              alt="Satisfied Customers"
            />
            <div className="card-body d-flex flex-column text-start justify-content-center align-items-start">
            <h1 className="card-title fw-bold text-start ft">{stats > 4340?4340: stats }<span className="col-org">+</span> </h1>

             
              <h6 className="col-grey text-start">Work <br /> Professional</h6>
              
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
{/* STATS */}
{/* FAQS */}
<div className="container-fluid d-flex px-4 mt-5 pt-5 flex-lg-row flex-column justify-content-center align-items-center">
 <div className="col-lg-6 px-2">
  <p className="org col-lg-4 col-5 mx-lg-0 mx-auto px-3 py-1 rounded-4">Get Some Question</p>
<h1> Together, we can elevate your team and business to their fullest potential.</h1>
{/* ANTD */}
<div className="accordion my-5 m-0 p-0" id="accordionPanelsStayOpenExample">
  <div className="accordion-item m-0 p-0">
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne"
        aria-expanded="true"
        aria-controls="panelsStayOpen-collapseOne"
      >
     What is the typical duration of a consulting engagement?
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseOne"
      className="accordion-collapse collapse"
    >
      <div className="accordion-body">
    <span className="col-grey">
          The consultancy industry is constantly evolving, new trends, technologies, and methodologies emerging regularly. Staying ahead of these changes is crucial for a consultancy firms success.
          </span>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseTwo"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseTwo"
      >
        What types of businesses do you work with?
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseTwo"
      className="accordion-collapse collapse"
    >
      <div className="accordion-body">
     <span className="col-grey">
     The consultancy industry is constantly evolving, new trends, technologies, and methodologies emerging regularly. Staying ahead of these changes is crucial for a consultancy firm’s success.
     </span>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseThree"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseThree"
      >
       How working process is simplified?
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseThree"
      className="accordion-collapse collapse"
    >
      <div className="accordion-body">
      <span className="col-grey">
      The consultancy industry is constantly evolving, new trends, technologies, and methodologies emerging regularly. Staying ahead of these changes is crucial for a consultancy firm’s success.
      </span>
      </div>
    </div>
  </div>
</div>

{/* ANTD */}
 </div>
 <div className="col-lg-6">
<img src={faqs} className="img-fluid"  alt="" srcset="" />
</div> 

</div>
{/* FAQS */}
{/* FOOTER */}

{/* FOOTER */}
</div>
)}
      </> 
  );
}
