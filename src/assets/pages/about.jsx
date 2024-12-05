import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
// IAMGES
import homeimg from "../image/abouthom.png"
import car2 from "../image/car2.png";

// IAMGES
export default function About() {
  return (
    <>
    {/* home */}
    <div className='about-page container-fluid d-flex flex-column justify-content-center align-items-center'>
<h2 className='text-white text-center display-3 fw-normal mx-auto col-5'>ABOUT-US</h2>
  <h5 className='text-white text-center fw-light mt-3 col-7'>Business consultancy enables companies to stay competitive in a rapidly evolving
  digital landscape, ultimately leading to increased efficiency</h5>
    </div>
    {/* home */}

 {/* ABOUT */}
 <div className="py-5 container-fluid about d-flex  flex-column justify-content-center align-items-center">
{/* <div className="col-1"></div> */}
  <div className="col-lg-9 text-center px-4 col-12 py-4">
    <span className="text-uppercase px-1 py-2 col-org">About Us</span>
    <h1 className="display-4 fw-normal text-capitalize">
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
  <div className="col-12 flex-column d-flex justify-content-center align-items-center car-img-2">
    <h1 className='text-white  col-5 text-center'>Have Any Project? Let’s Talk
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
