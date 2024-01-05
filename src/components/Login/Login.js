import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (
        formData.email === "employee@gmail.com" &&
        formData.password === "123123"
      ) {
        navigate("/employee-view");
        alert("Employee Logged Successfully");
      } else if (
        formData.email === "admin@gmail.com" &&
        formData.password === "321321"
      ) {
        navigate("/admin-view");
        alert("Admin Logged Successfully");
        setTimeout(1000);
      } else {
        alert("Invalid email or password");
        setFormData({
          email: "",
          password: "",
        });
      }
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <Layout title="Login-Section">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="error">{errors.email}</div>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="error">{errors.password}</div>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
