import React, { useState } from "react";

export default function Customers() {
  const [search, setSearch] = useState("");
  const [customers, setCustomers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com", phone: "1234567890" },
    { id: 2, name: "Bob", email: "bob@example.com", phone: "9876543210" }
  ]);

  const filtered = customers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Phone</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(customer => (
            <tr key={customer.id} className="border-t">
              <td className="py-2 px-4">{customer.name}</td>
              <td className="py-2 px-4">{customer.email}</td>
              <td className="py-2 px-4">{customer.phone}</td>
              <td className="py-2 px-4">
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => setCustomers(customers.filter(c => c.id !== customer.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}