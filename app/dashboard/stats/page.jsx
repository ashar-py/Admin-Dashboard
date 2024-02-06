"use client";

import React from "react";
import styles from "@/app/ui/dashboard/stats/stats.module.css";
import Link from "next/link";

const StatsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tile}>
        <Link href="./stats/active">Active Users</Link>
      </div>
      
      <div className={styles.tile}>
        <Link href="./stats/doc_pending">Documents Pending</Link>
      </div>

      <div className={styles.tile}>
        <Link href="./stats/payment_link_pending">Payment Link Pending</Link>
      </div>

      <div className={styles.tile}>
        <Link href="./stats/payment_due">Payment Due</Link>
      </div>

      <div className={styles.tile}>
        <Link href="./stats/completed">Completed</Link>
      </div>
    </div>
  );
};

export default StatsPage;
