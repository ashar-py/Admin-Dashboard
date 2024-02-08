// "use client";
// import { useState, useEffect } from 'react';
// import { fetchUserInfo } from "@/app/api/userinfo";
// import retrieveChatHistory from "@/app/api/chathistory"; 
// import styles from "@/app/ui/dashboard/stats/userinfo/userinfo.module.css";
// import Image from "next/image";
// import Search from '@/app/ui/dashboard/search/search';

// const UserInfo = ({ phone_no }) => {
//     const [userData, setUserData] = useState(null);
//     const [chatHistory, setChatHistory] = useState(null); 
//     const [loadingChatHistory, setLoadingChatHistory] = useState(false); 
//     const [showChatHistory, setShowChatHistory] = useState(false);

    

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
               
//                 const userData = await fetchUserInfo(phone_no);
//                 setUserData(userData);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };
//         fetchData();
//     }, [phone_no]);

//     useEffect(() => {
//         const fetchChatHistory = async () => {
//             try {
//                 setLoadingChatHistory(true);
//                 const history = await retrieveChatHistory(phoneNumber, 'bimakartbike');
//                 setChatHistory(history);
//                 setLoadingChatHistory(false);
//             } catch (error) {
//                 console.error('Error fetching chat history:', error);
//                 setLoadingChatHistory(false);
//             }
//         };
//         fetchChatHistory();
//     }, [phoneNumber]);

//     const handleChatHistoryClick = () => {
//         setShowChatHistory(!showChatHistory);
//     };

//     const renderChatHistoryButton = () => {
//         return (
//             <button onClick={handleChatHistoryClick} className={styles.toggleButton}>
//                 {loadingChatHistory ? <Image src="/Spinner.gif" width="20" height="20" alt="Loading Spinner" /> : (showChatHistory ? 'Hide Chat History' : 'Show Chat History')}
//             </button>
//         );
//     };

//     const renderChatHistory = () => {
//         if (!chatHistory) {
//             return null;
//         }

//         if (!showChatHistory) {
//             return null;
//         }

     
//         return (
//             <div className={styles.chatHistory}>
//                 <h3>Chat History</h3>
               
