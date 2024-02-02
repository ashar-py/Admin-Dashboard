import React, { useState } from 'react';
import styles from "./toggle.module.css"

const ToggleDiv = () => {
  const [showDiv, setShowDiv] = useState(false);

  const toggleHandler = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div>
      <button className={styles.button}onClick={toggleHandler}>{showDiv ? 'Send Link' : 'Send Link'}</button>
      {showDiv && ( 
        <div className={styles.send}>
        <input placeholder="Enter link here.."></input>
        <button className={styles.button}>Send</button>
    </div>
      )}
    </div>
  );
};

export default ToggleDiv;
