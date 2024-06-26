"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from "@/app/ui/dashboard/conversations/conversations.module.css";
import ToggleSwitch from "@/components/chat/toggleswitch";
import ChatMessage from "@/components/chat/chatmessage";
import retrieveChatHistory from "@/app/api/chathistory";
import { callApi } from "@/app/lib/api/chat";
import {resetChat} from "@/app/lib/api/reset_chat"; 
import Image from 'next/image';

function useChatScroll(dep) {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);
  return ref;
}

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [searchType, setSearchType] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [isPhoneNumberEntered, setIsPhoneNumberEntered] = useState(false);
  const [loading, setLoading] = useState(false); 
  const chatContainerRef = useChatScroll(messages);

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
    setInputMessage('');
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{12}$/;
    return phoneRegex.test(phoneNumber);
  };

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    if (!isValidPhoneNumber(userPhoneNumber)) {
      alert('Please enter a valid phone number first.');
      return;
    }

    const newUserMessage = { role: 'user', content: inputMessage };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputMessage('');
    setLoading(true); // Start loading spinner

    if (isEnabled) {
      try {
        const prefix = searchType;
        const phoneNumber = userPhoneNumber;
        const botReply = await callApi(inputMessage, prefix, phoneNumber);

        const newBotMessage = { role: 'assistant', content: botReply };
        setMessages((prevMessages) => [...prevMessages, newBotMessage]);
      } catch (error) {
        console.error('Error communicating with the API:', error);
      } finally {
        setLoading(false); // Stop loading spinner
      }
    } else {
      const supportReply =
        'Your message has been forwarded to our support team. They will get back to you soon.';
      const newSupportMessage = { role: 'assistant', content: supportReply };
      setMessages((prevMessages) => [...prevMessages, newSupportMessage]);
      setLoading(false); // Stop loading spinner
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (!isValidPhoneNumber(userPhoneNumber)) {
        alert('Please enter a valid phone number first.');
      } else {
        sendMessage();
      }
    }
  };

  const retrieveChat = async () => {
    try {
      const chatHistory = await retrieveChatHistory(userPhoneNumber, searchType);

      const messagesArray = Array.isArray(chatHistory.data)
        ? chatHistory.data
        : chatHistory.data?.messages || [];

      // Map and append the new messages to the end of the existing messages array
      setMessages((prevMessages) => [
        ...prevMessages,
        ...messagesArray.map(({ role, content }) => ({ role, content })).reverse(), // Reverse the order
      ]);
    } catch (error) {
      console.error('Error retrieving chat history:', error);
    }
  };

  const handlePhoneNumberChange = (event) => {
    setUserPhoneNumber(event.target.value);
    setIsPhoneNumberEntered(!!event.target.value && isValidPhoneNumber(event.target.value));
  };

  const resetChatHandler = async () => {
    try {
      const response = await resetChat(inputMessage, searchType, userPhoneNumber);
      // Clear chat messages and display welcome message
      setMessages([{ role: 'assistant', content: response.data.welcome_message }]);
    } catch (error) {
      console.error('Error resetting chat:', error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div>
          <label>Select Customer</label>
          <select className={styles.dropdown} value={searchType} onChange={handleSearchTypeChange}>
            <option value="#">SELECT</option>
            <option value="trinilegacymocer">MOCER</option>
            <option value="trinimocer">TRINIMOCER</option>
          </select>
        </div>

        <div className={styles.inputTopContainer}>
          <input
            type="text"
            placeholder="Enter Number"
            value={userPhoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>

        <div>
          <ToggleSwitch
            className={styles.toggleSwitch}
            isEnabled={isEnabled}
            toggleSwitch={toggleSwitch}
          />
          <div className={styles.switchText}><span>{isEnabled ? 'AI Enabled' : 'AI Disabled'}</span></div>
        </div>

        <button className={styles.historyButton} onClick={retrieveChat}>
          Chat history
        </button>

        
        
      </div>

      <div className={styles.chatbotContainer} ref={chatContainerRef}>

        <div className={styles.chatContainer}>
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              role={msg.role}
              content={msg.content}
              className={msg.role === 'assistant' ? styles.botMessage : styles.userMessage}
            />
          ))}
          {loading && <Image className={styles.image}  src="/Rolling.gif" width="50" height="50" alt="Loading..." />}
        </div>

      </div>


      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={sendMessage} disabled={!isPhoneNumberEntered}>
          Send
        </button>
        <button  onClick={resetChatHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Chat;