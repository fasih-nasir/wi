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
  // const [filters, setFilters] = useState({
  //   jobCategory: null,
  //   experience: null,
  //   jobType: null,
  // });

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const jobsArray = [];
        querySnapshot.forEach((doc) => {
          jobsArray.push(doc.data());
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


    if (value === "All" ){
console.log(data);

      setFilteredData(data)
      return
    };
    const filtered = data.filter((e) => {
    
      if (field === "cat" && e.cat === value) return true;
      if (field === "experience" && e.experience === value) return true;
      if (field === "type" && e.type === value) return true;
      return false;
    });
  

    setFilteredData(filtered);
  };

  return (
    <>
   <div className="container-fluid jobcont d-flex flex-column  justify-content-center align-items-center">
  <h1 className="text-white">Available Jobs</h1>
   <div className="container-fluid px-5 d-flex  py-4 justify-content-center align-items-center">
        <div className="d-flex flex-row col-12 gap-3 justify-content-around" style={{ fontFamily: "Outfit" }}>
          {/* Job Category */}
          <div className="col-4">
            <Select
              placeholder="Select job category"
              className="w-100 "
              onChange={(value) => handleFilterChange(value, "cat")}
            >
           <Option value="All">All</Option>

           <Option value="Medical">Medical</Option>
    <Option value="Corporate">Corporate</Option>
    <Option value="IT">IT</Option>
    <Option value="Banking">Banking</Option>
    <Option value="Education">Education</Option>
    <Option value="Construction">Construction</Option>
    <Option value="marketing">marketing</Option>
    
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
          </div>

          {/* Experience */}
          <div className="col-4">
            <Select
              placeholder="Select experience"
              className="w-100"
              onChange={(value) => handleFilterChange(value, "experience")}
            >
           <Option value="All">All</Option>

              <Option value="fresh">Fresh</Option>

<Option value="6months">6 Months</Option>
<Option value="1year">1 Year</Option>
<Option value="2years">2 Years</Option>
<Option value="3years">3 Years</Option>
<Option value="4years">4 Years</Option>
<Option value="5years">5 Years</Option>
<Option value="6years">6 Years</Option>
<Option value="7years">7 Years</Option>
<Option value="8years">8 Years</Option>
<Option value="9years">9 Years</Option>
<Option value="10years">10 Years</Option>
            </Select>
          </div>

          {/* Job Type */}
          <div className="col-4">
            <Select
              placeholder="Select job type"
              className="w-100"
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
      <div>
        <Link to={"/postjob"}>
          <button>Post A Job</button>
        </Link>
      </div>

      {/* Filter */}
      {/* Job Cards */}
      <div className="container col-12 p-0 mx-auto d-flex flex-wrap">
        <div className="col-12 d-flex flex-wrap">
      
        {filteredData.length > 0 ? (
  filteredData.map((job, index) => (
    <div className="col-lg-4 jobcard" key={index}>
      <div className="border p-2 rounded shadow-sm">
        <div className="d-flex align-items-center rounded-circle col-org">
          <div className="bg-white shadow px-2 py-1 rounded-5">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <h4 className="pt-2 px-2">{job.jobTitle}</h4>
        </div>
        <p>{job.desc}</p>
        <p>Experience: {job.experience}</p>
        <p>Job Type: {job.type}</p>
        <p>Job Category: {job.cat}</p>
      </div>
    </div>
  ))
) : (
  <div className="col-lg-12 text-center">
    <p>No jobs available</p>
  </div>
)}

        </div>
      </div>
    </>
  );
}
