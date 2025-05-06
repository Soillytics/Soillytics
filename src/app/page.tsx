'use client'
import Navbar from "./component/Navbar";
import Hero from "./component/Hero/page";
import SectionTwo from "./component/SectionTwo/page";
import styles from './page.module.scss'
import SectionThree from "./component/sectionThree/page";
import SectionFour from "./component/sectionFour/page";
import SectionFive from "./component/sectionFive/page";
import SectionSix from "./component/sectionSix/page";
import NewsSection from "./component/NewsSection/page";
import FAQAccordion from "./component/FAQAccordion/page";
import Footer from "./component/Footer/page";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className={`container-fluid ${styles.main_page}`}>
        <Hero />
        <div className={`text-center ${styles.section_divider_wrapper}`}>
          <h3>Empowering Sustainable Growth<br /> for a Brighter Future</h3>
          <div className={`${styles.hr_line}`} />
        </div>
        <SectionTwo />
        <SectionFour />
        <SectionThree />
        <SectionFive />
        <SectionSix />
        <NewsSection />
        <FAQAccordion />
        <Footer />
      </div>
    </>
  );
}
