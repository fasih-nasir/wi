import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import logodark from "../image/logo-dark.png"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT4O_2PErTh_f7EAttbx5TI4kWtPShC6s",
  authDomain: "wihr-consultant.firebaseapp.com",
  projectId: "wihr-consultant",
  storageBucket: "wihr-consultant.firebasestorage.app",
  messagingSenderId: "92117150651",
  appId: "1:92117150651:web:54f7b70d1cc373f556f29e",
  measurementId: "G-HN017L14LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Login() {

    // const navigate = useNavigate(); 
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const onFinish = async (values) => {
    setLoading(true);
    const { email, password } = values;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      message.success('Login Successful!');
      navigate("/post");
    //   console.log('User Logged In:', user);
      // You can redirect the user to a dashboard or another page here
    } catch (error) {
      setLoading(false);
      message.error('Login Failed! Please check your credentials.');
    //   console.error(error);
    }
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>  
      <div className="bfg rounded-4  login-container d-flex flex-column justify-content-center align-items-center col-lg-4 col-11" >
      {/* <h1 className='py-4'> */}
      <Link className="navbar-brand col-lg-12 py-4 px-2 col-6 d-flex justify-content-center" to={"/"}>
      <img src={logodark} className='col-lg-7 col-10 mx-auto' alt="" />
    </Link>
      {/* </h1> */}
      <Form
        name="login-form"
        onFinish={onFinish}
        layout="vertical"
        className=' px-4 py-4 rounded-3'
      >
        <Form.Item
        //   label="Email"
          name="email"
          className='text-white'
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
        //   label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item className='col-5 mx-auto'>
          <Button type="primary" htmlType="submit" className='org' block loading={loading}>
            Login
          </Button>
        </Form.Item>
      
      </Form>
    </div>
    </div>

  );
}
