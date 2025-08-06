'use client'
import React, { useState } from "react";

const AddPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "Regular",
  });

   const handleChange = (e: any) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };

     const handleSubmit = async (e: any) => {
       e.preventDefault();
      
      console.log(formData);
     };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600">Add Member</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-4 p-6 bg-gray-50 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="p-2 border border-gray-300 rounded"
        />
        <select
          name="membershipType"
          value={formData.membershipType}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="Regular">Regular</option>
          <option value="Premium">Premium</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};

export default AddPage;
