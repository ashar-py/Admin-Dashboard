// // ActiveUsers.js
// "use client";
// import styles from "@/app/ui/dashboard/stats/stats.module.css";
// import React, { useEffect, useState } from "react";
// import { fetchActiveUsers } from "@/app/api/activeusers";

// const ActiveUsers = () => {
//   const [activeUsers, setActiveUsers] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dataObject = await fetchActiveUsers();
//         const dataArray = Object.values(dataObject);

//         // Log the received data to the console to verify
//         console.log("Received Data:", dataArray);

//         setActiveUsers(dataArray);

//         // Log the updated state
//         console.log("Mapped data:", dataArray);

//         setError(null); // Clear any previous errors
//       } catch (error) {
//         console.error("Error fetching active users:", error);
//         setError(error.message || "An error occurred while fetching data.");
//       }
//     };

//     fetchData(); // No need to pass activeUsers here
//   }, []); // Empty dependency array to run useEffect only once

//   return (
//     <div className={styles.container}>
//       <h2>Active Users</h2>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <table className={styles.userTable}>
//           <thead>
//             <tr>
//               <th>NAME</th>
//               <th>NUMBER</th>
//               <th>STATUS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {activeUsers.map((user) => (
//               <tr key={user.phone_no}>
//                 <td>{user.name}</td>
//                 <td>{user.phone_no}</td>
//                 <td>{user.status}</td>
//               </tr>
//             ))}

           
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ActiveUsers;


// ActiveUsers.js
// ActiveUsers.js
"use client";
import styles from "@/app/ui/dashboard/stats/stats.module.css";
import React, { useEffect, useState } from "react";
import { fetchActiveUsers } from "@/app/api/activeusers";

// ActiveUsers.js
// ... (import statements)

const ActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataObject = await fetchActiveUsers();
        const dataArray = Object.values(dataObject);

        // Log the received data to the console to verify
        console.log("Received Data:", dataArray);

        setActiveUsers(dataArray);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching active users:", error);
        setError(error.message || "An error occurred while fetching data.");
      }
    };

    fetchData(); // No need to pass activeUsers here
  }, []); // Empty dependency array to run useEffect only once

  return (
    <div className={styles.container}>
      <h2>Active Users</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <table className={styles.userTable}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>PHONE NUMBER</th>
              <th>STATUS</th>
              
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {activeUsers.map((userData) => (
              <tr key={userData.phone_no}>
                <td>{userData.name}</td>
                <td>{userData.phone_no}</td>
                <td>{userData.status}</td>
                
                {/* Add more cells for additional details */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ActiveUsers;

