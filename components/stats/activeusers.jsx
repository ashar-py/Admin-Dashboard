// // ActiveUsers.js
// "use client";
// import styles from "@/app/ui/dashboard/stats/stats.module.css";
// import React, { useEffect, useState } from "react";
// import { fetchActiveUsers } from "@/app/api/activeusers";
// import Image from "next/image";
// import Link from "next/link";

// const ActiveUsers = () => {
//   const [activeUsers, setActiveUsers] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dataObject = await fetchActiveUsers();
//         const dataArray = Object.values(dataObject);

//         // Log the received data to the console to verify
//         //console.log("Received Data:", dataArray);

//         setActiveUsers(dataArray);

//         // Log the updated state
//         //console.log("Mapped data:", dataArray);

//         setError(null); // Clear any previous errors
//       } catch (error) {
//         console.error("Error fetching active users:", error);
//         setError(error.message || "An error occurred while fetching data.");
//       }
//     };

//     fetchData(); // No need to pass activeUsers here
//   }, []); // Empty dependency array to run useEffect only once

//   return (
//     <div className={styles.mainContainer}>
//       <h4>Active Users</h4>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <table className={styles.userTable}>
//           <thead>
//             <tr>
//               <th>NAME</th>
//               <th>PHONE NUMBER</th>
//               <th>STATUS</th>
//               {/* <th>EMAIL</th> */}
//             </tr>
//           </thead>{" "}
//           <br />
          
//           <tbody className={styles.body}>
//             {activeUsers.map((userData) => {
//               return Object.entries(userData).map(([phone_no, userData]) => {
//                 // Check if the required fields are present
//                 if (
//                   userData.name &&
//                   userData.phone_no &&
//                   userData.status &&
//                   userData.assistant_id
//                 ) {
//                   return (
//                     <tr key={userData.assistant_id}>
//                       <td>{userData.name}</td>
//                       <td>{userData.phone_no}</td>
//                       <td>{userData.status}</td>
//                       <td>
//                         <div className={styles.buttons}>
//                           <Link
//                             href={`/dashboard/stats/${userData.assistant_id}`}
//                           >
//                             <button
//                               className={`${styles.button} ${styles.view}`}
//                             >
//                               View
//                             </button>
//                           </Link>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 } else {
//                   // Handle the case where data is missing or incomplete
//                   console.warn("Incomplete data:", userData);
//                   return null; // Skip rendering for incomplete data
//                 }
//               });
//             })}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ActiveUsers;


// ActiveUsers.js
"use client";
import styles from "@/app/ui/dashboard/stats/stats.module.css";
import React, { useEffect, useState } from "react";
import { fetchActiveUsers } from "@/app/api/activeusers";

const ActiveUsers = ({ initialActiveUsers }) => {
  const [activeUsers, setActiveUsers] = useState(initialActiveUsers);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataObject = await fetchActiveUsers();

        // Convert the object into an array of user objects
        const dataArray = Object.entries(dataObject).map(([phoneNo, userData]) => ({
          phoneNo,
          ...userData,
        }));
        console.log("Received Data:", dataArray);

        setActiveUsers(dataArray);
        console.log("Mapped data:", dataArray);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching active users:", error);
        setError(error.message || "An error occurred while fetching data.");
      }
    };

    // Check if initialActiveUsers is provided, and if not, fetch the data
    if (!initialActiveUsers) {
      fetchData();
    }
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
            </tr>
          </thead>
          <tbody>
            {activeUsers && activeUsers.map((userData) => (
              <tr key={userData.phoneNo}>
                <td>{userData.name}</td>
                <td>{userData.phoneNo}</td>
                <td>{userData.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  // Fetch initial active users data on the server side
  const initialActiveUsers = await fetchActiveUsers();

  // Pass the initial data as props to the component
  return {
    props: {
      initialActiveUsers,
    },
  };
}

export default ActiveUsers;

