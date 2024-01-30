"use client"; // use client
import styles from "@/app/ui/dashboard/conversations/conversations.module.css";
//import styles from "@/app/dashboard/conversations/conversations.module.css";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatMessage from "@/components/chat/chatmessage";
import ToggleSwitch from "@/components/chat/toggleswitch";
import { callApi } from "@/app/api/ai"; // Import the callApi function from ai.js

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [inputMessage, setInputMessage] = useState('');

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newMessage = { message: inputMessage, isBot: false };
    setMessages([...messages, newMessage]);
    setInputMessage('');

    if (isEnabled) {
      try {
        // Call the API and get the response
        const botReply = await callApi(inputMessage);

        const botMessage = { message: botReply, isBot: true };
        setMessages([...messages, botMessage]);
      } catch (error) {
        console.error('Error communicating with the API:', error);
      }
    } else {
      // Simulate a response from customer support
      const supportReply = 'Your message has been forwarded to our support team. They will get back to you soon.';
      const supportMessage = { message: supportReply, isBot: true };
      setMessages([...messages, supportMessage]);
    }
  };

  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className={styles.chatbotContainer}>
            <ToggleSwitch className={styles.toggleSwitch} isEnabled={isEnabled} toggleSwitch={toggleSwitch} />

      <div id="chat-container" className={styles.chatContainer}>
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.message}
            isBot={msg.isBot}
            className={msg.isBot ? styles.botMessage : styles.userMessage}
          />
        ))}
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
    </div>
  );
};

export default Chatbot;
