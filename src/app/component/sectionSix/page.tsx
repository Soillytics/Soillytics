"use client";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const SectionSix = () => {
  return (
    <>
      <section className={`container my-5 ${styles.section_one_wrapper}`}>
        <div className={`row`}>
          <div className={`col-lg-6 col-md-12 p-5 ${styles.text_wrapper}`}>
            <h4 className={styles.box_title}>
                Monitor and analyze your crop yields and farming methods with ease.
            </h4>
            <p className={styles.box_para}>
                Seamless tracking and reporting are essential for a transparent, efficient 
                agricultural supply chain. With just one click, CropX gathers critical insights 
                on environmental conditions, resource utilization, and crop outcomes—empowering 
                smarter decisions and added value at every stage.
            </p>
            <button className={`btn ${styles.infoButton}`}>
              <Link href={"/"}>Learn More</Link>
            </button>
          </div>
          <div className={`col-lg-6 col-md-12 ${styles.image_wrapper}`}>
            <img
              src="/section_six.jpg"
              alt="section_one_img"
              className={`${styles.section_img}`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSix;
