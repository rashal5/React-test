import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/all')
      .then(response => {
        setEmployees(response.data);
        console.log(response.data)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.first_name} - {employee.phone_number}
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default EmployeeList;
