import styles from './hero.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} d-flex align-items-center justify-content-center text-center`}>
      <div className="container">
        <h1 className="display-3 fw-bold text-white">Revolutionize Your Farming</h1>
        <p className="lead text-white mb-4">Precision agriculture powered by Soillytics intelligence</p>
        <a href="#platform" className="btn btn-light btn-lg px-5">Explore the Platform</a>
      </div>
    </section>
  );
};

export default Hero;
