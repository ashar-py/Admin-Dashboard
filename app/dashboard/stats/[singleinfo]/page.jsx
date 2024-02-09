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

// UserInfo.js

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
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        const fetchData = async () => {
            if (!router.query.phoneNumber) return; // Exit if phoneNumber is undefined

            setLoading(true);

            try {
                // Fetch user data
                const userData = await fetchUserInfo(router.query.phoneNumber);
                setUserData(userData);

                // Fetch chat history
                const history = await retrieveChatHistory(router.query.phoneNumber, 'bimakartbike');
                setChatHistory(history);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [router.query.phoneNumber]);

    return (
        <div className={styles.container}>
            <span className={styles.title}>User Information</span>

            {loading && <p>Loading...</p>}

            {userData && (
                <div className={styles.userInfoContainer}>
                    {/* Render user details */}
                    <div className={styles.tile}>
                        <span>Customer Details</span>
                        <div className={styles.content}>
                            <p><strong>Name:</strong> {userData.name}</p>
                            <p><strong>Phone:</strong> {userData.phone_no}</p>
                            <p><strong>Product:</strong> {userData.threads.active_threads[0].bike}</p>
                            <p><strong>Provider:</strong> {userData.threads.active_threads[0].prefix}</p>
                        </div>
                    </div>
                    {/* Render call summary */}
                    <div className={styles.tile}>
                        <span>Call Summary</span>
                        <div className={styles.content}>
                            <p>{userData.threads.active_threads[0].summary}</p>
                        </div>
                    </div>
                    {/* Render lead quality */}
                    <div className={styles.tile}>
                        <span>Lead Quality</span>
                        <div className={styles.content}>
                            <p><strong>Customer Sentiment:</strong> {userData.threads.active_threads[0].intent}</p>
                            <p><strong>Lead Quality:</strong> {userData.threads.active_threads[0].status}</p>
                            <p><strong>Recommended next steps:</strong> {userData.threads.active_threads[0].recommendation}</p>
                        </div>
                    </div>
                </div>
            )}

            {chatHistory && (
                <div className={styles.chatHistory}>
                    <h3>Chat History</h3>
                    {chatHistory.map((item, index) => (
                        <div key={index}>
                            <p>{item.timestamp}: {item.message}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserInfo;






















