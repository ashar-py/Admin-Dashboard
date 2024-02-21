"use client";
// TrainingMaterial.js
import React, { useState } from 'react';
import styles from "@/app/ui/dashboard/trainingmaterial/training.module.css";
import { FaUpload } from "react-icons/fa";

function TrainingMaterial() {
  const [activeTab, setActiveTab] = useState('fileUpload');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'fileUpload':
        break;
      case 'websiteURL':
        break;
      case 'sitemap':
        break;
      case 'text':
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.trainingMaterialContainer}>
      <div className={styles.topContainer}>
      
        <div className={styles.tabContainer}>
          <div
            className={`${styles.tab} ${activeTab === 'fileUpload' ? styles.activeTab : ''}`}
            onClick={() => handleTabClick('fileUpload')}
          >
            File Upload
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'websiteURL' ? styles.activeTab : ''}`}
            onClick={() => handleTabClick('websiteURL')}
          >
            Website URL
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'sitemap' ? styles.activeTab : ''}`}
            onClick={() => handleTabClick('sitemap')}
          >
            Sitemap
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'text' ? styles.activeTab : ''}`}
            onClick={() => handleTabClick('text')}
          >
            Text
          </div>
        </div>
        {activeTab === 'fileUpload' && (
          <div className={styles.topBox}>
          <div className={styles.upload} for="inputTag">
            <label for="inputTag">
            <FaUpload />
            <input id="inputTag" className={styles.inputTag} type="file" />
            <div>Click to upload file</div>
            <p>Drop your PDF, CSV, DOCX, or TXT file here (40MB limit)</p>
            </label>
          </div>
          </div>
        )}
        {activeTab === 'websiteURL' && (
          <div className={styles.topBox}>
          <input type="text" placeholder="Enter website URL" />
          </div>
        )}
        {activeTab === 'sitemap' && (
          <div className={styles.topBox}>
          <input type="text" placeholder="Enter sitemap URL" />
          </div>
        )}
        {activeTab === 'text' && (
          <div className={styles.topBox}>
          <div className={styles.textBox}>
            <input placeholder='Title for your text'></input>
            <textarea placeholder="Main body text"></textarea>
          </div>
          </div>
        )}
      </div>
      <div className={styles.tableContainer}>
      <button>Train</button>
       
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Select</th>
              <th>Training Material</th>
              <th>Type</th>
              <th>Characters</th>
              <th>Status</th>
              <th>Last Trained</th>
              <th>Re-train</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
            </tr>
            <tr>
              <td>Sample 2</td>
              <td>Sample 2</td>
              <td>Sample 2</td>
              <td>Sample 2</td>
              <td>Sample 2</td>
              <td>Sample 2</td>
              <td>Sample 2</td>
              <td>Sample 2</td>
            </tr>
            <tr>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
            </tr>
            <tr>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
            </tr>
            <tr>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
            </tr>
            <tr>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
              <td>Sample 1</td>
            </tr>
            
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TrainingMaterial;
