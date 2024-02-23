// import React from "react";

// import styles from "@/app/ui/dashboard/prompt_builder/prompt.module.css"
// const promptBuilder = () => {
//   return (
//     <div className={styles.container}>
      
//       <div className={styles.dropdown}>
//         <label htmlFor="llmType">Choose LLM type:</label>
//         <select id="llmType" name="llmType" >
//           <option value="llmType1">LLM Type 1</option>
//           <option value="llmType2">LLM Type 2</option>
//           <option value="llmType3">LLM Type 3</option>
//         </select>
//       </div>
//       <div>
//         <button className={styles.buttonNext} >Next</button>
//         <button className={styles.buttonReset}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default promptBuilder;

import React from "react";
import styles from "@/app/ui/dashboard/prompt_builder/prompt.module.css";

const PromptBuilder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <label htmlFor="agentName">Agent Name:</label>
        <input type="text" id="agentName" name="agentName" className={styles.inputField} />
      </div>
      <div className={styles.section}>
        <label htmlFor="organizationName">Organization Name:</label>
        <input type="text" id="organizationName" name="organizationName" className={styles.inputField} />
      </div>
      <div className={styles.section}>
        <label htmlFor="greetingMessages">Greeting Messages:</label>
        <textarea id="greetingMessages" name="greetingMessages" className={styles.textareaField} />
      </div>
      <div className={styles.section}>
        <label htmlFor="personality">Personality:</label>
        <input type="text" id="personality" name="personality" className={styles.inputField} />
      </div>
      <div className={styles.section}>
        <label htmlFor="callPurpose">Call Purpose:</label>
        <input type="text" id="callPurpose" name="callPurpose" className={styles.inputField} />
      </div>
      <div className={styles.section}>
        <label htmlFor="agenda">Agenda:</label>
        <textarea id="agenda" name="agenda" className={styles.textareaField} />
      </div>
      <div className={styles.section}>
        <label htmlFor="generalLines">General Lines (Details of Company):</label>
        <textarea id="generalLines" name="generalLines" className={styles.textareaField} />
      </div>
      <div className={styles.section}>
        <label htmlFor="qualifyingQuestions">Qualifying Questions Guidelines:</label>
        <textarea id="qualifyingQuestions" name="qualifyingQuestions" className={styles.textareaField} />
      </div>
      <div className={styles.section}>
        <button className={styles.buttonNext}>Generate Prompt</button>
        <button className={styles.buttonReset}>Reset</button>
      </div>
    </div>
  );
};

export default PromptBuilder;
