import React from 'react'
import '../../App.css'
import { useState } from 'react';
import { Button, message } from 'antd';
// FIREBASE
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getFirestore,collection, addDoc} from "firebase/firestore"; 
// import { db } from "./firebaseConfig";
// FIREBASE

export default function Contact() {
  // FIREBASE
  // Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyAT4O_2PErTh_f7EAttbx5TI4kWtPShC6s",
  authDomain: "wihr-consultant.firebaseapp.com",
  projectId: "wihr-consultant",
  storageBucket: "wihr-consultant.firebasestorage.app",
  messagingSenderId: "92117150651",
  appId: "1:92117150651:web:54f7b70d1cc373f556f29e",
  measurementId: "G-HN017L14LW"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
  // FIREBASE
  // msg
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      // className:"",
      type: 'success',
      content: 'Your message has been successfully forwarded to the admin. Thank you for reaching out!',
      duration: 5,
  //  top:50,
    });
  };
  // contact form
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
  
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
  
    try {
      // Add data to Firestore collection "contact-us"
      const docRef = await addDoc(collection(db, "contact-us"), formObject);
   
  
      // Send email using Web3Forms
      formData.append("access_key", "d92bdf8f-5c6e-41f8-8b11-8b305e40cbf1");  // Replace with your key
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form submitted successfully!");
        event.target.reset(); // Reset the form
        success()
      } else {
        setResult("Failed to send email. Please try again.");
      }
  
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit form. Please try again.");
    }
  };
  
  // contact form
  return (
    <div>
      {contextHolder}
      {/* <Button onClick={success}>Customized display duration</Button> */}
   
{/* home */}
<div className='container-fluid d-flex justify-content-center align-items-center flex-column cont-page'>
    <h2 className='text-white text-center display-3 fw-normal mx-auto col-5'>Contact-US</h2>
    <span className='text-white'>Feel Free To Contact Our Support</span>
    </div>
{/* home */}
      {/* FORM */}
      <div className="container-fluid org p-4 my-5">
      <div className="row g-4">
        {/* Email Address */}
        <div className="col-md-4">
          <div className="card border-0 shadow">
            <div className="card-body text-center">
              <div className="mb-3 d-flex justify-content-center align-items-center">
                <div
                  className="col-1 px-4 py-3 rounded-circle org d-flex align-items-center justify-content-center"
                  // style={{ width: '60px', height: '60px' }}
                >
               <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
              </div>
              <h5 className="card-title fw-bold">Email Address</h5>
              <p className="card-text mb-1 col-grey">info@yourmail.com</p>
              <p className="card-text col-grey">email@example.com</p>
            </div>
          </div>
        </div>

        {/* Our Address */}
        <div className="col-md-4">
          <div className="card border-0 shadow">
            <div className="card-body text-center">
              <div className="mb-3 d-flex justify-content-center align-items-center">
                <div
                  className="col-1 px-4 py-3 rounded-circle org d-flex align-items-center justify-content-center"
                  // style={{ width: '60px', height: '60px' }}
                >
          <i className="fa-solid fa-location-dot"></i>
                </div>
              </div>
              <h5 className="card-title fw-bold">Our Address</h5>
            <a 
            href="https://www.google.com/maps?q=76-C+Second+Floor+11th+Commercial+Street+%232+Ext+DHA,+Opp.+Bank+of+Khyber+Karachi,+Pakistan"
            target="_blank"
           className='text-decoration-none col-grey'
           rel="noopener noreferrer">
              <p className="card-text mb-1">
              76-C Second Floor 11th Commercial Street#2  Opp. Bank of Khyber Karachi, Pakistan
              </p>
              </a>
              {/* <p className="card-text">Brooklyn, New York 11206</p> */}
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="col-md-4">
          <div className="card border-0 shadow">
            <div className="card-body text-center">
              <div className="mb-3 d-flex justify-content-center align-items-center">
                <div
                  className="col-1 px-4 py-3 rounded-circle org d-flex align-items-center justify-content-center"
                  // style={{ width: '60px', height: '60px' }}
                >
       <i class="fa-solid fa-clock"></i>
                </div>
              </div>
              <h5 className="card-title fw-bold">Hours</h5>
              <p className="card-text mb-1 col-grey">Mon - Fri: 9am - 5pm</p>
              <p className="card-text col-grey">Sat - Sun: closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* FORM */}
      {/* contact form */}
      <section className="container py-5">
  <div className="row d-flex justify-content-center align-items-center bg-white shadow-sm px-2 py-5">
    {/* Left Column */}
    <div className="col-md-6  d-flex justify-content-center  flex-column">
      <h6 className=" col-org">MESSAGE US</h6>
      <h1 className="display-5 fw-medium">Have be any Question?
      feel free to contact with us.</h1>
      <p className="mt-3 col-grey">
      Business consultancy enables companies to stay competitive in a rapidly evolving
      digital landscape, ultimately leading to increased efficiency</p>
    <div className='mt-2 pt-2'>
    <a target='_blank' href="https://www.facebook.com/WiHrConsultant?__tn__=-UC*F" className='org px-3 py-3 rounded-1 me-2'>
    <i class="fa-brands fa-square-facebook"></i>
    </a>
    <a target='_blank' href="https://www.instagram.com/wihrconsultant.official/#" className='org px-3 py-3 rounded-1 me-2'>
    <i class="fa-brands fa-square-instagram"></i>
    </a>
    <a target='_blank' href="https://www.linkedin.com/company/wi-hr-consultant/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BoAGacfPqR7anMlyAIOqPTw%3D%3D" className='org px-3 py-3 rounded-1 me-2'>
    <i class="fa-brands fa-linkedin"></i>
    </a>
    </div>
    </div>
    {/* Right Column (Contact Form) */}
    <div className="col-md-6 org1 rounded-4  d-flex justify-content-center align-items-center mx-auto">
      <form onSubmit={onSubmit}> 
        <div className="col-12 d-flex  gap-5">
        {/* Name */}
        <div className="mb-3 col-5 ">
          <input
            type="text"
            className=" p-3 col-12"
            id="name"
            placeholder="First name "
            name='First Name'
       
       />
        </div>
        {/* Email */}
        <div className=" mb-3 col-5">
          <input
            type="email"
            className="p-3 col-12 "
            id="email"
            name='Last Name'
  
            placeholder="Last name"
          />
     
        </div>
       
        </div>
        {/* Phone Number */}
        <div className="mb-3  col-12">
         
          <input
            type="text"
            name='Email'
            className="col-11 p-3"
            id="phone"

            placeholder="your email"
          />
        </div>
        {/* Training Tips */}
        <div className="mb-3 col-12">
          <input
            type="text"
            className=" p-3 col-11"
            id="training"
            name='Number'

            placeholder="Your Phone Number"
          />
           <input
            type="hidden"
            className=" p-3 col-11"
            id="training"
            name='Time'
            value={new Date()}
            placeholder="Date"
          />
        </div>
        <div className="mb-3 col-12">
     
      
        </div>
        {/* Message */}
        <div className="mb-3 col-12">
          <textarea
            className="col-11 p-3"
            id="message"
            rows={4}
       name='Message'
            placeholder="Write your message"
            defaultValue={""}
          />
       
        </div>
        {/* Send Message Button */}
        <div className="col-12 d-flex justify-content-center align-items-center">
        <button type="submit" className="org  col-4 border-0 p-2 rounded-5">
          Send Message
        </button>
        </div>
      </form>
    </div>
  </div>
</section>

      {/* contact form */}
    {/* MAP */}
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.161324144696!2d67.06021850979997!3d24.824156077860998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c44f5486e13%3A0xf63188f8ed71d285!2sWI-HR%20Consultants!5e0!3m2!1sen!2s!4v1733431590067!5m2!1sen!2s"
  // width={600}
className='container-fluid m-0 p-0'
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

{/* MAP */}
    </div>
  )
}
