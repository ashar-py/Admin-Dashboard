
// "use client";
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

//     const newUserMessage = { role: 'user', content: inputMessage };
//     setMessages((prevMessages) => [...prevMessages, newUserMessage]);
//     setInputMessage('');

//     if (isEnabled) {
//       try {
//         const prefix = searchType;
//         const phoneNumber = userPhoneNumber;
//         const botReply = await callApi(inputMessage, prefix, phoneNumber);

//         const newBotMessage = { role: 'assistant', content: botReply };
//         setMessages((prevMessages) => [...prevMessages, newBotMessage]);
//       } catch (error) {
//         console.error('Error communicating with the API:', error);
//       }
//     } else {
//       const supportReply =
//         'Your message has been forwarded to our support team. They will get back to you soon.';
//       const newSupportMessage = { role: 'assistant', content: supportReply };
//       setMessages((prevMessages) => [...prevMessages, newSupportMessage]);
//     }
//   };

//   const retrieveChat = async () => {
//     try {
//       const chatHistory = await retrieveChatHistory(userPhoneNumber, searchType);
//       //console.log('Retrieved chat history:', chatHistory);
  
//       // Handle different response types
//       const messagesArray = Array.isArray(chatHistory.data)
//         ? chatHistory.data
//         : chatHistory.data?.messages || [];
  
//       //console.log('Processed messages:', messagesArray);
  
//       // Display retrieved chat history
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         ...messagesArray.map(({ role, content }) => ({ role, content })),
//       ]);
//     } catch (error) {
//       console.error('Error retrieving chat history:', error);
//     }
//   };
  

//   useEffect(() => {
//     const chatContainer = document.getElementById('chat-container');
//     chatContainer.scrollTop = chatContainer.scrollHeight;
//   }, [messages]);

  
//   return (
//     <div>
//       <div className={styles.topContainer}>
//         <div >
//           <label>Select section</label>
//           <select className={styles.dropdown} value={searchType} onChange={handleSearchTypeChange}>
//             <option value="bimakartbike">Bimakartbike</option>
//             <option value="dmrchr">dmrchr</option>
//           </select>
//         </div>

//         <div className={styles.inputContainer}>
//           <input
//             type="text"
//             placeholder="Enter Number"
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

//         <button className={styles.historyButton} onClick={retrieveChat}>
//           Chat history
//         </button>
//       </div>

//       <div className={styles.chatbotContainer}>
//         <div id="chat-container" className={styles.chatContainer}>
//           {messages.map((msg, index) => (
//             <ChatMessage
//               key={index}
//               role={msg.role}
//               content={msg.content}
//               className={msg.role === 'assistant' ? styles.botMessage : styles.userMessage}
//             />
//           ))}
//         </div>

        
//       </div>
//       <div className={styles.inputContainer}>
//           <input
//             type="text"
//             placeholder="Type your message..."
//             value={inputMessage}
//             onChange={(e) => setInputMessage(e.target.value)}
//           />
//           <button onClick={sendMessage} disabled={isSendButtonDisabled()}>
//             Send
//           </button>
//         </div>
//     </div>
//   );
// };

// export default Chatbot;

"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from "@/app/ui/dashboard/conversations/conversations.module.css";
import ToggleSwitch from "@/components/chat/toggleswitch";
import ChatMessage from "@/components/chat/chatmessage";
import retrieveChatHistory from "@/app/api/chathistory";
import { callApi } from "@/app/api/ai";

function useChatScroll(dep) {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);
  return ref;
}

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [searchType, setSearchType] = useState('bimakartbike');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [isPhoneNumberEntered, setIsPhoneNumberEntered] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading spinner
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
  
      setMessages((prevMessages) => [
        ...prevMessages,
        ...messagesArray.map(({ role, content }) => ({ role, content })),
      ]);
    } catch (error) {
      console.error('Error retrieving chat history:', error);
    }
  };

  const handlePhoneNumberChange = (event) => {
    setUserPhoneNumber(event.target.value);
    setIsPhoneNumberEntered(!!event.target.value && isValidPhoneNumber(event.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div>
          <label>Select section</label>
          <select className={styles.dropdown} value={searchType} onChange={handleSearchTypeChange}>
            <option value="bimakartbike">Bimakartbike</option>
            <option value="dmrchr">dmrchr</option>
          </select>
        </div>

        <div className={styles.inputContainer}>
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
          Enable AI response
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
          <div className={styles.botMessage}>{loading && <img src="/Loading.gif" width="60" height="50" alt="Loading..." />} {/* Rendering spinner when loading */}</div>
        </div>
      </div>
      <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress} // Added event listener
          />
          <button onClick={sendMessage} disabled={!isPhoneNumberEntered}>
            Send
          </button>
        </div>
    </div>
  );
};

export default Chatbot;








