"use client"; // use client
import styles from "@/app/ui/dashboard/conversations/conversations.module.css";
import React, { useState } from 'react';


const ConversationPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    // Add user message to the conversation
    setMessages((prevMessages) => [...prevMessages, { text: inputText, sender: 'user' }]);
    
    // TODO: Call an API or function to get AI response
    // Replace the setTimeout with your actual API call
    setTimeout(() => {
      const aiResponse = 'This is an AI response.'; // Replace with actual AI response
      setMessages((prevMessages) => [...prevMessages, { text: aiResponse, sender: 'ai' }]);
    }, 1000);

    setInputText(''); // Clear the input field
  };

  return (
    <div className={styles.container}>
        <h2 className={styles.header}>Chat with our AI tool</h2>
      <div className={styles.chatbox}>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className={styles.inputbox}>
          <input
          className={styles.input}
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button className={styles.button} onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      <style jsx>{`
      .message {
        display: block;
    padding: 8px;
    margin-bottom: 5px;
    border-radius: 15px;
    width: fit-content;
    word-wrap: break-word;
  }

  .user {
    background-color: #f0fdff;
    margin-left: auto;
    text-align: right;
  }

  .ai {
    background-color: #00c3ff;
    color: white;
    align-self: flex-left;
    text-align: left;
  }
  `}</style>
    </div>
  );
};

export default ConversationPage;