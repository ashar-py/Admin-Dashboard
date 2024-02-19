import React from "react";
import styles from "@/app/ui/dashboard/BuisnessLogic/logic.module.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function BusinessLogic() {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div>
          <label>
            Upload customer data if the chat need to be initiated by the
            business
          </label>
        </div>

        <div className={styles.file}>
          <input type="file" />
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
        <div>
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
