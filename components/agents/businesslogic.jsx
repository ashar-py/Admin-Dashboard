import React from "react";
import styles from "@/app/ui/dashboard/BuisnessLogic/logic.module.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
function BusinessLogic() {
  return (
    <div className={styles.container}>
     
          <label>
            Upload customer data if the chat need to be initiated by the
            business
          </label>
       
      <div className={styles.topContainer}>
        

      <div className={styles.upload} for="inputTag">
          <label for="inputTag">
            <FaUpload />
            <input id="inputTag" className={styles.inputTag} type="file" />
            <div>Click to upload file</div>
            <p>Drop your PDF, CSV, DOCX, or TXT file here (40MB limit)</p>
          </label>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.buttonContainer}>
          <button className={styles.btnSave}>Save</button>
          <button className={styles.btnDelete}>Delete All</button>
        </div>
        <span>
          Add desired outcomes and goals the chatbot needs to achieve with the
          customers.
        </span>
        <div className={styles.bottomContainerBtn}>
          <input type="text"></input>
          <button className={styles.add}>
            <FaPlus></FaPlus>
          </button>
          <button className={styles.remove}>
            <FaMinus></FaMinus>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BusinessLogic;
