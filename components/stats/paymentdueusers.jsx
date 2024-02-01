// PaymentDueUsers.js
"use client";
import styles from "@/app/ui/dashboard/stats/stats.module.css";
import React, { useEffect, useState } from 'react';
//import { fetchPaymentDueUsers } from './paymentDueUsers'; // Adjust the path accordingly

const PaymentDueUsers = () => {
  const [paymentDueUsers, setPaymentDueUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPaymentDueUsers();
        setPaymentDueUsers(data); // Assuming the data is an array of payment due users
      } catch (error) {
        console.error('Error fetching payment due users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Payment Due Users</h2>
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
          {paymentDueUsers.map((user) => (
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

export default PaymentDueUsers;
