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

    <footer className="bg-dark text-light py-4">
      <div className="container-fluid px-4">
        {/* Logo and Copyright */}
        <div className="d-flex flex-row justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center col-6">
            <img src={logodark} alt="Emphires"  className="me-2 col-4" />
            
          </div>
          <div className="d-flex flex-row col-6 justify-content-end gap-2">
          <input type="email" id="email" className="col-6 px-2 rounded-3 border-0" placeholder=" Enter email address" />
            <button className="btn bg-white col-2">Send</button>
         
            {/* <small>Copyright © 2021 Empires. All Rights Reserved.</small> */}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex">
            {/* <label htmlFor="email" className="me-2">Subscribe Now</label> */}
            <small>Copyright © codesigency.com . All Rights Reserved.</small>
         
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
