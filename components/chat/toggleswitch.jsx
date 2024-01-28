// src/components/ToggleSwitch.jsx
"use client";
import React from 'react';
import styles from "@/app/ui/dashboard/conversations/conversations.module.css"


import PropTypes from 'prop-types';


const ToggleSwitch = ({ isEnabled, toggleSwitch, className }) => {
  return (
    <div className={`${styles.toggleSwitch} ${className}`}>
      <input type="checkbox" checked={isEnabled} onChange={toggleSwitch} />
      <div className={styles.slider}></div>
    </div>
  );
};

ToggleSwitch.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  toggleSwitch: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ToggleSwitch;

