import React, { useEffect } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logodark from "../image/logo-light.png"
import { useLocation } from 'react-router';
const Footer = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    
    setActivePath(location.pathname); // Update active path on location change
  }, [location]);
  return (
    <>

{activePath ==="/login" ?(
  <div></div>
):(

    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container-fluid px-4">
        {/* Logo and Copyright */}
        <div className="d-flex flex-lg-row flex-column justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center col-lg-6 col-12">
            <img src={logodark} alt="Emphires"  className="me-lg-2 col-lg-4 col-10 mb-lg-0 mb-2 mx-auto" />
            
          </div>
          <div className="d-flex fle-lg-row flex-column col-lg-5 ms-1 justify-content-end gap-2 mt-lg-0 mt-4">
          <input type="email" id="email" className="col-12 mx-auto px-2 rounded-3 border-0" placeholder=" Enter email address" />
            <button className="btn bg-white col-lg-2">Send</button>
         
            {/* <small>Copyright © 2021 Empires. All Rights Reserved.</small> */}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="d-flex flex-lg-row flex-column  justify-content-between align-items-center mb-3">
          <div className="d-flex mb-lg-0 mb-3">
            {/* <label htmlFor="email" className="me-2">Subscribe Now</label> */}
            <small>Copyright © . All Rights Reserved.</small>
         
            </div>

          {/* Social Icons */}
          <div className="d-flex gap-3">
            <i className="fa-brands fa-facebook-f text-white"></i>
            <i className="fa-brands fa-x text-white"></i>
            <i className="fa-brands fa-linkedin-in text-white"></i>
            <i className="fa-brands fa-instagram text-white"></i>
          </div>
        
        </div>


 
      </div>
    </footer>
   )}
   </>
  );
}

export default Footer;
