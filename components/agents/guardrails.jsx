import React from "react";

import styles from "@/app/ui/dashboard/guardrails/guardrails.module.css";
const GuardRails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label className={styles.headertext} htmlFor="description">Add any guidlines and rules that need to be followed</label>
        <textarea className={styles.textarea} id="description" name="description" />
      </div>
      <div className={styles.text}>
        <h4>Helpful Tips</h4>
        
        <li>
          Set manner rules for the agent (You will be friendly, warm and
          understanding. You will be mildly persuasive but never come off as
          annoying)
        </li>
        <li>
          Set conversation leading guidelines (You will lead the conversation,
          making sure the user answers one question clearly before moving to the
          next. You will stick to context. Any discussions outside context, you
          will steer back to the conversation)
        </li>
        <li>
          Set method of speaking rules for the agent (You will never speak more
          than 1-2 sentences. Keep answers short and crisp)
        </li>
        <li>
          Set company guidelines for the agent (You will never speak about
          competitors like Loafers Inc. You will never disclose anything about
          Sneakers Inc outside what is in your prompt)
        </li>
        
      </div>
      <div className={styles.button}>
        <button>Next</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default GuardRails;
