// src/components/ToggleSwitch.jsx
"use client";
import React from 'react';

const ToggleSwitch = ({ isEnabled, toggleSwitch }) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isEnabled} onChange={toggleSwitch} />
      <span className="slider"></span>
      Enable AI
    </label>
  );
};

export default ToggleSwitch;
