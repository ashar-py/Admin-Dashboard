"use client";
import React from 'react'
import styles from "@/app/ui/dashboard/trainingmaterial/training.module.css";

function TrainingMaterial() {
  return (
    <div className={styles.trainingMaterialContainer}>
      <div className={styles.uploadContainer}>
    
        <input type="file" />
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
        
        <div className={styles.filterOptions}>
         
        </div>
      </div>
    </div>
  )
}

export default TrainingMaterial