import React, { useState } from 'react';
import axios from 'axios';

const EmployeeSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [employee, setEmployee] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8000/employees?name=${encodeURIComponent(searchText)}`
      );
      if (response.data.length > 0) {
        setEmployee(response.data[0]);
      } else {
        setEmployee(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Search Employee</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by name"
        />
        <button type="submit">Search</button>
      </form>
      {employee && (
        <div>
          <h2>Employee Details</h2>
          <p>ID: {employee.id}</p>
          <p>Name: {employee.name}</p>
          <p>Position: {employee.position}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeSearch;
