"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "./styles.module.scss";
import { faqs } from "../../../../const";


const FAQAccordion: React.FC = () => {
  return (
    <div className={`container-fluid ${styles.faqWrapper}`}>
      <h2 className={'mb-4 text-center'}>Frequently Asked Questions</h2>
      <div className={`container`}>
        <Accordion defaultActiveKey="0">
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header className={`${styles.faq_title}`}>{faq.question}</Accordion.Header>
              <Accordion.Body>
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQAccordion;
