import React from "react";

export default function Reports() {
  const reports = [
    { id: 1, title: "Report 1", status: "Pending" },
    { id: 2, title: "Report 2", status: "Completed" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>
      <ul className="space-y-2">
        {reports.map(r => (
          <li key={r.id} className="bg-white p-4 rounded shadow flex justify-between">
            <span>{r.title}</span>
            <span className={`px-2 py-1 rounded ${r.status === "Completed" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}>
              {r.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}