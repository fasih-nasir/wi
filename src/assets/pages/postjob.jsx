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
              {/* Other options here */}
            </Select>
          </Form.Item>

          {/* Job Category */}
          <Form.Item label="Job Category" name="cat" rules={[{ required: true, message: "Please select the job category!" }]}>
            <Select placeholder="Select job category">
              <Option value="Medical">Medical</Option>
              <Option value="Corporate">Corporate</Option>
              {/* Other options here */}
            </Select>
          </Form.Item>

          {/* Experience */}
          <Form.Item label="Experience" name="experience" rules={[{ required: true, message: "Please select experience!" }]}>
            <Select placeholder="Select experience">
              <Option value="6months">Fresh</Option>
              <Option value="1year">1 Year</Option>
              {/* Other options here */}
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
