import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  // Sample statistics
  const stats = [
    { title: "Total Agents", value: 12 },
    { title: "Total Customers", value: 34 },
    { title: "Total Reports", value: 8 }
  ];

  // Chart data
  const data = {
    labels: stats.map((s) => s.title),
    datasets: [
      {
        label: "Count",
        data: stats.map((s) => s.value),
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B"] // Tailwind colors
      }
    ]
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Statistics Overview"
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <h2 className="font-semibold">{s.title}</h2>
            <p className="text-3xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-6 rounded shadow">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}