// "use client";
// import styles from "@/app/ui/dashboard/stats/singleStat/singleStat.module.css"
// import Image from "next/image"
// import Chatbot from "@/components/chat/chatbot"
// import { fetchUser } from "@/app/lib/data";



//   const UserInfo =  () => {
  
   
//     return (
//         <div className={styles.container}>
//             <span className={styles.title}>Name</span>
//             <div className={styles.top}>
//                 <div className={styles.details}>
//                     <span>Customer Details</span>
//                     <div className={styles.content}>
//                         Name: Rakesh Kumar<br></br>
//                         Phone: 9898989898<br></br>
//                         Product: XYZ<br></br>
//                         Provider: ABC
//                     </div>
//                 </div>
//                 <div className={styles.summary}>
//                     <span>Call Summary</span>
//                     <div className={styles.content}>
//                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio expedita, delectus dignissimos sed cupiditate magnam suscipit vero, alias nesciunt eum laudantium repellat nemo similique explicabo velit libero quibusdam in.
//                     </div>
//                 </div>
//                 <div className={styles.lead}>
//                     <span>Lead Quality</span>
//                     <div className={styles.content}>
//                         Customer Sentiment: Positive<br></br>
//                         Lead Quality: High<br></br>
//                         Recommended next steps: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorem, architecto, omnis nesciunt quasi soluta eum
//                     </div>
//                 </div>
//             </div>
            
//              <Image src="/Spinner.gif" width="80" height="80"></Image>
//         </div>
        
//     )
// }

// export default UserInfo

// Import necessary dependencies
"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "@/app/ui/dashboard/stats/userinfo/userinfo.module.css";
import Image from "next/image";

const UserInfo = ({ phoneNumber }) => {
    const [userData, setUserData] = useState(null);
    const [showChatHistory, setShowChatHistory] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://rhd4lozcs6.execute-api.us-east-1.amazonaws.com/api/chatDetails?phone_no=${phone_no}&prefix=bimakartbike`, {
                    headers: {
                        
                    }
                });
                setUserData(response.data.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, [phoneNumber]);

    const handleChatHistoryClick = () => {
        setShowChatHistory(!showChatHistory);
    };

    const renderChatHistory = () => {
        if (!userData) {
            return null;
        }

        if (!showChatHistory) {
            return null;
        }

        // Render chat history based on userData
        return (
            <div className={styles.chatHistory}>
                <h3>Chat History</h3>
                {/* Example chat history rendering */}
                <p>Start datetime: {userData.threads.active_threads[0].start_datetime}</p>
                <p>Summary: {userData.threads.active_threads[0].summary}</p>
            </div>
        );
    };

    const renderUserInfo = () => {
        if (!userData) {
            return <Image src="/Spinner.gif" width="80" height="80" alt="Loading Spinner" />;
        }

        return (
            <div className={styles.top}>
                <div className={styles.details}>
                    <span>Customer Details</span>
                    <div className={styles.content}>
                        Name: {userData.name}<br />
                        Phone: {userData.phone_no}<br />
                        Product: {userData.threads.active_threads[0].bike}<br />
                        Provider: {userData.threads.active_threads[0].prefix}
                    </div>
                </div>
                <div className={styles.summary}>
                    <span>Call Summary</span>
                    <div className={styles.content}>
                        {userData.threads.active_threads[0].summary}
                    </div>
                </div>
                <div className={styles.lead}>
                    <span>Lead Quality</span>
                    <div className={styles.content}>
                        Customer Sentiment: {userData.threads.active_threads[0].intent}<br />
                        Lead Quality: {userData.threads.active_threads[0].status}<br />
                        Recommended next steps: {userData.threads.active_threads[0].recommendation}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <span className={styles.title}>Name</span>
            {renderUserInfo()}
            <button onClick={handleChatHistoryClick} className={styles.toggleButton}>
                {showChatHistory ? 'Hide Chat History' : 'Show Chat History'}
            </button>
            {renderChatHistory()}
        </div>
    );
};

export default UserInfo;


