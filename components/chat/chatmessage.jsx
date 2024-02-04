// // src/components/ChatMessage.jsx
// "use client";
// import React from 'react';
// import styles from "@/app/ui/dashboard/conversations/conversations.module.css"
// import PropTypes from 'prop-types';


// const ChatMessage = ({ message, isBot, className }) => {
//   const messageClass = isBot ? styles.botMessage : styles.userMessage;

//   return (
//     <div className={`${styles.chatMessage} ${messageClass} ${className}`}>
//       <div className={styles.messageContent}>{message}</div>
//     </div>
//   );
// };

// ChatMessage.propTypes = {
//   message: PropTypes.string.isRequired,
//   isBot: PropTypes.bool.isRequired,
//   className: PropTypes.string,
// };

// export default ChatMessage;


// src/components/ChatMessage.jsx
// src/components/ChatMessage.jsx
"use client";
import React from 'react';
import styles from "@/app/ui/dashboard/conversations/conversations.module.css"
import PropTypes from 'prop-types';

const ChatMessage = ({ role, content, className }) => {
  const messageClass = role === 'assistant' ? styles.botMessage : styles.userMessage;

  return (
    <div className={`${styles.chatMessage} ${messageClass} ${className}`}>
      <div className={styles.messageContent}>{content}</div>
    </div>
  );
};

ChatMessage.propTypes = {
  role: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ChatMessage;


