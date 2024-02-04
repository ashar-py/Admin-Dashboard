// ActiveUsers.js
"use client";
import styles from "@/app/ui/dashboard/stats/stats.module.css";
import React, { useEffect, useState } from "react";
import { fetchActiveUsers } from "@/app/api/activeusers";

const ActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataObject = await fetchActiveUsers();
        const dataArray = Object.values(dataObject);

        // Log the received data to the console to verify
        //console.log("Received Data:", dataArray);

        setActiveUsers(dataArray);

        // Log the updated state
        //console.log("Mapped data:", dataArray);

        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching active users:", error);
        setError(error.message || "An error occurred while fetching data.");
      }
    };

    fetchData(); // No need to pass activeUsers here
  }, []); // Empty dependency array to run useEffect only once

  return (
    <div className={styles.mainContainer}>
      <h4>Active Users</h4>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <table className={styles.userTable}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>PHONE NUMBER</th>
              <th>STATUS</th>
              {/* <th>EMAIL</th> */}
              
            </tr>
          </thead> <br />
          <tbody>
            {activeUsers.map((user) => (
              Object.entries(user).map(([phoneNo, userData]) => (
                <tr key={phoneNo}>
                  <td>{userData.name}</td>
                  <td>{userData.phone_no}</td>
                  <td>{userData.status}</td>
                  {/* <td>{userData.email}</td> */}
                  
                </tr>
              ))
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ActiveUsers

