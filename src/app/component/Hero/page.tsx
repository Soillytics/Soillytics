import Link from 'next/link';
import styles from './hero.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} d-flex align-items-center justify-content-center text-center`}>
      <div className="container">
        <h1 className="display-3 fw-bold text-white">Revolutionize Your Farming</h1>
        <p className="lead text-white mb-4">Precision agriculture powered by Soillytics intelligence</p>
   
        <button type="button" className={`btn btn-light px-5 ${styles.hero_btn}`}>
          <Link href={'/'} className={`${styles.hero_button}`}>
            Explore the Platform
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
