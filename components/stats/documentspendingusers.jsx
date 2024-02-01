// DocumentsPendingUsers.js
"use client";
import styles from "@/app/ui/dashboard/stats/stats.module.css";
import React, { useEffect, useState } from 'react';
//import { fetchDocumentsPendingUsers } from './documentsPendingUsers'; // Adjust the path accordingly

const DocumentsPendingUsers = () => {
  const [documentsPendingUsers, setDocumentsPendingUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDocumentsPendingUsers();
        setDocumentsPendingUsers(data); // Assuming the data is an array of documents pending users
      } catch (error) {
        console.error('Error fetching documents pending users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Documents Pending Users</h2>
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
          {documentsPendingUsers.map((user) => (
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

export default DocumentsPendingUsers;