//                 {chatHistory.map((item, index) => (
//                     <div key={index}>
//                         <p>{item.timestamp}: {item.message}</p>
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     const renderUserInfo = () => {
//         if (!userData) {
//             return null;
//         }

//         return (
//             <div className={styles.userInfoContainer}>
//                 <div className={styles.tile}>
//                     <span>Customer Details</span>
//                     <div className={styles.content}>
//                         <p><strong>Name:</strong> {userData.name}</p>
//                         <p><strong>Phone:</strong> {userData.phone_no}</p>
//                         <p><strong>Product:</strong> {userData.threads.active_threads[0].bike}</p>
//                         <p><strong>Provider:</strong> {userData.threads.active_threads[0].prefix}</p>
//                     </div>
//                 </div>
//                 <div className={styles.tile}>
//                     <span>Call Summary</span>
//                     <div className={styles.content}>
//                         <p>{userData.threads.active_threads[0].summary}</p>
//                     </div>
//                 </div>
//                 <div className={styles.tile}>
//                     <span>Lead Quality</span>
//                     <div className={styles.content}>
//                         <p><strong>Customer Sentiment:</strong> {userData.threads.active_threads[0].intent}</p>
//                         <p><strong>Lead Quality:</strong> {userData.threads.active_threads[0].status}</p>
//                         <p><strong>Recommended next steps:</strong> {userData.threads.active_threads[0].recommendation}</p>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className={styles.container}>
//             <span className={styles.title}>User Information</span>
//             {renderUserInfo()}
//             {/* {renderChatHistoryButton()}
//             {renderChatHistory()} */}
//         </div>
//     );
// };


// UserInfo.js

"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { fetchUserInfo } from "@/app/api/userinfo";
import retrieveChatHistory from "@/app/api/chathistory"; 
import styles from "@/app/ui/dashboard/stats/userinfo/userinfo.module.css";
import Image from "next/image";


const UserInfo = () => {
  
    const router = useRouter();
    


    const [userData, setUserData] = useState(null);
    const [chatHistory, setChatHistory] = useState(null); 
    const [loadingChatHistory, setLoadingChatHistory] = useState(false); 
    const [showChatHistory, setShowChatHistory] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState(null);

    //useEffect(() => {
//         // Check if router.query is defined and has phoneNumber
//     if (router.query && router.query.phoneNumber) {
//         const { phoneNumber } = router.query;
//         setPhoneNumber(phoneNumber); // Save phoneNumber in state
    
         
    
//         // Fetch user data
//         const fetchInfo = async () => {
//           try {
//             const userData = await fetchUserInfo(phoneNumber);
//             setUserData(userData);
//           } catch (error) {
//             console.error('Error fetching user data:', error);
//           }
//         };
//          fetchInfo();
//  } },  [phoneNumber]);
    


//     useEffect(() => {
//         const fetchChatHistory = async () => {
//             try {
//                 if (phoneNumber) {
//                     setLoadingChatHistory(true);
//                     const history = await retrieveChatHistory(phoneNumber, 'bimakartbike');
//                     setChatHistory(history);
//                     setLoadingChatHistory(false);
//                 }
//             } catch (error) {
//                 console.error('Error fetching chat history:', error);
//                 setLoadingChatHistory(false);
//             }
//         };
//         fetchChatHistory();
//     }, [phoneNumber]);

//     const handleChatHistoryClick = () => {
//         setShowChatHistory(!showChatHistory);
//     };

//     const renderChatHistoryButton = () => {
//         return (
//             <button onClick={handleChatHistoryClick} className={styles.toggleButton}>
//                 {loadingChatHistory ? <Image src="/Spinner.gif" width="20" height="20" alt="Loading Spinner" /> : (showChatHistory ? 'Hide Chat History' : 'Show Chat History')}
//             </button>
//         );
//     };

// Fetch user data and chat history when component mounts
useEffect(() => {
    // Check if router.query is defined and has phoneNumber
    if (router.query && router.query.phoneNumber) {
      const { phoneNumber } = router.query;
      setPhoneNumber(phoneNumber); // Save phoneNumber in state

      // Fetch user data
      const fetchData = async () => {
        try {
          const userData = await fetchUserInfo(phoneNumber);
          setUserData(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      fetchData();

      // Fetch chat history
      const fetchChatHistory = async () => {
        try {
          setLoadingChatHistory(true);
          const history = await retrieveChatHistory(phoneNumber, 'bimakartbike');
          setChatHistory(history);
          setLoadingChatHistory(false);
        } catch (error) {
          console.error('Error fetching chat history:', error);
          setLoadingChatHistory(false);
        }
      };
      fetchChatHistory();
    }
  }, [router.query]); // Re-run effect when router.query changes

    const renderChatHistory = () => {
        if (!chatHistory) {
            return null;
        }

        if (!showChatHistory) {
            return null;
        }

        return (
            <div className={styles.chatHistory}>
                <h3>Chat History</h3>
                {chatHistory.map((item, index) => (
                    <div key={index}>
                        <p>{item.timestamp}: {item.message}</p>
                    </div>
                ))}
            </div>
        );
    };

    const renderUserInfo = () => {
        if (!userData) {
            return null;
        }

        return (
            <div className={styles.userInfoContainer}>
                <div className={styles.tile}>
                    <span>Customer Details</span>
                    <div className={styles.content}>
                        <p><strong>Name:</strong> {userData.name}</p>
                        <p><strong>Phone:</strong> {userData.phone_no}</p>
                        <p><strong>Product:</strong> {userData.threads.active_threads[0].bike}</p>
                        <p><strong>Provider:</strong> {userData.threads.active_threads[0].prefix}</p>
                    </div>
                </div>
                <div className={styles.tile}>
                    <span>Call Summary</span>
                    <div className={styles.content}>
                        <p>{userData.threads.active_threads[0].summary}</p>
                    </div>
                </div>
                <div className={styles.tile}>
                    <span>Lead Quality</span>
                    <div className={styles.content}>
                        <p><strong>Customer Sentiment:</strong> {userData.threads.active_threads[0].intent}</p>
                        <p><strong>Lead Quality:</strong> {userData.threads.active_threads[0].status}</p>
                        <p><strong>Recommended next steps:</strong> {userData.threads.active_threads[0].recommendation}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <span className={styles.title}>User Information</span>
            {renderUserInfo()}
            {/* {renderChatHistoryButton()} */}
            {renderChatHistory()}
        </div>
    );
};

export default UserInfo;





















