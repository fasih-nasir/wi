import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { doc, getDocs,getFirestore,collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {  message,Form, Input ,Select, Button } from "antd";
const { Option } = Select;
const {TextArea}=Input;
export default function   Jobs () {
  const firebaseConfig = {
    apiKey: "AIzaSyAT4O_2PErTh_f7EAttbx5TI4kWtPShC6s",
    authDomain: "wihr-consultant.firebaseapp.com",
  projectId: "wihr-consultant",
  storageBucket: "wihr-consultant.firebasestorage.app",
  messagingSenderId: "92117150651",
  appId: "1:92117150651:web:54f7b70d1cc373f556f29e",
  measurementId: "G-HN017L14LW"
};


const [data,setdata]=useState([])
const [value1,setvalue1]=useState()
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
useEffect(() => {
  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "jobs"));
      const jobsArray = []; 
      querySnapshot.forEach((doc) => {
        jobsArray.push(doc.data())
        setdata(jobsArray);
        // console.log(data)
         
      });
      // setdata(jobsArray); 
    } catch (err) {
      console.log(err);
    }
  };

  getData();
}, []);
const [form] = Form.useForm();
const onFinish =async (values) => {
 data.forEach(element => {
  
 });
  console.log(values);
  
}
  return (

   <>

   <div>
        <Link to={"/postjob"}>
      <button>Post A Job</button>
      </Link>


    </div>
   {/* filter */}
<div className="containe-fluid px-5 d-flex org py-4 justify-content-center align-items-center">
   <Form layout="vertical" className="form d-flex flex-row col-12" style={{fontFamily:"Outfit"}} onFinish={onFinish}>

  <div className="col-3">
  <Form.Item
  className='text-white'
  label="Job Category"
  name="jobCategory"
  
  rules={[{ required: true, message: "Please select the job category!" }]}
  
>
  <Select placeholder="Select job category">
    <Option value="Medical">Medical</Option>
    <Option value="Corporate">Corporate</Option>
    <Option value="IT">IT</Option>
    <Option value="Banking">Banking</Option>
    <Option value="Education">Education</Option>
    <Option value="Construction">Construction</Option>
    <Option value="Engineering">Engineering</Option>
    <Option value="Healthcare">Healthcare</Option>
    <Option value="Finance">Finance</Option>
    <Option value="Hospitality">Hospitality</Option>
    <Option value="Legal">Legal</Option>
    <Option value="Marketing">Marketing</Option>
    <Option value="Sales">Sales</Option>
    <Option value="Transportation">Transportation</Option>
    <Option value="Telecommunication">Telecommunication</Option>
    <Option value="Retail">Retail</Option>
    <Option value="Agriculture">Agriculture</Option>
    <Option value="Aerospace">Aerospace</Option>
    <Option value="Energy">Energy</Option>
    <Option value="Real Estate">Real Estate</Option>
    <Option value="Manufacturing">Manufacturing</Option>
    <Option value="Automotive">Automotive</Option>
    <Option value="Insurance">Insurance</Option>
    <Option value="Entertainment">Entertainment</Option>
    <Option value="Media">Media</Option>
    <Option value="Public Services">Public Services</Option>
    <Option value="Technology">Technology</Option>
    <Option value="E-commerce">E-commerce</Option>
    <Option value="Pharmaceutical">Pharmaceutical</Option>
    <Option value="Consulting">Consulting</Option>
  </Select>
</Form.Item>
  </div>
  <div className="col-3">
  <Form.Item
          label="Experience"
          name="experience"
          rules={[{ required: true, message: "Please select experience!" }]}
        >
          <Select placeholder="Select experience">
            <Option value="6months">6 Months</Option>
            <Option value="1year">1 Year</Option>
            <Option value="2years">2 Years</Option>
            <Option value="3years">3 Years</Option>
            <Option value="4years">4 Years</Option>
            <Option value="5years">5 Years</Option>
          </Select>
        </Form.Item>
  </div>
  <div className="col-3">
  <Form.Item
          label="Job Type"
          name="jobType"
          rules={[{ required: true, message: "Please select the job type!" }]}
        >
          <Select placeholder="Select job type">
            <Option value="remote">Remote</Option>
            <Option value="hybrid">Hybrid</Option>
            <Option value="onsite">Onsite</Option>
          </Select>
        </Form.Item>

  </div>
  <div className="col-3">
  <Form.Item className="col-3 mx-auto fw-bolder text-uppercase">
          <Button  className="col-2 mx-auto org text-white" htmlType="submit" block>
            Post Job
          </Button>
        </Form.Item>
  </div>
</Form>
</div>
   {/* filter */}

   {/*  */}
    <div className="container col-12  p-0 mx-auto  d-flex flex-wrap ">
<div className="col-12 d-flex flex-wrap justify-content-between">
{
  data.map((e,index)=>(
    <div className=" col-lg-4 jobcard" key={index}>
        <div className="border p-2 rounded shadow-sm">
          <div
            className="d-flex align-items-center rounded-circle col-org"
            
          >
            <div className='bg-white shadow px-2 py-1 rounded-5'>
            <i className="fa-solid fa-briefcase"></i>
            </div>
            <h4 className='pt-2 px-2 '>{e.jobTitle}</h4>
          </div>
          <h5 className="fw-bold">{e.JobTitle}</h5>
          <p className="">
            Fingerstache flexitarian street art 8-bit waist co, subway tile poke
            farm.
          </p>
        </div>
      </div>
  ))
}
</div>
    </div>
{/*  */}


    </>
  )
}
