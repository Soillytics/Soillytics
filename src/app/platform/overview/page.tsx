"use client";
import React, { useEffect, useState } from "react";
import style from "./styles.module.scss";

const page = () => {

  return (
    <>
      <section className={`container-fluid ${style.overview_section_hero}`}>
        <img
          src={"/overview.jpg"}
          alt={"overview"}
          className={`img-fluid ${style.overview_img}`}
        />
        <div className={`container ${style.text_wrapper}`}>
          <h3 className={style.hero_title}>Precision Agronomy</h3>
          <h3 className={style.hero_title}>Powered by Intelligence</h3>
        </div>
      </section>
      <section
        className={`container my-5 d-flex ${style.detail_section_wrapper}`}
      >
        <div className={`row`}>
          <div className={`col-lg-6 col-md-12 ${style.text_side}`}>
            <h3 className={style.text_side_title}>
              Effortless Control, Instant Insight
            </h3>
            <p className={style.text_side_para}>
              Access critical data at a glance—from hardware performance to
              field status—all in one streamlined dashboard
            </p>
            <ul className={style.text_side_list}>
              <li className={style.list_item}>
                Personalized dashboards tailored to show the data that matters
                most to you
              </li>
              <li className={style.list_item}>
                Scalable control, whether you're overseeing a single field or
                managing a massive network
              </li>
              <li className={style.list_item}>
                Built-in messaging for real-time collaboration between team
                members and field locations
              </li>
              <li className={style.list_item}>
                Interactive visuals, including detailed graphs and high-res
                satellite views of your land
              </li>
              <li className={style.list_item}>
                Actionable agronomic insights to drive better decisions and
                healthier crops
              </li>
            </ul>
          </div>

          <div className={` col-lg-6 col-md-12 ${style.image_side}`}>
            <img src={"/Agri Ai.jpg"} alt="" className={`img-fluid ${style.fact_img}`} />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
