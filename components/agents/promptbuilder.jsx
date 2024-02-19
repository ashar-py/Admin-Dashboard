import React from "react";

import styles from "@/app/ui/dashboard/prompt_builder/prompt.module.css"
const promptBuilder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label htmlFor="description">Brief explain the purpose of the agent and the work it need to perform:</label>
        <textarea id="description" name="description"  />
      </div>
      <div className={styles.dropdown}>
        <label htmlFor="llmType">Choose LLM type:</label>
        <select id="llmType" name="llmType" >
          <option value="llmType1">LLM Type 1</option>
          <option value="llmType2">LLM Type 2</option>
          <option value="llmType3">LLM Type 3</option>
        </select>
      </div>
      <div>
        <button className={styles.buttonNext} >Next</button>
        <button className={styles.buttonReset}>Reset</button>
      </div>
    </div>
  );
};

export default promptBuilder;
