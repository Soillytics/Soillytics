"use client";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";


const SectionFour = () => {
  return (
    <>
      <section className={`container my-5 ${styles.section_one_wrapper}`}>
        <div className={`row`}>
        <div className={`col-lg-6 col-md-12 ${styles.image_wrapper}`}>
            <img
              src="/section_four.jpg"
              alt="section_one_img"
              className={`${styles.section_img}`}
            />
          </div>
          <div className={`col-lg-6 col-md-12 p-5 ${styles.text_wrapper}`}>
                <h4 className={styles.box_title}>
                  Leverage real-time analytics to optimize agronomic outcomes
                </h4>
                <p className={styles.box_para}>
                  Get smart insights to manage irrigation, disease, nutrition, 
                  and effluent with precision—helping you cut down on inputs and 
                  boost yields. It's so intuitive, you don't need to be an agronomist 
                  to grow like one.
                </p>
                <button className={`btn ${styles.infoButton}`}>
                  <Link href={'/'}>
                    Learn More
                  </Link> 
                </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFour;
