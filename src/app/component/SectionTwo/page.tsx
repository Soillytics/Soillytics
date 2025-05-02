"use client";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";


const SectionTwo = () => {
  return (
    <>
      <section className={`container my-5 ${styles.section_one_wrapper}`}>
        <div className={`row`}>
            <div className={`col-lg-6 col-md-12 p-5 ${styles.text_wrapper}`}>
                <h4 className={styles.box_title}>
                Centralized platform to manage your farms, fields, and crops
                efficiently.
                </h4>
                <p className={styles.box_para}>
                The Soilllytics system captures data from the ground up—soil to
                sky—and turns it into actionable insights. Farmers get a complete,
                easy-to-digest picture of field and crop health, empowering
                smarter decisions across the entire farm.
                </p>
                <button className={`btn ${styles.infoButton}`}>
                  <Link href={'/'}>
                    Learn More
                  </Link> 
                </button>
            </div>
          <div className={`col-lg-6 col-md-12 ${styles.image_wrapper}`}>
            <img
              src="/section_one_img.jpg"
              alt="section_one_img"
              className={`${styles.section_img}`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
