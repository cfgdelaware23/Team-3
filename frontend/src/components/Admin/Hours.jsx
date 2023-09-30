import React from 'react';
import "./Hours.css";


// Hard-coded user data for testing
const hardcodedUsers = [
  { name: 'John Doe', hours: '15' },
  { name: 'Jane Smith', hours: '20' },
  { name: 'Jake Wilkerson', hours: '100' },
  { name: 'John Doe', hours: '15' },
  { name: 'Jane Smith', hours: '20' },
  { name: 'Jake Wilkerson', hours: '100' },
  { name: 'John Doe', hours: '15' },
  { name: 'Jane Smith', hours: '20' },
  { name: 'Jake Wilkerson', hours: '100' },
  { name: 'John Doe', hours: '15' },
  { name: 'Jane Smith', hours: '20' },
  { name: 'Jake Wilkerson', hours: '100' },
  { name: 'John Doe', hours: '15' },
  { name: 'Jane Smith', hours: '20' },
  { name: 'Jake Wilkerson', hours: '100' },
  { name: 'John Doe', hours: '15' },
  { name: 'Jane Smith', hours: '20' },
  { name: 'Jake Wilkerson', hours: '100' }
  // Add more user data as needed
];

function HoursTable() {
  return (
    <div className='table__header' style={{ overflowY: 'scroll', maxHeight: '600px' }}>
        
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {hardcodedUsers.map((user) => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HoursTable;
