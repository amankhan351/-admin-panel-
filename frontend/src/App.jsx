import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar.jsx";
import Dashboard from "@/pages/Dashboard.jsx";
import Agents from "@/pages/Agents.jsx";
import Customers from "@/pages/Customers.jsx";
import Reports from "@/pages/Reports.jsx";
import Register from "@/pages/Register.jsx";
export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </div>
  );
}