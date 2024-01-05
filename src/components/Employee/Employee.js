import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout1 from "../Layout1";
import photo from "../../assests/5856.jpg";

const Employee = () => {
  const [userInfo] = useState({
    id: 1,
    name: "Devanshu Kumar",
    email: "devanshukumar289@gmail.com",
    position: "Frontend Intern",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout1 title="Employee Portal">
      <div
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#333", marginBottom: "20px" }}>
          Profile Dashboard
        </h2>
        <div>
          <img
            src={photo}
            alt=""
            style={{
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              marginBottom: "10px",
            }}
          />
          <h3 style={{ color: "#555", marginBottom: "5px" }}>
            {userInfo.name}
          </h3>
          <p style={{ color: "#777", marginBottom: "15px" }}>
            Email: {userInfo.email}
          </p>
          <p style={{ color: "#777", marginBottom: "15px" }}>
            Position: {userInfo.position}
          </p>
        </div>
      </div>

      <Link to="/reimbursement">
        <button
          className="attractive-button"
          style={{ width: "200px", marginLeft: "43%" }}
        >
          Reimbursements Form
        </button>
      </Link>
    </Layout1>
  );
};

export default Employee;
