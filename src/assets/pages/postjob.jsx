import { useState } from "react";
import { message, Form, Input, Select, Button } from "antd";
const { Option } = Select;
const { TextArea } = Input;

import { onAuthStateChanged, signOut } from "firebase/auth";
// FIREBASE
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router';

import { getFirestore, collection, addDoc } from "firebase/firestore"; 

const PostJob = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Job Post Successful',
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
  const db = getFirestore(app);

  const nav = useNavigate();

  // Get the UID of the currently authenticated user
  const [userUid, setUserUid] = useState(null);
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserUid(user.uid);
    } else {
      nav("/login"); // Redirect to login if user is not signed in
    }
  });

  // Log out function
  const log = () => {
    signOut(auth).then(() => {
      // Sign-out successful
    }).catch((error) => {
      // An error happened
    });
  };

  const a = [new Date().getFullYear(), new Date().getDate(), new Date().getMonth() + 1];

  const onFinish = async (values) => {
    try {
      if (!userUid) {
        messageApi.open({
          type: 'error',
          content: 'User not authenticated!',
          duration: 5,
        });
        return;
      }

      const dataToSubmit = {
        ...values,
        a,
        userUid, // Add the userUid here
      };

      const docRef = await addDoc(collection(db, "jobs"), dataToSubmit);
      success();

      setTimeout(() => {
        location.reload();
      }, 1500);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column postjobbg d-flex justify-content-center align-items-center">
        <h1 className="text-white fw-normal">POST A JOB </h1>
        <p className="text-white fw-normal text-capitalize">Note Just only admin can post a job or delete a job </p>
        <button onClick={log}>LogOut</button>
      </div>

      <div className="col-lg-6  mx-auto py-5">
        <Form layout="vertical" className="form col-12" style={{ fontFamily: "Outfit" }} onFinish={onFinish}>
          {/* Job Title */}
          <Form.Item
            label="Job Title"
            name="jobTitle"
            rules={[{ required: true, message: "Please enter the job title!" }]}
          >
            <Input placeholder="Enter job title" />
          </Form.Item>

          {/* Job Description */}
          <Form.Item label="Job Description" name="desc" rules={[{ required: true, message: "Please enter the job Desc!" }]}>
            <TextArea placeholder="Controlled autosize" autoSize={{ minRows: 3, maxRows: 5 }} />
          </Form.Item>

          {/* Job Benefit */}
          <Form.Item label="Job Benefit" name="benefit" rules={[{ required: true, message: "Please enter the job Benefit!" }]}>
            <TextArea placeholder="Benefit" autoSize={{ minRows: 2, maxRows: 5 }} />
          </Form.Item>

          {/* Job Skills */}
          <Form.Item label="Job Skill" name="skill" rules={[{ required: true, message: "Please enter the job Skill" }]}>
            <TextArea placeholder="Skill" autoSize={{ minRows: 2, maxRows: 5 }} />
          </Form.Item>

          {/* Responsibility */}
          <Form.Item label="Job Responsibility" name="res" rules={[{ required: true, message: "Please enter the Job-Responsibility!" }]}>
            <TextArea placeholder="Job-Responsibility" autoSize={{ minRows: 3, maxRows: 5 }} />
          </Form.Item>

          {/* Qualification */}
          <Form.Item label="Job Qualifications" name="qua" rules={[{ required: true, message: "Please enter the Qualifications!" }]}>
            <TextArea placeholder="Job-Qualifications" autoSize={{ minRows: 3, maxRows: 5 }} />
          </Form.Item>

          {/* Job Type */}
          <Form.Item label="Job Type" name="type" rules={[{ required: true, message: "Please select the job type!" }]}>
            <Select placeholder="Select job type">
              <Option value="remote">Remote</Option>
              <Option value="hybrid">Hybrid</Option>
              <Option value="onsite">Onsite</Option>
            </Select>
          </Form.Item>

          {/* Job Region */}
          <Form.Item label="Job Region" name="jobRegion" rules={[{ required: true, message: "Please select the job region!" }]}>
            <Select placeholder="Select job region">
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
          </Form.Item>

          {/* Job Category */}
          <Form.Item label="Job Category" name="cat" rules={[{ required: true, message: "Please select the job category!" }]}>
            <Select placeholder="Select job category">
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
  <Option value="IT Support">IT Support</Option>
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
          </Form.Item>

          {/* Experience */}
          <Form.Item label="Experience" name="experience" rules={[{ required: true, message: "Please select experience!" }]}>
            <Select placeholder="Select experience">
    
            <Option value="fresh">Fresh</Option>
            <Option value="3months">3 Months</Option>

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
          </Form.Item>

          {/* Submit Button */}
          <Form.Item className="col-3 mx-auto fw-bolder text-uppercase">
            <Button className="col-2 mx-auto org text-white" htmlType="submit" block>
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
