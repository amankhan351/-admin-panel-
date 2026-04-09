Admin Panel - MERN Stack




Project Overview

Ye Admin Panel ek full-stack web application hai jo MERN stack (MongoDB, Express.js, React.js, Node.js) par bana hai.

Frontend: React 18 + Vite + Tailwind CSS
Backend: Node.js + Express + MongoDB
Key Features:
User Authentication (Login / Register)
Dashboard with charts and analytics
Manage Agents, Customers, Reports, and Calls
Protected routes for secure access
Responsive design with Tailwind CSS
REST API integration using Axios
Project Structure
frontend/
├─ src/
│  ├─ components/    # Navbar, Sidebar, Cards
│  ├─ pages/         # Dashboard, Login, Register
│  ├─ api/           # Axios API setup
│  └─ App.jsx
├─ package.json
└─ vite.config.js

backend/
├─ config/           # Database connection
├─ controllers/      # CRUD logic
├─ models/           # MongoDB schemas
├─ routes/           # API endpoints
├─ server.js         # Entry point
├─ package.json
└─ .env              # Environment variables
Features
Authentication
JWT based login/register
Protected routes to restrict unauthorized access
Dashboard
Bar chart, line chart using Chart.js
Total users, agents, reports overview
Agents & Customers
CRUD operations
Search and filter
Reports
Generate and view reports
Export option
Tech Stack
Frontend: React 18, Vite, Tailwind CSS, Axios, React Router
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT
Charts: Chart.js + react-chartjs-2
Installation
1. Clone Repository
git clone https://github.com/<your-username>/admin-panel.git
cd admin-panel
2. Backend Setup
cd backend
npm install
# Create .env file with the following:
# MONGO_URI=<your MongoDB connection string>
# JWT_SECRET=<your secret>
npm run dev
3. Frontend Setup
cd ../frontend
npm install
npm run dev
Browser: http://localhost:5173
Backend API: http://localhost:5000/api
Environment Variables

Backend (.env)

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/admin-panel
JWT_SECRET=your_jwt_secret
PORT=5000

Frontend (.env.local) [Optional]

VITE_API_URL=http://localhost:5000/api
Screenshots
Login Page
Dashboard
Agents/Customers List
Reports Page

(Add screenshots here for better presentation)

Commands

Backend

npm install
npm run dev

Frontend

npm install
npm run dev
License

This project is licensed under MIT License.
