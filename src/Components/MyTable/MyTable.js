import React, { useState } from 'react';

const MyTable = () => {
  const data = [
    { id: 1, name: 'John', age: 25, city: 'New York', country: 'USA', occupation: 'Engineer' },
    { id: 2, name: 'Jane', age: 30, city: 'London', country: 'UK', occupation: 'Designer' },
    // Add more data as needed
  ];

  const [tableData, setTableData] = useState(data);
  const visibleColumns = 5;

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <table style={{ width: `${visibleColumns * 150}px` }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Country</th>
            <th>Occupation</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
              <td>{row.country}</td>
              <td>{row.occupation}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;