// components/Footer.tsx
'use client'
import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Columns */}
        <div className={styles.columns}>
        <div className={styles.column}>
            <h2>Soillytics</h2>
        </div>
          {/* Company Column */}
          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              <li><a href="">Contact Us</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Login</a></li>
            </ul>
          </div>
          {/* Resources Column */}
          <div className={styles.column}>
            <h4>Soillytics Product</h4>
            <ul>
              <li><a href="">Feild Data</a></li>
              <li><a href="">Irregation Management</a></li>
              <li><a href="">Disease Control</a></li>
              <li><a href="">Nutrition Monitoring</a></li>
              <li><a href="">Effluent Irrigation</a></li>
              <li><a href="">Hardwate</a></li>
            </ul>
          </div>
          {/* Contact Column */}
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/contact/north-america">Blog</a></li>
              <li><a href="/contact/europe">Resource & Downloads</a></li>
              <li><a href="/contact/asia">Knowledge Base</a></li>
            </ul>
          </div>
          {/* Social Media Column */}
          <div className={styles.column}>
            <h4>Follow Us</h4>
            {/* <div className={styles.socialIcons}>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <img src="./Icon/mdi_linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <img src="./Icon/prime_twitter.png" alt="Twitter" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <img src="./Icon/ic_baseline-facebook.png" alt="Facebook" />
              </a>
            </div> */}
          </div>
        </div>
        {/* Bottom Bar */}
        <div className={`d-flex  ${styles.bottomBar}`}>
          <p>© {new Date().getFullYear()} Soillytics. All rights reserved.</p>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/privacy-policy">Term and condition</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
