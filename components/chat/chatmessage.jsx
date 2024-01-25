// src/components/ChatMessage.jsx
"use client";
import React from 'react';

const ChatMessage = ({ message, isBot }) => {
  return (
    <div className={`chat-message ${isBot ? 'bot' : 'user'}`}>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
