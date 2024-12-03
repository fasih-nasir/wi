import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import 'animate.css';

// Import Images
import car1 from "../image/car1.png";
import car2 from "../image/car2.png";
import car3 from "../image/car3.png";

export default function Home() {
  return (
 
      <div

        id="carouselExampleFade"
        className="container-fluid m-0 p-0 carousel slide carousel-fade"
        data-bs-ride="carousel"
      data-bs-interval="3500" // This will change the image every 2 seconds
      >
        <div className="carousel-inner m-0 p-0">
          <div className="carousel-item active d-flex flex-column justify-content-center align-items-center">
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
     
      <i class="fa-solid fa-arrow-right icon"></i>
    </span>
    <Link className="text col-8 text-decoration-none" to={"/about"}>More-Info</Link>
    
  </button>
  </Link>
  {/*  */}
          </div>
          </div>
          <div className=" carousel-item d-flex justify-content-center align-items-center">
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
     
      <i class="fa-solid fa-arrow-right icon"></i>
    </span>
    <Link className="text col-8 text-decoration-none" to={"/about"}>More-Info</Link>
    
  </button>
</Link>
  {/*  */}

            </div>
         
          </div>
          <div className="carousel-item d-flex justify-content-center align-items-center">
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
     
      <i class="fa-solid fa-arrow-right icon"></i>
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
    
  );
}
