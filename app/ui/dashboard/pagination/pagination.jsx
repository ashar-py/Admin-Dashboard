"use client";

import styles from "./pagination.module.css";

const Pagination = ({ count }) => {


  const handleChangePage = (type) => {
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;