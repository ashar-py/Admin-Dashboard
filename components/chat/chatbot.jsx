// // components/chat/Chatbot.js
// import React, { useState, useEffect } from 'react';
// import styles from "@/app/ui/dashboard/conversations/conversations.module.css";
// import ToggleSwitch from "@/components/chat/toggleswitch";
// import ChatMessage from "@/components/chat/chatmessage";
// import retrieveChatHistory from "@/app/api/chathistory";
// import { callApi } from "@/app/api/ai";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [isEnabled, setIsEnabled] = useState(true);
//   const [inputMessage, setInputMessage] = useState('');
//   const [searchType, setSearchType] = useState('bimakartbike');
//   const [userPhoneNumber, setUserPhoneNumber] = useState('');

//   const handleSearchTypeChange = (event) => {
//     setSearchType(event.target.value);
//     setInputMessage('');
//   };

//   const isValidPhoneNumber = (phoneNumber) => {
//     const phoneRegex = /^\d{12}$/;
//     return phoneRegex.test(phoneNumber);
//   };

//   const toggleSwitch = () => {
//     setIsEnabled(!isEnabled);
//   };

//   const isSendButtonDisabled = () => {
//     return (
//       !isValidPhoneNumber(userPhoneNumber) ||
//       !inputMessage.trim()
//     );
//   };

//   const sendMessage = async () => {
//     if (inputMessage.trim() === '') return;

//     const newMessage = { message: inputMessage, isBot: false };
//     setMessages((prevMessages) => [...prevMessages, newMessage]);
//     setInputMessage('');

//     if (isEnabled) {
//       try {
//         const prefix = searchType;
//         const phoneNumber = userPhoneNumber;
//         const botReply = await callApi(inputMessage, prefix, phoneNumber);

//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { message: botReply, isBot: true },
//         ]);
//       } catch (error) {
//         console.error('Error communicating with the API:', error);
//       }
//     } else {
//       const supportReply =
//         'Your message has been forwarded to our support team. They will get back to you soon.';
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { message: supportReply, isBot: true },
//       ]);
//     }
//   };

//   const retrieveChat = async () => {
//     try {
//       const chatHistory = await retrieveChatHistory(userPhoneNumber, searchType);
//       console.log('Retrieved chat history:', chatHistory);
  
//       // Handle different response types
//       const messagesArray = Array.isArray(chatHistory) ? chatHistory : chatHistory.messages || [];
  
//       // Display retrieved chat history
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         ...messagesArray.map((message) => ({ message, isBot: true })),
//       ]);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
  

//   useEffect(() => {
//     const chatContainer = document.getElementById('chat-container');
//     chatContainer.scrollTop = chatContainer.scrollHeight;
//   }, [messages]);

//   return (
//     <div>
//     <div className={styles.topContainer}>
//         <div className={styles.dropdownContainer}>
//           <label>Select Search Type:</label>
//           <select value={searchType} onChange={handleSearchTypeChange}>
//             <option value="bimakartbike">Bimakartbike</option>
//           </select>
//         </div>

//         <div className={styles.inputContainer}>
//           <label>Add Phone Number</label>
//           <input
//             type="text"
//             placeholder="e.g., 919422346952"
//             value={userPhoneNumber}
//             onChange={(e) => setUserPhoneNumber(e.target.value)}
//           />
//         </div>

//         <div>
//           <ToggleSwitch
//             className={styles.toggleSwitch}
//             isEnabled={isEnabled}
//             toggleSwitch={toggleSwitch}
//           />
//           Enable AI response
//         </div>

//         <button className={styles.historyButton} onClick={retrieveChat}>Chat history</button>
//       </div>
//     <div className={styles.chatbotContainer}>
      

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
//         <button onClick={sendMessage} disabled={isSendButtonDisabled()}>
//           Send
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Chatbot;

// components/chat/Chatbot.js
import React, { useState, useEffect } from 'react';
import styles from "@/app/ui/dashboard/conversations/conversations.module.css";
import ToggleSwitch from "@/components/chat/toggleswitch";
import ChatMessage from "@/components/chat/chatmessage";
import retrieveChatHistory from "@/app/api/chathistory";
import { callApi } from "@/app/api/ai";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [searchType, setSearchType] = useState('bimakartbike');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');

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

  const isSendButtonDisabled = () => {
    return (
      !isValidPhoneNumber(userPhoneNumber) ||
      !inputMessage.trim()
    );
  };

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage = { role: 'user', content: inputMessage };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputMessage('');

    if (isEnabled) {
      try {
        const prefix = searchType;
        const phoneNumber = userPhoneNumber;
        const botReply = await callApi(inputMessage, prefix, phoneNumber);

        const newBotMessage = { role: 'assistant', content: botReply };
        setMessages((prevMessages) => [...prevMessages, newBotMessage]);
      } catch (error) {
        console.error('Error communicating with the API:', error);
      }
    } else {
      const supportReply =
        'Your message has been forwarded to our support team. They will get back to you soon.';
      const newSupportMessage = { role: 'assistant', content: supportReply };
      setMessages((prevMessages) => [...prevMessages, newSupportMessage]);
    }
  };

  const retrieveChat = async () => {
    try {
      const chatHistory = await retrieveChatHistory(userPhoneNumber, searchType);
      console.log('Retrieved chat history:', chatHistory);
  
      // Handle different response types
      const messagesArray = Array.isArray(chatHistory.data)
        ? chatHistory.data
        : chatHistory.data?.messages || [];
  
      console.log('Processed messages:', messagesArray);
  
      // Display retrieved chat history
      setMessages((prevMessages) => [
        ...prevMessages,
        ...messagesArray.map(({ role, content }) => ({ role, content })),
      ]);
    } catch (error) {
      console.error('Error retrieving chat history:', error);
    }
  };
  

  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div>
      <div className={styles.topContainer}>
        <div >
          <label>Select section</label>
          <select className={styles.dropdown} value={searchType} onChange={handleSearchTypeChange}>
            <option value="bimakartbike">Bimakartbike</option>
          </select>
        </div>

        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter Number"
            value={userPhoneNumber}
            onChange={(e) => setUserPhoneNumber(e.target.value)}
          />
        </div>

        <div>
          <ToggleSwitch
            className={styles.toggleSwitch}
            isEnabled={isEnabled}
            toggleSwitch={toggleSwitch}
          />
          Enable AI response
        </div>

        <button className={styles.historyButton} onClick={retrieveChat}>
          Chat history
        </button>
      </div>

      <div className={styles.chatbotContainer}>
        <div id="chat-container" className={styles.chatContainer}>
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              role={msg.role}
              content={msg.content}
              className={msg.role === 'assistant' ? styles.botMessage : styles.userMessage}
            />
          ))}
        </div>

        
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

