"use client";
import { useState, useEffect } from 'react';
import { fetchUserInfo } from "@/app/api/userinfo";
import retrieveChatHistory from "@/app/api/chathistory"; 
import styles from "@/app/ui/dashboard/stats/userinfo/userinfo.module.css";
import Image from "next/image";
import { useSelectedPhoneNo } from "@/components/stats/activeusers"; 




const UserInfo = (phoneNumber) => {
    const [userData, setUserData] = useState(null);
    const [chatHistory, setChatHistory] = useState(null); 
    const [loadingChatHistory, setLoadingChatHistory] = useState(false); 
    const [showChatHistory, setShowChatHistory] = useState(false);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchUserInfo(phoneNumber);
                setUserData(userData.data);
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

    return (
        <div className={styles.container}>
            <span className={styles.title}>User Information</span>
            {userData && (
                <div className={styles.userInfoContainer}>
                    <div className={styles.tile}>
                        <span>Customer Details</span>
                        <div className={styles.content}>
                            <p><strong>Name:</strong> {userData.name}</p>
                            <p><strong>Phone:</strong> {userData.phone_no}</p>
                            <p><strong>Email:</strong> {userData.email}</p>
                            <p><strong>Postal Address:</strong> {userData.postal_address}</p>
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
            )}
            <button onClick={handleChatHistoryClick} className={styles.toggleButton}>
                {loadingChatHistory ? <Image src="/Spinner.gif" width="20" height="20" alt="Loading Spinner" /> : (showChatHistory ? 'Hide Chat History' : 'Show Chat History')}
            </button>
            {showChatHistory && chatHistory && (
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
