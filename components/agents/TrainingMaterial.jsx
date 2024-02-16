"use client";
// TrainingMaterial.js
import React, { useState } from 'react';
import styles from "@/app/ui/dashboard/trainingmaterial/training.module.css";

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
          <input type="file" />
        )}
        {activeTab === 'websiteURL' && (
          <input type="text" placeholder="Enter website URL" />
        )}
        {activeTab === 'sitemap' && (
          <input type="text" placeholder="Enter sitemap URL" />
        )}
        {activeTab === 'text' && (
          <textarea placeholder="Enter text"></textarea>
        )}
      </div>
      <div className={styles.tableContainer}>
       
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
