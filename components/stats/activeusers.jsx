// "use client";
// import React, { useState, useEffect } from "react";
// import { fetchActiveUsers } from "@/app/api/activeusers";
// import { fetchUserInfo } from "@/app/api/userinfo";
// import UserInfo from "@/components/stats/userinfo";
// import styles from "@/app/ui/dashboard/stats/table/list.module.css";

// const ActiveUsers = () => {
//   const [activeUsers, setActiveUsers] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedPhoneNo, setSelectedPhoneNo] = useState(null);
//   const [dropdownValue, setDropdownValue] = useState("#"); // Default value

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (dropdownValue === "#") {
//           return; // No need to fetch data if the default value is selected
//         }

//         const dataObject = await fetchActiveUsers(dropdownValue); // Pass dropdown value to API
//         const dataArray = Object.values(dataObject);
//         setActiveUsers(dataArray);
//         setError(null);
//       } catch (error) {
//         console.error("Error fetching active users:", error);
//         setError(error.message || "An error occurred while fetching data.");
//       }
//     };

//     fetchData();
//   }, [dropdownValue]); // Fetch data when dropdown value changes

//   const handleDropdownChange = (event) => {
//     setSelectedPhoneNo(null); // Clear selected phone number
//     setDropdownValue(event.target.value);
//     setActiveUsers([]); // Clear old data
//   };

//   const handlePhoneNoSelection = async (phoneNumber) => {
//     try {
//       const userInfo = await fetchUserInfo(phoneNumber, dropdownValue); // Pass dropdown value as prefix
//       console.log(userInfo); // Handle user info data
//     } catch (error) {
//       console.error('Error fetching user info:', error);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>STATS</h2>
//       {/* Dropdown component */}
//       <select className={styles.dropdown} value={dropdownValue} onChange={handleDropdownChange}>
//         <option value="#">SELECT</option>
//         <option value="bimakartbike">BIMAKARTBIKE</option>
//         <option value="dmrchr">DMRCHR</option>
//         <option value="jatangofashion">JATANGOFASHION</option>
//         <option value="liveswitchdemo">LIVESWITCHDEMO</option>
//         <option value="bimahublife">BIMAHUBLIFE</option>
//         <option value="liveswitchdemo1">LIVESWITCHDEMO1</option>
//       </select>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <>
//           <table className={styles.mainTable}>
//             <thead>
//               <tr>
//                 <th>USER NAME</th>
//                 <th>PHONE NUMBER</th>
//                 <th> CHAT SUMMARY</th>
//               </tr>
//             </thead>
//             <tbody>
//               {activeUsers.map((userData) => {
//                 return Object.entries(userData).map(([phone_no, userData]) => {
//                   if (
//                     userData.name &&
//                     userData.phone_no &&
//                     userData.assistant_id
//                   ) {
//                     return (
//                       <tr key={userData.assistant_id}>
//                         <td>{userData.name}</td>
//                         <td>{userData.phone_no}</td>
//                         <td>
//                           <button
//                             onClick={() => {
//                               setSelectedPhoneNo(userData.phone_no);
//                               handlePhoneNoSelection(userData.phone_no); // Call function to fetch user info
//                             }}
//                             className={`${styles.button} ${styles.view}`}
//                           >
//                             View
//                           </button>
//                         </td>
//                       </tr>
//                     );
//                   } else {
//                     console.warn("Incomplete data:", userData);
//                     return null;
//                   }
//                 });
//               })}
//             </tbody>
//           </table>
//           {selectedPhoneNo && (
//             <div className={styles.popupOverlay}>
//               <div className={styles.popup}>
//                 <button className={styles.button} onClick={() => setSelectedPhoneNo(null)}>Close</button>

//                 <UserInfo phoneNumber={selectedPhoneNo} prefix={dropdownValue} />
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default ActiveUsers;

"use client";

import React, { useState, useEffect } from "react";
import { fetchActiveUsers } from "@/app/api/activeusers";
import { fetchUserInfo } from "@/app/api/userinfo";
import UserInfo from "@/components/stats/userinfo";
import styles from "@/app/ui/dashboard/stats/table/list.module.css";
import Link from "next/link";

const ActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPhoneNo, setSelectedPhoneNo] = useState(null);
  const [dropdownValue, setDropdownValue] = useState("#"); // Default value

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (dropdownValue === "#") {
          return; // No need to fetch data if the default value is selected
        }

        const dataObject = await fetchActiveUsers(dropdownValue); // Pass dropdown value to API
        const dataArray = Object.values(dataObject);
        setActiveUsers(dataArray);
        setError(null);
      } catch (error) {
        console.error("Error fetching active users:", error);
        setError(error.message || "An error occurred while fetching data.");
      }
    };

    fetchData();
  }, [dropdownValue]); // Fetch data when dropdown value changes

  const handleDropdownChange = (event) => {
    setSelectedPhoneNo(null); // Clear selected phone number
    setDropdownValue(event.target.value);
    setActiveUsers([]); // Clear old data
  };

  const handlePhoneNoSelection = async (phoneNumber) => {
    try {
      const userInfo = await fetchUserInfo(phoneNumber, dropdownValue); // Pass dropdown value as prefix
      console.log(userInfo); // Handle user info data
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>STATS</h2>
      {/* Dropdown component */}
      <select
        className={styles.dropdown}
        value={dropdownValue}
        onChange={handleDropdownChange}
      >
        <option value="#">SELECT</option>
        <option value="bimakartbike">BIMAKARTBIKE</option>
        <option value="dmrchr">DMRCHR</option>
        <option value="jatangofashion">JATANGOFASHION</option>
        <option value="liveswitchdemo">LIVESWITCHDEMO</option>
        <option value="bimahublife">BIMAHUBLIFE</option>
        <option value="liveswitchdemo1">LIVESWITCHDEMO1</option>
        <option value="liveswitchsoham">LIVESWITCHSOHAM</option>
        <option value="cleartaxtax">Clear Tax</option>
      </select>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <table className={styles.mainTable}>
            <thead>
              <tr>
                <th>USER NAME</th>
                <th>PHONE NUMBER</th>
                <th>DETAILS</th>
                <th> VIEW CHAT</th>
              </tr>
            </thead>
            <tbody>
              {activeUsers.map((userData) => {
                return Object.entries(userData).map(([phone_no, userData]) => {
                  if (
                    userData.name &&
                    userData.phone_no &&
                    userData.assistant_id
                  ) {
                    return (
                      <tr key={userData.assistant_id}>
                        <td>{userData.name}</td>
                        <td>{userData.phone_no}</td>
                        <td>
                          <button
                            onClick={() => {
                              setSelectedPhoneNo(userData.phone_no);
                              handlePhoneNoSelection(userData.phone_no); // Call function to fetch user info
                            }}
                            className={`${styles.button} ${styles.view}`}
                          >
                            View
                          </button>
                        </td>
                        <td>
                          <Link
                            href={{
                              pathname: "./agent_assist",
                              query: {
                                phoneNumber: userData.phone_no,
                                dropdownValue: dropdownValue,
                              },
                            }}
                            className={`${styles.button} ${styles.viewChat}`}
                          >
                            View Chat
                          </Link>
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
            <div className={styles.popupOverlay}>
              <div className={styles.popup}>
                <button
                  className={styles.button}
                  onClick={() => setSelectedPhoneNo(null)}
                >
                  Close
                </button>

                <UserInfo
                  phoneNumber={selectedPhoneNo}
                  prefix={dropdownValue}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ActiveUsers;
