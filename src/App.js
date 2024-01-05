import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Admin from "./components/Admin/Admin";
import Employee from "./components/Employee/Employee";
import Login from "./components/Login/Login";
import Reimbursements from "./components/Reimbursements/Reimbursements";

function App() {
  return (
    <Router>
      <Routes>
        <Route path=" " element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/admin-view" element={<Admin />} />
        <Route path="/employee-view" element={<Employee />} />
        <Route path="/reimbursement" element={<Reimbursements />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
