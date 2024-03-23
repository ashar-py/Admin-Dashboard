import React from "react";
import styles from "@/app/ui/dashboard/conversations/conversations.module.css";
import PropTypes from "prop-types";

const ChatMessage = ({ role, content, className }) => {
  const messageClass =
    role === "assistant" ? styles.botMessage : styles.userMessage;

  // Regular expression to detect and extract text inside square brackets and links
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

  // Function to replace text inside square brackets with clickable links
  const renderClickableText = (text) => {
    return text.split(linkRegex).map((part, index) => {
      if (index % 3 === 1) {
        // Text inside square brackets and also the name as clickable links
        return (
          <a
            key={index}
            href={text.split(linkRegex)[index + 1]}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {part}<br></br>
          </a>
        );
      } else if (index % 3 === 2) {
        // Link URL rendered as clickable link
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {part}
          </a>
        );
      } else {
        // Normal text
        return part;
      }
    });
  };

  return (
    <div className={`${styles.chatMessage} ${messageClass} ${className}`}>
      <pre className={styles.pre}>
        <div className={styles.messageContent}>
          {renderClickableText(content)}
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




