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
 <div className="container-fluid d-flex  flex-lg-row flex-column  m-0 px-4 pt-5">
{/* col-9 */}
 <div className="col-lg-9 col-12  jobcard mt-4">
      <div className=" p-2 rounded shadow-sm">
      
      
        <div className="d-flex flex-lg-row   flex-column  align-items-center rounded-circle ">
          <div className="p-3  me-1  display-5  bref ">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <div className='d-flex flex-column col-12 '>
      
          <h2 className="pt-2 px-2 col-org text-lg-start text-center ">{data.jobTitle}</h2>
    
      <div className='d-flex col-lg-12 mt-lg-0 mt-4  mx-auto  flex-row  justify-content-lg-start align-items-center   gap-1'>
   <div className='d-flex flex-lg-row flex-column'>
         <p className='i0   bg-white shadow-lg  px-3 py-1   text-capitalize d-flex flex-lg-row flex-column    align-items-center text-lg-start  text-center ' ><i className="fa fa-list-alt px-2  col-grey  " aria-hidden="true" /> {data.cat}</p>
         <p className='i0  bg-white shadow-lg px-3  py-1   text-capitalize d-flex flex-lg-row flex-column    align-items-center text-lg-start  text-center ' ><i className="fa-solid fa-location-dot pe-1 ps-2 col-grey  " aria-hidden="true" /> {data.jobRegion}</p>
         </div>
         <div  className='d-flex flex-lg-row flex-column'>
         <p className='i0   bg-white shadow-lg px-3 py-1   text-capitalize  d-flex flex-lg-row flex-column    align-items-center text-lg-start  text-center ' ><i className="fa-solid fa-money-bill-wave pe-1 ps-2 col-grey " aria-hidden="true" /> {data.salary}</p>
         <p className='i0  text-center px-3 py-1  bg-white shadow-lg   text-capitalize  d-flex flex-lg-row flex-column    align-items-center text-lg-start  text-center ' ><i className="fas fa-laptop pe-1 ps-2 col-grey " aria-hidden="true" />{data.type}</p>
         </div>
         </div>
          </div>
        </div>
        <div className='pt-5'>

        </div>
        <h4>Job Description</h4>
        <p className='col-grey1 py-3 ' >{data.desc}</p>
        <h4>Key Responsibilities</h4>
<p className='col-grey1'>{data.res}</p>
 
        <h4>Skill</h4>
        <p className='col-grey1 py-3 '> {data.skill}</p>
        <h4>Qualification</h4>
        <p className='col-grey1 py-3'> {data.qua}</p>

        <h4>Experience</h4>
        <p className='col-grey1 py-3'> {data.experience}</p>
      
      </div>
    </div>
    {/* col-9 */}
    {/* col-3 */}
    <div className="col-lg-3 col-12  jobcard shadow-lg mt-4">
  {/* Apply Now Button */}
  <div className="text-center mb-5">
   
    <button className="org border-0 py-2 col-11 mx-auto rounded-1  mt-2">Apply Now</button>

  </div>
  {/* Job Details */}
  <ul className="list-unstyled px-3">
    <li className="mb-4 mt-4">
      <i className="fa-solid fa-calendar-days me-2 col-org" />
      <span>Date Posted</span>
      <p className="text-muted mb-0"> {data.a[0]}-{data.a[1]}-{data.a[2]} </p>
    </li>
    <li className="mb-4">
      <i className="fa-solid fa-location-dot me-2 col-org" />
      <span>Location</span>
      <p className="text-muted mb-0">{data.jobRegion}</p>
    </li>
    <li className="mb-4">
      <i className="fa-solid fa-money-bill-wave me-2 col-org" />
      <span>Offered Salary:</span>
      <p className="text-muted mb-0">{data.salary}</p>
    </li>
  
    <li className="mb-4">
      <i className="fa-solid fa-briefcase me-2 col-org" />
      <span>Experience</span>
      <p className="text-muted mb-0">{data.experience}</p>
    </li>
    <li className="mb-4">
      <i className="fa-solid fa-user me-2 col-org" />
      <span>Gender</span>
      <p className="text-muted mb-0">{data.Gender}</p>
    </li>
  
  </ul>
</div>

    {/* col-3 */}
  </div>

    </div>
  )
}
