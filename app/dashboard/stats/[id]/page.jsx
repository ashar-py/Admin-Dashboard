"use client";
import { useState, useEffect } from 'react';
import { fetchUserInfo } from "@/app/api/userinfo";
import retrieveChatHistory from "@/app/api/chathistory"; 
import styles from "@/app/ui/dashboard/stats/userinfo/userinfo.module.css";
import Image from "next/image";

const UserInfo = ({ phoneNumber }) => {
    const [userData, setUserData] = useState(null);
    const [chatHistory, setChatHistory] = useState(null); 
    const [loadingChatHistory, setLoadingChatHistory] = useState(false); 
    const [showChatHistory, setShowChatHistory] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchUserInfo(phoneNumber);
                setUserData(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, [phoneNumber]);

    useEffect(() => {
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
    }, [phoneNumber]);

    const handleChatHistoryClick = () => {
        setShowChatHistory(!showChatHistory);
    };

    const renderChatHistoryButton = () => {
        return (
            <button onClick={handleChatHistoryClick} className={styles.toggleButton}>
                {loadingChatHistory ? <Image src="/Spinner.gif" width="20" height="20" alt="Loading Spinner" /> : (showChatHistory ? 'Hide Chat History' : 'Show Chat History')}
            </button>
        );
    };

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
            {renderChatHistoryButton()}
            {renderChatHistory()}
        </div>
    );
};

export default UserInfo;


// "use client";
// import { useState, useEffect } from 'react';
// import { fetchUserInfo } from "@/app/api/userinfo";
// import retrieveChatHistory from "@/app/api/chathistory"; 
// import styles from "@/app/ui/dashboard/stats/userinfo/userinfo.module.css";
// import Image from "next/image";
// import { useRouter } from 'next/navigation';

// const UserInfo = () => {
//     const router = useRouter();
//     const [phoneNumber, setPhoneNumber] = useState(null);
//     const [userData, setUserData] = useState(null);
//     const [activeThread, setActiveThread] = useState(null);

//     useEffect(() => {
//         if (router.asPath) {
//             const pathParts = router.asPath.split('/');
//             const extractedPhoneNumber = pathParts[pathParts.length - 1];
//             setPhoneNumber(extractedPhoneNumber);
//         }
//     }, [router.asPath]);

//     useEffect(() => {
//         const fetchData = async () => {
//             if (phoneNumber) {
//                 try {
//                     const response = await fetchUserInfo(phoneNumber);
//                     if (response.status === "success") {
//                         setUserData(response.data);
//                         setActiveThread(response.data.threads.active_threads[0]); // Assuming there's only one active thread
//                     }
//                 } catch (error) {
//                     console.error('Error fetching user data:', error);
//                 }
//             }
//         };
//         fetchData();
//     }, [phoneNumber]);

//     return (
//         <div className={styles.container}>
//             <span className={styles.title}>User Information</span>
//             {userData && (
//                 <div className={styles.userInfoContainer}>
//                     <div className={styles.tile}>
//                         <span>Customer Details</span>
//                         <div className={styles.content}>
//                             <p><strong>Name:</strong> {userData.name}</p>
//                             <p><strong>Phone:</strong> {userData.phone_no}</p>
//                             <p><strong>Email:</strong> {userData.email}</p>
//                             <p><strong>Postal Address:</strong> {userData.postal_address}</p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//             {activeThread && (
//                 <div className={styles.chatHistory}>
//                     <h3>Active Thread Details</h3>
//                     <div className={styles.tile}>
//                         <span>Thread Information</span>
//                         <div className={styles.content}>
//                             <p><strong>Start Date:</strong> {new Date(activeThread.start_datetime * 1000).toLocaleString()}</p>
//                             <p><strong>Channel:</strong> {activeThread.channel}</p>
//                             <p><strong>Thread ID:</strong> {activeThread.thread_id}</p>
//                         </div>
//                     </div>
//                     <div className={styles.tile}>
//                         <span>Insurance Details</span>
//                         <div className={styles.content}>
//                             <p><strong>Bike:</strong> {activeThread.bike}</p>
//                             <p><strong>Prefix:</strong> {activeThread.prefix}</p>
//                             <p><strong>Premium:</strong> {activeThread.premium}</p>
//                         </div>
//                     </div>
//                     <div className={styles.tile}>
//                         <span>Summary</span>
//                         <div className={styles.content}>
//                             <p>{activeThread.summary}</p>
//                         </div>
//                     </div>
//                     <div className={styles.tile}>
//                         <span>Lead Quality</span>
//                         <div className={styles.content}>
//                             <p><strong>Customer Sentiment:</strong> {activeThread.intent}</p>
//                             <p><strong>Lead Quality:</strong> {activeThread.status}</p>
//                             <p><strong>Call to Action:</strong> {activeThread.call_to_action}</p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UserInfo;









