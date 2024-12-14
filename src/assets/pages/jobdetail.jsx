import React from 'react'
import { useEffect ,useState } from 'react';
import { useLocation } from 'react-router'
import { useParams } from 'react-router-dom';
// 
import { getDocs, getFirestore, collection,doc,getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// 
export default function Jobdetail() {
  // FIREBASE
  const firebaseConfig = {
      apiKey: "AIzaSyAT4O_2PErTh_f7EAttbx5TI4kWtPShC6s",
      authDomain: "wihr-consultant.firebaseapp.com",
      projectId: "wihr-consultant",
      storageBucket: "wihr-consultant.firebasestorage.app",
      messagingSenderId: "92117150651",
      appId: "1:92117150651:web:54f7b70d1cc373f556f29e",
      measurementId: "G-HN017L14LW",
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const { jobId } = useParams();
    console.log(jobId);
    const [data,setdata]=useState("")
    
    useEffect(() => {
      const getData = async () => {
        try {
          const docRef = doc(db, "jobs", jobId); // Reference to the specific document
          const docSnap = await getDoc(docRef); // Fetch the document
  
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setdata(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (err) {
          console.error("Error fetching document:", err);
        }
      };
  
      getData();
    }, [jobId]); // Add jobId as a dependency
  
    return (
      // FIREBASE
    <div>
 <div className="container m-0 px-4 pt-5">

 <div className="col-lg-8 col-12  jobcard shadow-lg mt-4">
      <div className=" p-2 rounded shadow-sm">
        <div className="d-flex align-items-center rounded-circle ">
          <div className="bg-white shadow p-3  display-5 col-org ">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <div className='d-flex flex-column  '>
          <h1 className="pt-2 px-2 col-org text-uppercase">{data.jobTitle}</h1>
      <div className='d-flex flex-row'>
         <p><i className="fa fa-list-alt pe-1 ps-2" aria-hidden="true" /> {data.cat}</p>
         <p><i className="fa-solid fa-location-dot pe-1 ps-2" aria-hidden="true" /> {data.jobRegion}</p>
         <p><i className="fa-solid fa-money-bill-wave pe-1 ps-2" aria-hidden="true" /> {data.salary}</p>
  
         </div>
          </div>
        </div>
        <div className='pt-5'>

        </div>
        <h4>Job Description</h4>
        <p className='col-grey1' >{data.desc}</p>
        <h4>Key Responsibilities</h4>
<p className='col-grey1'>{data.res}</p>
 
        <h4>Skill & Experience</h4>
        <p className='col-grey1'> {data.experience}</p>
        <h4>Qualification</h4>
        <p className='col-grey1'> {data.qua}</p>
      
      </div>
    </div>
  </div>

    </div>
  )
}
