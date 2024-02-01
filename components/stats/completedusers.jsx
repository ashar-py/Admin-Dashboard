// CompletedUsers.js
"use client";
import styles from "@/app/ui/dashboard/stats/stats.module.css";

import React, { useEffect, useState } from 'react';
//import { fetchCompletedUsers } from './completedUsers'; // Adjust the path accordingly

const CompletedUsers = () => {
  const [completedUsers, setCompletedUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCompletedUsers();
        setCompletedUsers(data); // Assuming the data is an array of completed users
      } catch (error) {
        console.error('Error fetching completed users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Completed Users</h2>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Last Active</th>
            <th>Attended by</th>
          </tr>
        </thead>
        <tbody>
          {completedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.lastActive}</td>
              <td>{user.attendedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedUsers;
