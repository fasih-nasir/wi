import React from 'react'
import car3 from "../image/Untitled6.png";
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination ,Autoplay} from 'swiper/modules';
// swiper
export default function Service() {
  return (
    <>
    <div className='container-fluid d-flex justify-content-center align-items-center flex-column ser-page'>
    <h2 className='text-white text-center display-3 fw-normal mx-auto col-5'>Our-Service</h2>
    <span className='text-white'>About Our Service_</span>
    </div>
 
     {/* SERVICE */}
 <div className="container-fluid m-0" id="serv">
 <div className="container-fluid m-0 ">
   <div className="row py-5 mt-2 d-flex flex-column justify-content-center align-items-center  ">

     <div className="text-center" id="serc1">
       <h1 className="fw-normal">
       Outsourced Talent Acquisition <br /> & Policy Management
       </h1>
       <p></p>
     </div>
     <div className="col-12 d-flex flex-lg-row flex-column m-0 px-4 py-5 justify-content-between">
      <div className="col-lg-6">
       <p className="fw-normal h5 org col-lg-5 col-5 mx-lg-0 mx-auto  px-2 py-2 rounded-5">What We Offer <i className=" rounded-5 fa-solid fa-angle-right"></i><i className="fa-solid fa-angle-right"></i></p>

      </div>
      <div className="col-lg-5">
    <p className='col-grey text-capitalize text-end'>
    Our services ensure seamless recruitment by leveraging external expertise to find the best talent for your organization. We streamline the hiring process while maintaining compliance with employment policies and regulations

    </p>
      {/* Our services ensure seamless recruitment by leveraging external expertise to find the best talent for your organization. We streamline the hiring process while maintaining compliance with employment policies and regulations */}
      </div>
     </div>
   
   </div>


 </div>
</div>
{/* SERVICE */}
    {/* swiper */}
    <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3000, // Timer in milliseconds
    disableOnInteraction: false, // Keeps autoplay running after interaction
  }}
  modules={[EffectCoverflow, Pagination, Autoplay]} // Add Autoplay here
  className="mySwiper"
>
  <SwiperSlide>
    <div className="sercoll">
      <div className="seri" />
      <div className="serj">
        <i className="fa fa-desktop" aria-hidden="true" id="ope" />
        <h4 id="ope">Executive Search and Selection</h4>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="sercoll">
      <div className="seri" />
      <div className="serj">
        <i className="fa fa-user" aria-hidden="true" id="ope" />
        <h4 id="ope">Manpower Outsourcing</h4>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="sercoll">
      <div className="seri" />
      <div className="serj">
        <i className="fa fa-comment uii" aria-hidden="true" id="ope" />
        <h4 id="ope">Executive Search and Selection</h4>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="sercoll">
      <div className="seri" />
      <div className="serj">
        <i className="fa-solid fa-image" aria-hidden="true" id="ope" />
        <h4 id="ope">HR / Payroll / etc. Outsourcing</h4>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="sercoll">
      <div className="seri" />
      <div className="serj">
        <i className="fa fa-th" aria-hidden="true" id="ope" />
        <h4 id="ope">Financial and Tax Consultancy</h4>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="sercoll">
      <div className="seri" />
      <div className="serj">
        <i className="fa fa-cog uii" aria-hidden="true" id="ope" />
        <h4 id="ope">Bulk Recruitment (Both National and International)</h4>
      </div>
    </div>
  </SwiperSlide>
</Swiper>
    {/* swiper */}

{/* WHYS US  */}
<div className="container d-flex flex-column   px-4 pt-4 my-5">
  {/* <div className="row "> */}
    <div className="container col-12 d-flex flex-column  justify-content-center  m-0 p-0">
      <h2 className='col-12 mx-auto text-center '>Why choose Emphires services?</h2>
     {/* <div className="col-1"></div> */}
      <p className='col-12 mx-auto text-center'>
        Our consultants believe in the value that you manage your regulatory
        compliance, policies, and procedures. We have specialists for managed
        employee performance, comparable to internal HR function. Train people
        quickly well with e-business. So they highly efficient manufactured
        products. We feel that this special function is part of HR; its piece of
        the success business.
      
      </p>
    </div>
  {/* </div> */}
  <div className="row px-2 py-4 align-items-center">
    <div className="col-md-6">
      <ul className="list-unstyled">
        <li className="mb-3">
          <i className="fa-solid fa-check-circle col-org" /> Experienced
          Emphires employees
        </li>
        <li className="mb-3">
          <i className="fa-solid fa-check-circle col-org" /> Easy way to
          train employees
        </li>
        <li className="mb-3">
          <i className="fa-solid fa-check-circle col-org" /> Our employees
          are professional
        </li>
        <li className="mb-3">
          <i className="fa-solid fa-check-circle col-org" /> We have great
          support marketing
        </li>
        <li className="mb-3">
          <i className="fa-solid fa-check-circle col-org" /> They choose us
          because we believe in them
        </li>
        <li>
          <i className="fa-solid fa-check-circle col-org" /> We believe in
          the value of business
        </li>
      </ul>
    </div>
    <div className="col-md-6">
      <img
        src="https://emphires-demo.pbminfotech.com/demo7/wp-content/uploads/sites/20/2019/05/servicesingle.jpg"
        alt="Team discussion"
        className="img-fluid rounded"
      />
    </div>
  </div>
  
</div>

{/* WHYS US */}

    </>
  )
}
