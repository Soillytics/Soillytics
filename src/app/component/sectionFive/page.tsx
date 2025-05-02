"use client";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const SectionFive = () => {
  return (
    <>
      <section className={`container my-5 ${styles.section_one_wrapper}`}>
        <div className={`row`}>
          <div className={`col-lg-6 col-md-12 ${styles.image_wrapper}`}>
            <img
              src="/section_five.jpg"
              alt="section_one_img"
              className={`${styles.section_img}`}
            />
          </div>
          <div className={`col-lg-6 col-md-12 p-5 ${styles.text_wrapper}`}>
            <h4 className={styles.box_title}>
              Analyze your harvest and streamline your farm management workflows.
            </h4>
            <p className={styles.box_para}>
              Transparent supply chains start with smart insights. With just one click, CropX gathers 
              and reports vital data—from environmental conditions and resource usage to crop health—empowering 
              stakeholders to track progress and unlock new value across the agricultural lifecycle.
            </p>
            <button className={`btn ${styles.infoButton}`}>
              <Link href={"/"}>Learn More</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFive;
