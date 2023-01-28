import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./sigin.css";

const SignIn = ({ setEmail }) => {
  const baseURL = "http://localhost:5000";
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleClick = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post(`${baseURL}/login`, user).then((res) => {
        alert(res.data.msg);
        console.log(res.data);
        axios.post(`${baseURL}/check`).then((res) => {
          console.log(res);
        });
        setEmail(user.email);
        navigate("/");
      });
    } else {
      alert("invalid");
    }
  };
  return (
    <>
      <div className="basicForm">
        <span>
          <h1>Sign In</h1>
          <input
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            placeholder="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Sign In</button>
        </span>
      </div>
    </>
  );
};

export default SignIn;
