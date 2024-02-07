// ActiveUsers.js
"use client";
import styles from "@/app/ui/dashboard/stats/table/list.module.css";
import React, { useEffect, useState } from "react";
import { fetchActiveUsers } from "@/app/api/activeusers";
import Image from "next/image";
import Link from "next/link";

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
              <th></th>
              {/* <th>EMAIL</th> */}
            </tr>
          </thead>{" "}
          <br />
          
          <tbody className={styles.body}>
            {activeUsers.map((userData) => {
              return Object.entries(userData).map(([phone_no, userData]) => {
                // Check if the required fields are present
                if (
                  userData.name &&
                  userData.phone_no &&
                  userData.status &&
                  userData.assistant_id
                ) {
                  return (
                    <tr key={userData.assistant_id}>
                      <td>{userData.name}</td>
                      <td>{userData.phone_no}</td>
                      <td>{userData.status}</td>
                      <td>
                        <div className={styles.buttons}>
                          <Link
                            href={`/dashboard/stats/${userData.phone_no}`}
                          >
                            <button
                              className={`${styles.button} ${styles.view}`}
                            >
                              View
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                } else {
                  // Handle the case where data is missing or incomplete
                  console.warn("Incomplete data:", userData);
                  return null; // Skip rendering for incomplete data
                }
              });
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ActiveUsers;





 



