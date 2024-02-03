// "use client"; // use client
// import styles from "@/app/ui/dashboard/conversations/conversations.module.css";
// import React, { useState, useEffect } from 'react';
// import ChatMessage from "@/components/chat/chatmessage";
// import ToggleSwitch from "@/components/chat/toggleswitch";
// import { callApi } from "@/app/api/ai"; // Import the callApi function from ai.js

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [isEnabled, setIsEnabled] = useState(true);
//   const [inputMessage, setInputMessage] = useState('');
  

//   const toggleSwitch = () => {
//     setIsEnabled(!isEnabled);
//   };

//   const sendMessage = async () => {
//     if (inputMessage.trim() === '') return;

//     const newMessage = { message: inputMessage, isBot: false };
//     setMessages((prevMessages) => [...prevMessages, newMessage]);
//     setInputMessage('');

//     if (isEnabled) {
//       try {
//         // Call the API and get the response
//         const botReply = await callApi(inputMessage);

//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { message: botReply, isBot: true },
//         ]);
//       } catch (error) {
//         console.error('Error communicating with the API:', error);
//       }
//     } else {
//       // Simulate a response from customer support
//       const supportReply =
//         'Your message has been forwarded to our support team. They will get back to you soon.';
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { message: supportReply, isBot: true },
//       ]);
//     }
//   };

//   useEffect(() => {
//     const chatContainer = document.getElementById('chat-container');
//     chatContainer.scrollTop = chatContainer.scrollHeight;
//   }, [messages]);

//   return (
//     <div className={styles.chatbotContainer}> 
//     AI Response
//       <ToggleSwitch className={styles.toggleSwitch} isEnabled={isEnabled} toggleSwitch={toggleSwitch} />

//       <div id="chat-container" className={styles.chatContainer}>
//         {messages.map((msg, index) => (
//           <ChatMessage
//             key={index}
//             message={msg.message}
//             isBot={msg.isBot}
//             className={msg.isBot ? styles.botMessage : styles.userMessage}
//           />
//         ))}
//       </div>
//       <div className={styles.inputContainer}>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={inputMessage}
//           onChange={(e) => setInputMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

"use client";

import React, { useState, useEffect } from 'react';
import styles from "@/app/ui/dashboard/conversations/conversations.module.css";
import ToggleSwitch from "@/components/chat/toggleswitch";
import ChatMessage from "@/components/chat/chatmessage";
import { callApi } from "@/app/api/ai";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [searchType, setSearchType] = useState('bimabike');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
    setInputMessage(''); // Reset inputMessage when search type changes
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{12}$/; // Assuming a 12-digit phone number
    return phoneRegex.test(phoneNumber);
  };

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const isSendButtonDisabled = () => {
    return (
      !isValidPhoneNumber(userPhoneNumber) ||
      !inputMessage.trim()
    );
  };

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newMessage = { message: inputMessage, isBot: false };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage('');

    if (isEnabled) {
      try {
        const prefix = searchType === 'bimabike' ? 'bimabike' : 'bimahublife'; // Adjust based on your logic
        const phoneNumber = userPhoneNumber; // Assuming userPhoneNumber is valid for both search types
        const botReply = await callApi(inputMessage, prefix, phoneNumber);

        setMessages((prevMessages) => [
          ...prevMessages,
          { message: botReply, isBot: true },
        ]);
      } catch (error) {
        console.error('Error communicating with the API:', error);
      }
    } else {
      const supportReply =
        'Your message has been forwarded to our support team. They will get back to you soon.';
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: supportReply, isBot: true },
      ]);
    }
  };

  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.topContainer}>
        {/* Dropdown for selecting search type */}
        <div className={styles.dropdownContainer}>
          <label>Select Search Type:</label>
          <select value={searchType} onChange={handleSearchTypeChange}>
            <option value="bimakartbike">BimaBike</option>
            <option value="bimahublife">BimaHubLife</option>
          </select>
        </div>
        
        {/* User's phone number input */}
        <div className={styles.inputContainer}>
          <label>Enter your phone number with countrycode:</label>
          <input
            type="text"
            placeholder="e.g., 919422346952"
            value={userPhoneNumber}
            onChange={(e) => setUserPhoneNumber(e.target.value)}
          />
        </div>

        
      </div>

      {/* {searchType !== 'bimabike' && (
        <div className={styles.inputContainer}>
          <label>Enter phone number:</label>
          <input
            type="text"
            placeholder="e.g., 919422346952"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
        </div>
      )} */}

      <ToggleSwitch
        className={styles.toggleSwitch}
        isEnabled={isEnabled}
        toggleSwitch={toggleSwitch}
      />

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
        <button onClick={sendMessage} disabled={isSendButtonDisabled()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;



