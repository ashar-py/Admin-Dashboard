
import React from "react";
import styles from "@/app/ui/dashboard/faqs/faqs.module.css";

const FAQS = () => {



    return ( 
  <div className={styles.container}>
    <div className={styles.topContainer}>
      
    <div>
      <label>Upload any FAQS based on previous interactions</label>
    </div>

    <div className={styles.file} >
    <input type="file" />
    </div>

    </div>

    <div className={styles.text}>
        <h4>Helpful Tips</h4>
        
        <li>
        Detailed information about your company (Name, Location, Testimonials, Expertise, USP)

        </li>
        <li>
        Detailed information about your products (Sizes, Brands, Cost)

        </li>
        <li>
        Detailed information about the service (Time to deliver, areas you deliver in)

        </li>
        <li>
        Detailed information about discounts, reviews, or anything else you feel your agent should be equipped to answer.
        </li>
        
      </div>
      <div className={styles.button}>
        <button className={styles.btnNext} >Next</button>
        <button className={styles.btnReset} >Reset</button>
      </div>
  </div>

    )


};

export default FAQS;