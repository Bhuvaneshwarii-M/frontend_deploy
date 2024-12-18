import React, { useState } from "react";
import axios from "axios";
import validation from "./Validation";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    employeeId: "",
    email: "",
    phone: "",
    department: "",
    dateOfJoining: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update employee data
    setEmployee({ ...employee, [name]: value });

    // Validate on change
    const validationErrors = validation({ ...employee, [name]: value });
    setErrors(validationErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validation(employee);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/add-employee",
        employee
      );
      alert(response.data.message);
      setEmployee({
        name: "",
        employeeId: "",
        email: "",
        phone: "",
        department: "",
        dateOfJoining: "",
        role: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Error adding employee:", err);
      alert("Failed to add employee");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Employee
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={employee.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                errors.name ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          {/* Employee ID Field */}
          <div>
            <input
              type="text"
              name="employeeId"
              placeholder="Employee ID"
              value={employee.employeeId}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.employeeId ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                errors.employeeId ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.employeeId && (
              <p className="text-red-500 text-sm mt-1">{errors.employeeId}</p>
            )}
          </div>
          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={employee.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          {/* Phone Field */}
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={employee.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                errors.phone ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          {/* Department Field */}
          <div>
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={employee.department}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.department ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                errors.department
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {errors.department && (
              <p className="text-red-500 text-sm mt-1">{errors.department}</p>
            )}
          </div>
          {/* Date of Joining Field */}
          <div>
            <input
              type="date"
              name="dateOfJoining"
              placeholder="Date of Joining"
              value={employee.dateOfJoining}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.dateOfJoining ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                errors.dateOfJoining
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {errors.dateOfJoining && (
              <p className="text-red-500 text-sm mt-1">
                {errors.dateOfJoining}
              </p>
            )}
          </div>
          {/* Role Field */}
          <div>
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={employee.role}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.role ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                errors.role ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role}</p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
