import React, { useState } from "react";

export default function Agents() {
  const [agents, setAgents] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" }
  ]);

  const handleDelete = (id) => {
    setAgents(agents.filter(agent => agent.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Agents</h1>
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {agents.map(agent => (
            <tr key={agent.id} className="border-t">
              <td className="py-2 px-4">{agent.name}</td>
              <td className="py-2 px-4">{agent.email}</td>
              <td className="py-2 px-4">{agent.status}</td>
              <td className="py-2 px-4 space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(agent.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}