import  { useState } from "react";
import {  message,Form, Input ,Select, Button } from "antd";
const { Option } = Select;
const {TextArea}=Input;

import {  onAuthStateChanged ,signOut} from "firebase/auth";
// FIREBASE
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router';

import { getFirestore,collection, addDoc} from "firebase/firestore"; 
// import { db } from "./firebaseConfig";
// FIREBASE
const PostJob = () => {

// LOGOUT
// LOGUT
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const success = () => {
    messageApi.open({
 
      type: 'success',
      content: 'Job Post Successfull',
      duration: 5,
 
    });
  };



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

  // not sign
  var nav=useNavigate()
onAuthStateChanged(auth, (user) => {
  if (user) {
    // console.log(user);
 
    const uid = user.uid;
    // ...
  } else {
nav("/login") 
    // User is signed out
    // ...
  }
});
  // not sign
// LOGUT
const log=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
// LOGUT
// FIREBASE
    // msg
    // console.log(new Date().getMinutes()) ;
    
    var a=[new Date().getFullYear() , new Date().getDate(),new Date().getMonth()+1]

   
    
    const onFinish =async (values) => {
     
      // console.log("Form Values:", values);
    try{
      const dataToSubmit = {
        ...values,
        a,
        // currentTime: new Date().toISOString(), // Use ISO format for date compatibility
      };
  
      const docRef = await addDoc(collection(db, "jobs"),dataToSubmit)
      success();
     setTimeout(() => {
      location.reload()
     }, 1500);
      // form.resetFields();
    }
    catch(e){
      alert(e)
    }
    }
  

 
    
  
  return (
    <>   
    <div className="container-fluid d-flex flex-column postjobbg d-flex justify-content-center align-items-center">
<h1 className="text-white fw-normal">POST A JOB </h1>
<p className="text-white fw-normal text-capitalize">Note Just only admin can post a job or delete a job </p>
   <button onClick={log}>LogOut</button>
    </div>
     <div className="col-lg-6  mx-auto py-5">
   
      <Form layout="vertical" className="form col-12" style={{fontFamily:"Outfit"}} onFinish={onFinish}>
        {/* Job Title */}
        <Form.Item
          label="Job Title"
          name="jobTitle"
          rules={[{ required: true, message: "Please enter the job title!" }]}
        >
          <Input placeholder="Enter job title" />
        </Form.Item>
{/* JOBS DESC */}
<Form.Item

label="Job Description"
name="Job-Description"
    rules={[{ required: true, message: "Please enter the job Desc!" }]}
><TextArea
        placeholder="Controlled autosize"
        
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
</Form.Item>

{/* JOBS DESC */}

{/* JOBS BENEFIT */}
<Form.Item

label="Job Benefit"
name="Job-Benefit"
    rules={[{ required: true, message: "Please enter the job Benefit!" }]}
><TextArea
        placeholder="Benefit"
        
        autoSize={{ minRows: 2, maxRows: 5 }}
      />
</Form.Item>
{/* JOBS BENEFIT */}
{/* JOBS SKILLS */}
<Form.Item

label="Job Skill"
name="Job-Skill"
    rules={[{ required: true, message: "Please enter the job Skill" }]}
><TextArea
        placeholder="Skill"
        
        autoSize={{ minRows: 2, maxRows: 5 }}
      />
</Form.Item>
{/* JOBS SKILLS */}
{/* RESPONSIBLITY */}
<Form.Item

label="Job Responsiblity"
name="Job-Responsiblity"
    rules={[{ required: true, message: "Please enter the Job-Responsiblity!" }]}
><TextArea
        placeholder="Job-Responsiblity"
        
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
</Form.Item>

{/* RESPONSIBLITY */}
{/* Qualification */}
<Form.Item

label="Job Qualifications"
name="Job-Qualifications"
    rules={[{ required: true, message: "Please enter the Qualifications!" }]}
><TextArea
        placeholder="Job-Qualifications"
        
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
</Form.Item>
{/* Qualification */}



        {/* Job Type */}
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

        {/* Job Region */}
        <Form.Item
          label="Job Region"
          name="jobRegion"
          rules={[{ required: true, message: "Please select the job region!" }]}
        >
         <Select placeholder="Select job region">
    <Option value="karachi">Karachi</Option>
    <Option value="lahore">Lahore</Option>
    <Option value="islamabad">Islamabad</Option>
    <Option value="peshawar">Peshawar</Option>
    <Option value="quetta">Quetta</Option>
    <Option value="faisalabad">Faisalabad</Option>
    <Option value="rawalpindi">Rawalpindi</Option>
    <Option value="multan">Multan</Option>
    <Option value="sialkot">Sialkot</Option>
    <Option value="hyderabad">Hyderabad</Option>
    <Option value="abbottabad">Abbottabad</Option>
    <Option value="sukkur">Sukkur</Option>
    <Option value="mardan">Mardan</Option>
    <Option value="gwadar">Gwadar</Option>
    <Option value="gilgit">Gilgit</Option>
    <Option value="skardu">Skardu</Option>
    <Option value="swat">Swat</Option>
    <Option value="mirpur">Mirpur</Option>
    <Option value="bahawalpur">Bahawalpur</Option>
    <Option value="dera-ghazi-khan">Dera Ghazi Khan</Option>
  </Select>

        </Form.Item>

  
{/* JOB CATEOGERY */}
<Form.Item
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

{/* JOB CATEOGERY  */}
        {/* Experience */}
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

        {/* Submit Button */}
        <Form.Item className="col-3 mx-auto fw-bolder text-uppercase">
          <Button  className="col-2 mx-auto org text-white" htmlType="submit" block>
            Post Job
          </Button>
        </Form.Item>
      </Form>
    </div>
    {contextHolder}
    </>

  );
};

export default PostJob;
