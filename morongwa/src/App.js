import React, { useState } from 'react';
 import "./App.css";

function EmployeeRegistration() {
  const [employees, setEmployees] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [newEmployee, setNewEmployee] = useState({ id: '', name: '', position: '',email:'', surname:'',phonenumber:'',image:'' });
  const [updateEmployee, setUpdateEmployee] = useState({ id: '', name: '', position: '',email:'', surname:'',phonenumber:'',image:'' });
  const handleSearch = () => {
    const filteredEmployees = employees.filter(employee =>
      employee.id.toLowerCase().includes(searchText.toLowerCase())
    );
    // Use the filteredEmployees as needed
  };

  const handleAdd = () => {
    setEmployees([...employees, newEmployee]);
    setNewEmployee({ id: '', name: '', position: '',email:'', surname:'',phonenumber:'',image:'' });
  };

  const handleDelete = id => {
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleUpdate = () => {
    const updatedEmployees = employees.map(employee => {
      if (employee.id === updateEmployee.id) {
        return { ...employee, name: updateEmployee.name, position: updateEmployee.position, email: updateEmployee.email, surname: updateEmployee.surname, phonenumber: updateEmployee.phonenumber, image: updateEmployee.image };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
    setUpdateEmployee({ id: '', name: '', position: '',email:'', surname:'',phonenumber:'',image:'' });
  };

  return (
    <div className='App-header'>
      <div className='App-link'>
      <h1>Employee Registration</h1>

      {/* Search Function */}
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        placeholder="Search employee by id"
      />
      <button onClick={handleSearch}>Search</button>

      {/* Add Function */}
      <h2>Add Employee</h2>
      <input
        type="text"
        value={newEmployee.id}
        onChange={e => setNewEmployee({ ...newEmployee, id: e.target.value })}
        placeholder="Employee ID"
      />
      <input
        type="text"
        value={newEmployee.name}
        onChange={e => setNewEmployee({ ...newEmployee, name: e.target.value })}
        placeholder="Employee Name"
      />
      <input
        type="text"
        value={newEmployee.position}
        onChange={e => setNewEmployee({ ...newEmployee, position: e.target.value })}
        placeholder="Employee Position"
      />
      
      <input
        type="text"
        value={newEmployee.email}
        onChange={e => setNewEmployee({ ...newEmployee, email: e.target.value })}
        placeholder="Employee Email"
      />
      
      <input
        type="text"
        value={newEmployee.surname}
        onChange={e => setNewEmployee({ ...newEmployee, surname: e.target.value })}
        placeholder="Employee Surname"
      />

      <input
        type="text"
        value={newEmployee.phonenumber}
        onChange={e => setNewEmployee({ ...newEmployee, phonenumber: e.target.value })}
        placeholder="Employee Phonenumber"
      />
      
    


      <button onClick={handleAdd}>Add Employee</button>

      {/* Delete Function */}
      <h2>Delete Employee</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
            <button onClick={() => handleDelete(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Update Function */}
      <h2>Update Employee</h2>
      <input
        type="text"
        value={updateEmployee.id}
        onChange={e => setUpdateEmployee({ ...updateEmployee, id: e.target.value })}
        placeholder="Employee ID"
      />
      <input
        type="text"
        value={updateEmployee.name}
        onChange={e => setUpdateEmployee({ ...updateEmployee, name: e.target.value })}
        placeholder="Employee Name"
      />
      <input
        type="text"
        value={updateEmployee.position}
        onChange={e => setUpdateEmployee({ ...updateEmployee, position: e.target.value })}
        placeholder="Employee Position"
      />

     

      <button onClick={handleUpdate}>Update Employee</button>
      </div>
    </div>
  );
}

export default EmployeeRegistration;
