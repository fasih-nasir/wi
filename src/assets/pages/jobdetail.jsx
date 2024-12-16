import React from 'react'
import { useEffect ,useState } from 'react';
import { useLocation } from 'react-router'
import { useParams } from 'react-router-dom';
// 
import { Button, Modal,message } from 'antd';

// 
import { getDocs, getFirestore, collection,doc,getDoc,addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// 
export default function Jobdetail() {
  // ANTD
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
// ANTD
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
    // console.log(jobId);
    const [data,setdata]=useState("")
    
    useEffect(() => {
      const getData = async () => {
        try {
          const docRef = doc(db, "jobs", jobId); // Reference to the specific document
          const docSnap = await getDoc(docRef); // Fetch the document
  
          if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            setdata(docSnap.data());
            // console.log(docSnap.data().a);
            
          } else {
            // console.log("No such document!");
          }
        } catch (err) {
          // console.error("Error fetching document:", err);
        }
      };
  
      getData();
    }, [jobId]); // Add jobId as a dependency
  // FORM
  const [messageApi, contextHolder] = message.useMessage();

   const success = () => {
      messageApi.open({
        // className:"",
        type: 'success',
        content: 'Your job request has been successfully forwarded to the admin. Thank you for reaching out!',
        duration: 5,
    //  top:50,
      });
    };
    const error = () => {
      messageApi.open({
        type: 'error',
        content: 'This is an error message',
      });
    };
    // contact form
    var loc=useLocation()
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending...");
    
      const formData = new FormData(event.target);
      const formObject = Object.fromEntries(formData.entries());
    
      try {
        // Add data to Firestore collection "contact-us"
        const docRef = await addDoc(collection(db, "Applied-Job"), formObject);
        // console.log(formObject);
        
     
    
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
          setIsModalOpen(false);
        
          setTimeout(() => {
            window.location.href = "/job"; 
          },4500);
      
        } else {
          error()
          // setResult("Failed");
        }
    
      } catch (error) {
        // console.error("Error adding document: ", error);
        // alert("Failed");
        // error()

      }
    };
  // FORM
    return (
      // FIREBASE
    <div>
 <div className="container-fluid d-flex  flex-lg-row flex-column mb-5  m-0 px-4 pt-5">
{/* col-9 */}
{contextHolder}
 <div className="col-lg-9 col-12  jobcard mt-4">
      <div className=" p-2 rounded shadow-sm">
      
      
        <div className="d-flex flex-lg-row   flex-column  align-items-center rounded-circle ">
          <div className="p-3  me-1  display-5  bref ">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <div className='d-flex flex-column col-12 ps-lg-1'>
      
          <h2 className="pt-2 px-2 col-org text-lg-start text-center ">{data.jobTitle}</h2>
    
      <div className='d-flex col-lg-12 mt-lg-0 mt-4  mx-auto  flex-lg-row  flex-column  justify-content-lg-start align-items-center   gap-1'>
   <div className='d-flex flex-lg-row  flex-column  '>
         <p className='i0   bg-white shadow-lg   px-3 py-1   text-capitalize d-flex flex-lg-row flex-column    align-items-center text-lg-start  text-center ' ><i className="fa fa-list-alt px-2  col-grey  " aria-hidden="true" /> {data.cat}</p>
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

        <h4>Benefit</h4>
        <p className='col-grey1 py-3 '> {data.benefit}</p>
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
   
    {/* <button >Apply Now</button> */}
    <Button className="org border-0 py-2 col-11 mx-auto rounded-1  mt-2"   onClick={showModal}>
        Apply Now
      </Button>
  </div>
  {/* Job Details */}
  <ul className="list-unstyled px-3">
    <li className="mb-4 mt-4">
      <i className="fa-solid fa-calendar-days me-2 col-org" />
      <span>Date Posted</span>
      <p className="text-muted mb-0">
    {data?.a && Array.isArray(data.a) ? (
      <>
        <span>{data.a[0]}</span>
        <span> - {data.a[1]}</span>
        <span> - {data.a[2]}</span>
      </>
    ) : (
      <span>Loading...</span>
    )}
  </p>
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
{/* modal */}
<Modal title="Job Form" open={isModalOpen}  onCancel={handleCancel}footer={null} >
<form onSubmit={onSubmit}>
  <div className='col-12 d-flex flex-lg-row flex-column'>
    <input type="text" required placeholder=' Your Name' className='me-lg-1 col-lg-6 col-12'  name="Name" id="" />
    
    <input type="number" required  placeholder='+92 314890197' className=' col-lg-6 col-12'   name="Number" id="" />
    </div>
    <div className='col-12 d-flex flex-lg-row flex-column'>
    <input type="email" placeholder='Your Email' required className=' me-lg-1 col-lg-6 col-12'  name="Email" id="" />
    <input type="url" placeholder='CV / Portfolio URL'required  className='  col-lg-6 col-12'  name="CV Url" id="" />
  
    </div>
    <br />
    <input type="hidden"name="Job-Title"  placeholder='Enter Your Email  'value={data.jobTitle}  className='mx-1 border-0' id="" />
<br />
<div className="d-flex justify-content-center">
   <button type='submit' className=" okbtn col-2 org border-0    " >Send </button>
   </div>
    </form>
      </Modal>
{/* modal */}
    </div>
  )
}