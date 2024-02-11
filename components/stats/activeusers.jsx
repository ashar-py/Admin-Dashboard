

// "use client";

// import React, { useState, useEffect } from "react";
// import { fetchActiveUsers } from "@/app/api/activeusers";
// import UserInfo from "@/components/stats/userinfo";
// import Link from "next/link";
// import styles from "@/app/ui/dashboard/stats/table/list.module.css";

// export const useSelectedPhoneNo = () => {
//   const [selectedPhoneNo, setSelectedPhoneNo] = useState(null);

//   return { selectedPhoneNo, setSelectedPhoneNo };
// };

// const ActiveUsers = () => {
//   const [activeUsers, setActiveUsers] = useState([]);
//   const [error, setError] = useState(null);
//   const { selectedPhoneNo, setSelectedPhoneNo } = useSelectedPhoneNo();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dataObject = await fetchActiveUsers();
//         const dataArray = Object.values(dataObject);
//         setActiveUsers(dataArray);
//         setError(null);
//       } catch (error) {
//         console.error("Error fetching active users:", error);
//         setError(error.message || "An error occurred while fetching data.");
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h4>Active Users</h4>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>NAME</th>
//               <th>PHONE NUMBER</th>
//               <th>STATUS</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {activeUsers.map((userData) => {
//               return Object.entries(userData).map(([phone_no, userData]) => {
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
//                         <button
                          
//                           onClick={() => setSelectedPhoneNo(userData.phone_no)}
                            
//                             className={`${styles.button} ${styles.view}`}    >
//                             View
//                           </button>
                        
                        
//                       </td>
//                     </tr>
//                   );
//                 } else {
//                   console.warn("Incomplete data:", userData);
//                   return null;
//                 }
//               });
//             })}
//           </tbody>
//         </table>
//       )}
//       {selectedPhoneNo && <UserInfo phoneNumber={selectedPhoneNo} />} 
//     </div>
//   );
// };

// export default ActiveUsers;

"use client";
import React, { useState, useEffect } from "react";
import { fetchActiveUsers } from "@/app/api/activeusers";
import UserInfo from "@/components/stats/userinfo";
import Link from "next/link";
import styles from "@/app/ui/dashboard/stats/table/list.module.css";


const ActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPhoneNo, setSelectedPhoneNo] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataObject = await fetchActiveUsers();
        const dataArray = Object.values(dataObject);
        setActiveUsers(dataArray);
        setError(null);
      } catch (error) {
        console.error("Error fetching active users:", error);
        setError(error.message || "An error occurred while fetching data.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h4>Active Users</h4>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <table className={styles.mainTable}>
            <thead>
              <tr>
                <th>NAME</th>
                <th>PHONE NUMBER</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {activeUsers.map((userData) => {
                return Object.entries(userData).map(([phone_no, userData]) => {
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
                          <button 
                            onClick={() => setSelectedPhoneNo(userData.phone_no)}
                            className={`${styles.button} ${styles.view}`}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  } else {
                    console.warn("Incomplete data:", userData);
                    return null;
                  }
                });
              })}
            </tbody>
          </table>
          {selectedPhoneNo && (
            <div className={styles.popup}>
              <button className={styles.button} onClick={() => setSelectedPhoneNo(null)}>Close</button>
              <UserInfo phoneNumber={selectedPhoneNo} /> 
              
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ActiveUsers;
