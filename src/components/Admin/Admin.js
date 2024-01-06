import React, { useEffect, useState } from "react";
import Layout2 from "../Layout2";

const Admin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [userData] = useState([
    { id: 1, name: "User 1", location: "Guwahati" },
    { id: 2, name: "User 2", location: "Jorhat" },
    { id: 2, name: "User 3", location: "Tezpur" },
    { id: 2, name: "User 4", location: "Kokrajhar" },
  ]);
  const [employeeData] = useState([
    { id: 1, name: "Employee 1", role: "ML Engineer" },
    { id: 2, name: "Employee 2", role: "SDE Intern" },
    { id: 2, name: "Employee 3", role: "Frontend Developer" },
    { id: 2, name: "Employee 4", role: "Full-stack Engineer" },
  ]);
  return (
    <Layout2 title="Admin Portal">
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2
          style={{ color: "green", marginBottom: "20px", fontWeight: "bold" }}
        >
          Admin Dashboard
        </h2>
        <div style={{ marginBottom: "20px" }}>
          <h3
            style={{ color: "#555", marginBottom: "10px", textAlign: "center" }}
          >
            User List
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>ID</th>
                <th style={tableHeaderStyle}>User Name</th>
                <th style={tableHeaderStyle}>Location</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id}>
                  <td style={tableCellStyle}>{user.id}</td>
                  <td style={tableCellStyle}>{user.name}</td>
                  <td style={tableCellStyle}>{user.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h3
            style={{ color: "#555", marginBottom: "10px", textAlign: "center" }}
          >
            Employee List
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>ID</th>
                <th style={tableHeaderStyle}>Employee Name</th>
                <th style={tableHeaderStyle}>Role</th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map((employee) => (
                <tr key={employee.id}>
                  <td style={tableCellStyle}>{employee.id}</td>
                  <td style={tableCellStyle}>{employee.name}</td>
                  <td style={tableCellStyle}>{employee.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout2>
  );
};

const tableHeaderStyle = {
  backgroundColor: "#eee",
  padding: "10px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
};

export default Admin;
