// ActiveUsers.js
"use client";
import React, { useEffect, useState } from "react";
import { fetchActiveUsers } from "@/app/api/activeusers";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from '@/app/ui/dashboard/search/search';
import styles from "@/app/ui/dashboard/stats/table/list.module.css";

const ActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [error, setError] = useState(null);

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
    <div className={styles.mainContainer}>
      <Search placeholder="Search for a user..." />
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
            </tr>
          </thead>
          <tbody className={styles.body}>
            {activeUsers.map((userData) => {
              return Object.entries(userData).map(([phone_no, userData]) => {
                if (
                  userData.name &&
                  userData.phone_no &&
                  userData.status &&
                  userData.assistant_id
                ) {
                  return (
                    <tr key={userData.phone_no}>
                      <td>{userData.name}</td>
                      <td>{userData.phone_no}</td>
                      <td>{userData.status}</td>
                      <td>
                        <div className={styles.buttons}>
                          <Link
                            href={{
                              pathname: "./${phoneNumber}",
                              query: { phoneNumber: userData.phone_no }
                            }}
                            className={`${styles.button} ${styles.view}`}
                          >
                            View
                          </Link>
                        </div>
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
      )}
      <Pagination />
    </div>
  );
};

export default ActiveUsers;








// "use client";
// import styles from "@/app/ui/dashboard/stats/table/list.module.css";
// import React, { useEffect, useState } from "react";
// import { fetchActiveUsers } from "@/app/api/activeusers";
// import Image from "next/image";
// import Link from "next/link";
// import Pagination from "@/app/ui/dashboard/pagination/pagination";
// import UserInfo from "@/components/stats/userinfo";
// import { useSelectedPhoneNo } from "@/components/stats/selectedPhoneNoContext";
// import { SelectedPhoneNoProvider } from "@/components/stats/selectedPhoneNoContext";

// const ActiveUsers = () => {
//   const [activeUsers, setActiveUsers] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedPhoneNo, setSelectedPhoneNo] = useSelectedPhoneNo(); // State to store selected phone number

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
//     <SelectedPhoneNoProvider>
    
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
//               <th></th>
//             </tr>
//           </thead>
//           <tbody className={styles.body}>
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
//                         <Link  href={`/dashboard/stats/userinfo`}>
                        
//                         <div className={styles.buttons}>
                         
                          
//                           <button
                          
//                           onClick={() => setSelectedPhoneNo(userData.phone_no)}
                            
//                             className={`${styles.button} ${styles.view}`}
                            

//                           >
//                             View
//                           </button>
//                         </div>
                        
//                         </Link>
//                       </td>
//                     </tr>
//                   );
//                 } else {
//                   //console.warn("Incomplete data:", userData);
//                   return null;
//                 }
//               });
//             })}
//           </tbody>
//         </table>
//       )}
//       <Pagination />
    
//       {selectedPhoneNo && (
//         <UserInfo phoneNumber={selectedPhoneNo} />
//       )}
//     </div>
//     </SelectedPhoneNoProvider>
//   );
// };

// export default ActiveUsers;









 



