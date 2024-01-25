"use client"; // use client
import styles from "@/app/ui/dashboard/conversations/conversations.module.css";
//import styles from "@/app/dashboard/conversations/conversations.module.css";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatMessage from "@/components/chat/chatmessage";
import ToggleSwitch from "@/components/chat/toggleswitch";
//import styles from './chatbot.module.css';


// src/components/Chatbot.jsx


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
    <div className={styles.chatbotContainer}>
      <div id="chat-container" className={styles.chatContainer}>
        {messages.map((msg, index) => (
          <ChatMessage className={styles.chatMessage} key={index} message={msg.message} isBot={msg.isBot} />
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
      <ToggleSwitch className={styles.toggleSwitch} isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
    </div>
  );
};

export default Chatbot;
