"use client"; // use client
import styles from "@/app/ui/dashboard/conversations/conversations.module.css";
// src/components/Chatbot.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatMessage from "@/components/chat/chatmessage";
import ToggleSwitch from "@/components/chat/toggleswitch";
//import styles from './chatbot.module.css';


const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [inputMessage, setInputMessage] = useState('');

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { message: inputMessage, isBot: false }]);
    setInputMessage('');

    if (isEnabled) {
      try {
        const response = await axios.post('/api/ai', { message: inputMessage });
        const botReply = response.data.reply;
        setMessages([...messages, { message: botReply, isBot: true }]);
      } catch (error) {
        console.error('Error communicating with the AI:', error);
      }
    } else {
      // Simulate a response from customer support
      const supportReply = 'Your message has been forwarded to our support team. They will get back to you soon.';
      setMessages([...messages, { message: supportReply, isBot: true }]);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat when new messages are added
    const chatContainer = document.getElementById('chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
<<<<<<< HEAD
    <div className={styles.chatbotContainer}>
      <div id="chat-container" className={styles.chatContainer}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} isBot={msg.isBot} />
        ))}
=======
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
        
>>>>>>> 67dadd97dc8bc7fa146f5ade93a00203fe6b8da5
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <ToggleSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
    </div>
  );
};

export default Chatbot;
