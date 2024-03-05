
// "use client";
// import React from "react";
// import styles from "@/app/ui/dashboard/conversations/conversations.module.css";
// import PropTypes from "prop-types";

// const ChatMessage = ({ role, content, className }) => {
//   const messageClass =
//     role === "assistant" ? styles.botMessage : styles.userMessage;

//   return (
//     <div className={`${styles.chatMessage} ${messageClass} ${className}`}>
//       <pre className={styles.pre}>
//       <div className={styles.messageContent}>{content}</div>
//       </pre>
//     </div>
//   );
// };

// ChatMessage.propTypes = {
//   role: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   className: PropTypes.string,
// };

// export default ChatMessage;

// ChatMessage.jsx
import React from "react";
import styles from "@/app/ui/dashboard/conversations/conversations.module.css";
import PropTypes from "prop-types";

const ChatMessage = ({ role, content, className }) => {
  const messageClass =
    role === "assistant" ? styles.botMessage : styles.userMessage;

  const detectLinks = (text) => {
    // Regular expression to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    
    // Split the text by URLs
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        // If the part is a URL, render it as a clickable link
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part}
          </a>
        );
      } else {
        // Otherwise, render the regular text
        return part;
      }
    });
  };

  return (
    <div className={`${styles.chatMessage} ${messageClass} ${className}`}>
      <pre className={styles.pre}>
        <div className={styles.messageContent}>
          {detectLinks(content)}
        </div>
      </pre>
    </div>
  );
};

ChatMessage.propTypes = {
  role: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ChatMessage;



