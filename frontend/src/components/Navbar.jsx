import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:underline">Dashboard</Link></li>
        <li><Link to="/agents" className="hover:underline">Agents</Link></li>
        <li><Link to="/customers" className="hover:underline">Customers</Link></li>
        <li><Link to="/reports" className="hover:underline">Reports</Link></li>
        <li><Link to="/register" className="hover:underline">Register</Link></li>
        {/* <li><Link to="/login" className="hover:underline">Login</Link></li> */}
      </ul>
    </nav>
  );
}