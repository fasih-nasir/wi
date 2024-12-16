import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDocs, getFirestore, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Select } from "antd";

const { Option } = Select;

export default function Jobs() {
  const firebaseConfig = {
    apiKey: "AIzaSyAT4O_2PErTh_f7EAttbx5TI4kWtPShC6s",
    authDomain: "wihr-consultant.firebaseapp.com",
    projectId: "wihr-consultant",
    storageBucket: "wihr-consultant.firebasestorage.app",
    messagingSenderId: "92117150651",
    appId: "1:92117150651:web:54f7b70d1cc373f556f29e",
    measurementId: "G-HN017L14LW",
  };

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
var [field1,setfield1]=useState("")
  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const jobsArray = [];
        querySnapshot.forEach((doc) => {
          // console.log(doc.id)
          jobsArray.push(doc);
        });
        setData(jobsArray);
        setFilteredData(jobsArray)
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  const handleFilterChange = (value, field) => {

setfield1(value)
    if (value === "All" ){

      setFilteredData(data)
      return
    };
    const filtered = data.filter((e) => {
    // console.log(e.data());
    
      if (field === "cat" && e.data().cat === value) return true;
      if (field === "jobRegion" && e.data().jobRegion === value) return true;
      if (field === "type" && e.data().type === value) return true;
      return false;
    });
  

    setFilteredData(filtered);
  };

  return (
    <>
   <div className="container-fluid jobcont d-flex position-relative flex-column  justify-content-center align-items-center">
  <h1 className="text-white text-capitalize display-4 fw-medium text-center ">get the right job <br />you deserve </h1>
  <div className="col-1">
        <Link to={"/post"}>
          <button className="bg-transparent border-0 opacity-0" >Post A Job</button>
        </Link>
      </div>
   <div className="container-fluid px-lg-5 d-flex  py-4 justify-content-center align-items-center">
        <div className="d-flex  divf flex-lg-row flex-column col-12 p-lg-4 py-2 px-2  gap-3 bg-white  justify-content-around jbdi  " style={{ fontFamily: "Outfit" }}>
          {/* Job Category */}
          <div className="col-lg-4 col-12  ">
            <Select
              placeholder="Select job category"
              className="custom-select col-11"

              onChange={(value) => handleFilterChange(value, "cat")}
            >
           <Option value="All"  >All</Option>

           <Option value="Web Development">Web Development</Option>
  <Option value="App Development">App Development</Option>
  <Option value="Software Development">Software Development</Option>
  <Option value="Data Science">Data Science</Option>
  <Option value="Machine Learning">Machine Learning</Option>
  <Option value="Artificial Intelligence">Artificial Intelligence</Option>
  <Option value="Cybersecurity">Cybersecurity</Option>
  <Option value="Cloud Computing">Cloud Computing</Option>
  <Option value="UI/UX Design">UI/UX Design</Option>
  <Option value="Graphic Design">Graphic Design</Option>
  <Option value="IT">IT</Option>
  <Option value="DevOps">DevOps</Option>
  <Option value="Game Development">Game Development</Option>
  <Option value="Database Administration">Database Administration</Option>
  <Option value="Network Engineering">Network Engineering</Option>
  <Option value="System Administration">System Administration</Option>
  <Option value="Blockchain Development">Blockchain Development</Option>
  <Option value="Quality Assurance">Quality Assurance</Option>
  <Option value="Full Stack Development">Full Stack Development</Option>
  <Option value="Front End Development">Front End Development</Option>
  <Option value="Back End Development">Back End Development</Option>

  {/* Design Fields */}
  <Option value="Graphic Design">Graphic Design</Option>
  <Option value="Product Design">Product Design</Option>
  <Option value="Interior Design">Interior Design</Option>
  <Option value="Fashion Design">Fashion Design</Option>
  <Option value="Animation">Animation</Option>
  <Option value="Video Editing">Video Editing</Option>
  <Option value="Motion Graphics">Motion Graphics</Option>

  {/* Medical Fields */}
  <Option value="Medical">Medical</Option>
  <Option value="Nursing">Nursing</Option>
  <Option value="Pharmacy">Pharmacy</Option>
  <Option value="Healthcare Management">Healthcare Management</Option>
  <Option value="Dentistry">Dentistry</Option>
  <Option value="Physiotherapy">Physiotherapy</Option>
  <Option value="Radiology">Radiology</Option>

  {/* Corporate Fields */}
  <Option value="Corporate">Corporate</Option>
  <Option value="Human Resources">Human Resources</Option>
  <Option value="Finance">Finance</Option>
  <Option value="Accounting">Accounting</Option>
  <Option value="Sales">Sales</Option>
  <Option value="Marketing">Marketing</Option>
  <Option value="Business Development">Business Development</Option>
  <Option value="Project Management">Project Management</Option>
  <Option value="Entrepreneurship">Entrepreneurship</Option>

  {/* Engineering Fields */}
  <Option value="Mechanical Engineering">Mechanical Engineering</Option>
  <Option value="Electrical Engineering">Electrical Engineering</Option>
  <Option value="Civil Engineering">Civil Engineering</Option>
  <Option value="Chemical Engineering">Chemical Engineering</Option>
  <Option value="Electronics Engineering">Electronics Engineering</Option>

  {/* Miscellaneous */}
  <Option value="Teaching">Teaching</Option>
  <Option value="Content Writing">Content Writing</Option>
  <Option value="Journalism">Journalism</Option>
  <Option value="Legal Services">Legal Services</Option>
  <Option value="Customer Service">Customer Service</Option>
  <Option value="Hospitality">Hospitality</Option>
  <Option value="Event Management">Event Management</Option>
            
            </Select>
          </div>

          {/* Experience */}
          <div className="col-lg-4 col-12 ">
            <Select
              placeholder="Location"
              className="custom-select col-11"

              onChange={(value) => handleFilterChange(value, "jobRegion")}
            >
           <Option value="All">All</Option>

           <Option value="inter">International</Option>
              <Option value="karachi">Karachi</Option>
  <Option value="lahore">Lahore</Option>
  <Option value="quetta">Quetta</Option>
  <Option value="peshawar">Peshawar</Option>
  <Option value="gilgit">Gilgit</Option> 
  
  {/* Other Cities */}
  <Option value="rawalpindi">Rawalpindi</Option>
  <Option value="faisalabad">Faisalabad</Option>
  <Option value="multan">Multan</Option>
  <Option value="hyderabad">Hyderabad</Option>
  <Option value="sialkot">Sialkot</Option>
  <Option value="gujranwala">Gujranwala</Option>
  <Option value="bahawalpur">Bahawalpur</Option>
  <Option value="sukkur">Sukkur</Option>
  <Option value="larkana">Larkana</Option>
  <Option value="abbottabad">Abbottabad</Option>
  <Option value="rahimyar-khan">Rahim Yar Khan</Option>
  <Option value="sahiwal">Sahiwal</Option>
  <Option value="gujrat">Gujrat</Option>
  <Option value="mirpur">Mirpur</Option>
  <Option value="muzaffarabad">Muzaffarabad</Option>
  <Option value="nawabshah">Nawabshah</Option>
  <Option value="dera-ghazi-khan">Dera Ghazi Khan</Option>
  <Option value="mardan">Mardan</Option>
  <Option value="swat">Swat</Option>
  <Option value="kasur">Kasur</Option>
  <Option value="mansehra">Mansehra</Option>
  <Option value="jhang">Jhang</Option>
  <Option value="sheikhupura">Sheikhupura</Option>
  <Option value="kohat">Kohat</Option>
  <Option value="dera-ismail-khan">Dera Ismail Khan</Option>
  <Option value="khuzdar">Khuzdar</Option>
  <Option value="chitral">Chitral</Option>
  <Option value="gwadar">Gwadar</Option>
  <Option value="hangu">Hangu</Option>
  <Option value="khanewal">Khanewal</Option>
  <Option value="havelian">Havelian</Option>
  <Option value="chakwal">Chakwal</Option>
  <Option value="bannu">Bannu</Option>
  <Option value="daska">Daska</Option>
  <Option value="shikarpur">Shikarpur</Option>
  <Option value="turbat">Turbat</Option>

            </Select>
          </div>

          {/* Job Type */}
          <div className="col-lg-4 col-12 ">
            <Select
              placeholder="Select job type"
             className="custom-select col-11"
              onChange={(value) => handleFilterChange(value, "type")}
            >
           <Option value="All">All</Option>

              <Option value="remote">Remote</Option>
              <Option value="hybrid">Hybrid</Option>
              <Option value="onsite">Onsite</Option>
            </Select>
          </div>
        </div>
      </div>
   </div>
      

      {/* Filter */}
      {/* Job Cards */}
      <div className="container col-12 mt-5 pt-5  mx-auto d-flex flex-wrap ">
        <div className="col-12 d-flex flex-wrap justify-content-center ">
      
        {filteredData.length > 0 ? (
  filteredData.map((job, index) => (
    // start 
<div  className="col-lg-4 col-11  jobcard  my-2 " key={index} >

  <div
    className="card text-center shadow-lg  jobcard  px-1 py-3"

  > <div className="d-flex justify-content-between px-2 mb-2">

  <span className="badge org text-uppercase hr">{job.data().type}</span>
</div>

    {/* Icon */}
    <div className="text-center mb-3 ">
      <i
        className="fa-solid fa-briefcase org p-3 fb1 rounded-5"
  
      />
    </div>
    {/* Employer */}
    <h6 className="col-grey hr">  {job.data()?.a && Array.isArray(job.data().a) ? (
      <>
        <span>{job.data().a[0]}</span>
        <span> - {job.data().a[1]}</span>
        <span> - {job.data().a[2]}</span>
      </>
    ) : (
      <span>Loading...</span>
    )}</h6>
    {/* Job Title */}
    <h5 className=" col-grey hr text-truncate px-2">{job.data().jobTitle}</h5>
    {/* Location */}
    <div className="d-flex justify-content-center align-items-center">
      <i className="fa-solid fa-location-dot col-grey hr  px-2" />
      <span className="text-capitalize col-grey hr">{job.data().jobRegion}</span>
    </div>
    <Link to={`/job-detail/${job.id}`} target="_blank" className="text-white text-decoration-none" >
    <button className="col-4 mx-auto mt-3 border-0 org py-2 rounded-5 " >
        More-Info
        </button>
        </Link>
  </div>
</div>
    // end

  ))
) : (
  <div className="col-lg-12 text-center d-flex flex-column justify-content-center h-0 align-items-center">
 <div class="spinner mb-5">
  <div></div>   
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
</div>
{/* <span>{field1}</span> */}
    <h2 className="mt-5 pt-5 text-capitalize">{field1}Job Is Not Available Now</h2>
  </div>
)}
<div>
  
</div>
        </div>
      </div>
    </>
  );
}
