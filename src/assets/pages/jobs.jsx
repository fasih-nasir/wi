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
  const [filters, setFilters] = useState({
    jobCategory: null,
    experience: null,
    jobType: null,
  });

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
        setFilteredData(jobsArray);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  const handleFilterChange = (value, field) => {
    const updatedFilters = { ...filters, [field]: value };
    setFilters(updatedFilters);

    const filteredJobs = data.filter((job) => {
      return (
        (!updatedFilters.jobCategory || job.jobCategory === updatedFilters.jobCategory) &&
        (!updatedFilters.experience || job.experience === updatedFilters.experience) &&
        (!updatedFilters.jobType || job.jobType === updatedFilters.jobType)
      );
    });

    setFilteredData(filteredJobs);
  };

  return (
    <>
      <div>
        <Link to={"/postjob"}>
          <button>Post A Job</button>
        </Link>
      </div>

      {/* Filter */}
      <div className="container-fluid px-5 d-flex org py-4 justify-content-center align-items-center">
        <div className="d-flex flex-row col-12" style={{ fontFamily: "Outfit" }}>
          {/* Job Category */}
          <div className="col-3">
            <Select
              placeholder="Select job category"
              className="w-100"
              onChange={(value) => handleFilterChange(value, "jobCategory")}
            >
              <Option value="Medical">Medical</Option>
              <Option value="Corporate">Corporate</Option>
              <Option value="IT">IT</Option>
              {/* Add more options as needed */}
            </Select>
          </div>

          {/* Experience */}
          <div className="col-3">
            <Select
              placeholder="Select experience"
              className="w-100"
              onChange={(value) => handleFilterChange(value, "experience")}
            >
              <Option value="6months">6 Months</Option>
              <Option value="1year">1 Year</Option>
              <Option value="2years">2 Years</Option>
            </Select>
          </div>

          {/* Job Type */}
          <div className="col-3">
            <Select
              placeholder="Select job type"
              className="w-100"
              onChange={(value) => handleFilterChange(value, "jobType")}
            >
              <Option value="remote">Remote</Option>
              <Option value="hybrid">Hybrid</Option>
              <Option value="onsite">Onsite</Option>
            </Select>
          </div>
        </div>
      </div>

      {/* Job Cards */}
      <div className="container col-12 p-0 mx-auto d-flex flex-wrap">
        <div className="col-12 d-flex flex-wrap justify-content-between">
          {filteredData.map((job, index) => (
            <div className="col-lg-4 jobcard" key={index}>
              <div className="border p-2 rounded shadow-sm">
                <div className="d-flex align-items-center rounded-circle col-org">
                  <div className="bg-white shadow px-2 py-1 rounded-5">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <h4 className="pt-2 px-2">{job.jobTitle}</h4>
                </div>
                <h5 className="fw-bold">{job.jobTitle}</h5>
                <p>Experience: {job.experience}</p>
                <p>Job Type: {job.jobType}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
