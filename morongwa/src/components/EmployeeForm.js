import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EmployeeForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const isEditMode = !!id;
  const [employee, setEmployee] = useState({ id: '', name: '', position: '' });

  useEffect(() => {
    if (isEditMode) {
      getEmployee();
    }
  }, [isEditMode]);

  const getEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/employees/${id}`);
      setEmployee(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditMode) {
        await axios.put(`http://localhost:8000/employees/${id}`, employee);
      } else {
        await axios.post('http://localhost:8000/employees', employee);
      }
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{isEditMode ? 'Edit Employee' : 'Add Employee'}</h1>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="text"
          value={employee.id}
          onChange={(e) => setEmployee({ ...employee, id: e.target.value })}
          disabled={isEditMode}
        />
        <label>Name:</label>
        <input
          type="text"
          value={employee.name}
          onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
        />
        <label>Position:</label>
        <input
          type="text"
          value={employee.position}
          onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
        />
        <button type="submit">{isEditMode ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
