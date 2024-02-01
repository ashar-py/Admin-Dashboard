// // ActiveUsers.js
// "use client";
// import styles from "@/app/ui/dashboard/stats/stats.module.css";
// import React, { useEffect, useState } from 'react';
// import { fetchActiveUsers } from "@/app/api/activeusers"; // Adjust the path accordingly


// const ActiveUsers = () => {
//   const [activeUsers, setActiveUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchActiveUsers();
//         setActiveUsers(data); // Assuming the data is an array of active users
//       } catch (error) {
//         console.error('Error fetching active users:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h2>Active Users</h2>
//       <table className={styles.userTable}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Phone Number</th>
//             <th>Last Active</th>
//             <th>Attended by</th>
//           </tr>
//         </thead>
//         <tbody>
//           {activeUsers.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.phoneNumber}</td>
//               <td>{user.lastActive}</td>
//               <td>{user.attendedBy}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ActiveUsers;


// ActiveUsers.js
import React from 'react';
import styles from "@/app/ui/dashboard/stats/stats.module.css";

const ActiveUsers = ({ users }) => {
  return (
    <div className={styles.container}>
      <h2>Active Users</h2>
      <table className={styles.userTable}>
        <thead className={styles.heading}>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Last Active</th>
            <th>Attended by</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {users.map((user) => (
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

export default ActiveUsers;

