// PaymentLinkPendingUsers.js
"use client";
import styles from "@/app/ui/dashboard/stats/stats.module.css";
import React, { useEffect, useState } from 'react';
//import { fetchPaymentLinkPendingUsers } from './paymentLinkPendingUsers'; // Adjust the path accordingly

const PaymentLinkPendingUsers = () => {
  const [paymentLinkPendingUsers, setPaymentLinkPendingUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPaymentLinkPendingUsers();
        setPaymentLinkPendingUsers(data); // Assuming the data is an array of payment link pending users
      } catch (error) {
        console.error('Error fetching payment link pending users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Payment Link Pending Users</h2>
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
          {paymentLinkPendingUsers.map((user) => (
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

export default PaymentLinkPendingUsers;
