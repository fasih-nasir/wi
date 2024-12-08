import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { doc, getDocs,getFirestore,collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export default function   Jobs () {
  const [data,setdata]=useState([])
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
// const auth = getAuth(app);
const db = getFirestore(app)
useEffect(() => {
  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "jobs"));
      const jobsArray = []; // Create an array to hold the job data
      querySnapshot.forEach((doc) => {
        jobsArray.push(doc.data()); // Push each document's data into the array
      });
      setdata(jobsArray); // Set the data state with the array
    } catch (err) {
      console.log(err);
    }
  };

  getData();
}, []);

  return (

   <>

   <div>
        <Link to={"/postjob"}>
      <button>Post A Job</button>
      </Link>


    </div>
    <div className="container">
    {Array.isArray(data) && data.map((e, index) => (
  <div className="col-12" key={index}>
    <p>{e.title}</p>
  </div>
))}

    </div>
    </>
  )
}
