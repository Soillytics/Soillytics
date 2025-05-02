"use client";
import React from "react";
import styles from "./styles.module.scss";
import { CARD_DETAILS } from "../../../../const";

const SectionThree = () => {
  return (
    <>
      <section
        className={`container-fluid position-absoulte my-3 p-5 ${styles.section_three_wrapper}`}
      >
        <div className={`container ${styles.inner_wrapper}`}>
          <h4 className={`mb-4 ${styles.section_title}`}>
            Smart Solutions for Tomorrow’s Agriculture
          </h4>
          <div className={`${styles.service_cards_wrapper}`}>
            {CARD_DETAILS.map((card) => (
              <div className={`card p-3 ${styles.card_body}`} key={card.id}>
                <img
                  src={card.img}
                  alt={"card-details"}
                  className={styles.icon}
                />
                <div className={`card-body ${styles.card_details}`}>{card.details}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
