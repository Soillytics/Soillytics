"use client";
import React, { useEffect, useState } from "react";
import style from "./styles.module.scss";
import Link from "next/link";
import { Button } from "bootstrap";

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

      <section className={`container d-flex ${style.detail_section_wrapper}`}>
        <div className={`row ${style.section_row}`}>
          <div
            className={`col-lg-6 col-md-12 align-item-center ${style.text_side}`}
          >
            <h3 className={`mb-3 ${style.text_side_title}`}>
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
            <img
              src={"/Agri_Ai.jpg"}
              alt=""
              className={`img-fluid ${style.fact_img}`}
            />
          </div>
        </div>
      </section>

      <section className={`container d-flex ${style.detail_section_wrapper}`}>
        <div className={`row ${style.section_row}`}>
          <div className={` col-lg-6 col-md-12 ${style.image_side}`}>
            <img
              src={"/Agritech_two.jpg"}
              alt=""
              className={`img-fluid ${style.fact_img}`}
            />
          </div>
          <div
            className={`col-lg-6 col-md-12 align-item-center ${style.text_side}`}
          >
            <h3 className={`mb-3 ${style.text_side_title}`}>
              Data Acquisition and Enrichment
            </h3>
            <p className={style.text_side_para}>
              Soillytics harnesses robust, high-fidelity data streams—sourced
              from reliable, comprehensive origins—to transform raw inputs into
              actionable intelligence.
            </p>
            <p className={style.text_side_list}>
              Our platform leverages proprietary crop models that have been
              rigorously tested and validated by independent third-party
              researchers. It seamlessly integrates farm machinery data via
              robust API connections, ensuring real-time insights. By
              aggregating data from various soil depths, local weather patterns,
              topographical variations, soil composition, and more, we deliver a
              comprehensive and precise understanding of field conditions to
              optimize crop performance.
            </p>
          </div>
        </div>
      </section>

      <section className={`container d-flex ${style.detail_section_wrapper}`}>
        <div className={`row ${style.section_row}`}>
          <div
            className={`col-lg-6 col-md-12 align-item-center ${style.text_side}`}
          >
            <h3 className={`mb-3 ${style.text_side_title}`}>
              Reliable, Precise, and Simple-to-Install Hardware
            </h3>
            <p className={style.text_side_list}>
              Underground data is critical for delivering reliable,
              forward-looking agronomic insights. By capturing soil-level
              information through sensors, the CropX system can proactively
              determine plant needs—before any visible signs of stress appear.
            </p>
          </div>

          <div className={` col-lg-6 col-md-12 ${style.image_side}`}>
            <img
              src={"/Agri_tech.jpg"}
              alt=""
              className={`img-fluid ${style.fact_img}`}
            />
          </div>
        </div>
      </section>

      <section className={`container-fluid py-5 ${style.platform_section_wrapper}`}>
        <h3 className={`text-center  ${style.platform_title}`}>Soillytics Platform</h3>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`Col-lg-6 col-md-12`}>
              <h3 className={`${style.text_side_title}`}>Field Data Management</h3>
              <p className={`${style.text_side_para}`}>Live insights for tracking and improving crop productivity.</p>
              <Link href={`/`}>
                <button className={`btn btn-primary ${style.learn_more_btn}`}>Learn More</button>
              </Link>
            </div>
            <div className={`Col-lg-6 col-md-12`}>
              <div className={`${style.icon_tray}`}>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
