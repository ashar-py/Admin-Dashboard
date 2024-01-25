// src/components/ChatMessage.jsx
"use client";
import React from 'react';
import styles from "@/app/ui/dashboard/conversations/conversations.module.css"


import PropTypes from 'prop-types';


const ChatMessage = ({ message, isBot, className }) => {
  return (
    <div className={`${styles.chatMessage} ${isBot ? styles.botMessage : styles.userMessage} ${className}`}>
      {message}
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.string.isRequired,
  isBot: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default ChatMessage;

