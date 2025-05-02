"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "@/app/component/navbar.module.scss";
import gsap from "gsap";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <Link href="/">Soillytics</Link>
      </div>

      <div
        className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <ul className={styles.navLinks}>
        <li className={styles.dropdown}>
          <span>Platform</span>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/platform/hardware">Hardware and Sensors</Link>
            </li>
            <li>
              <Link href="/platform/field-data">Field Data Management</Link>
            </li>
            <li>
              <Link href="/platform/irrigation">Irrigation Management</Link>
            </li>
            <li>
              <Link href="/platform/et-monitoring">Actual ET Monitoring</Link>
            </li>
            <li>
              <Link href="/platform/disease-control">Disease Control</Link>
            </li>
            <li>
              <Link href="/platform/nutrition">Crop Nutrition Monitor</Link>
            </li>
            <li>
              <Link href="/platform/connectivity">Farm Data Connectivity</Link>
            </li>
            <li>
              <Link href="/platform/tracking">Tracking and Reporting</Link>
            </li>
          </ul>
        </li>

        <li className={styles.dropdown}>
          <span>About Us</span>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/about/company">Company</Link>
            </li>
            <li>
              <Link href="/about/sustainability">Sustainability</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/resources">Resources</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>

      <div className={styles.loginButton}>
        <Link href="/login">Login</Link>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu} ref={menuRef}>
          <ul>
            <li>
              <Link href="/platform">Platform</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
