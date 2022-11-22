import "./HeroBanner.css";
import bannerImage from "../images/banner-image-pingAvisek.jpg";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="container">
        <div className="banner" id="home">
          <div className="banner-image">
            <img src={bannerImage} alt="Banner Image" />
          </div>

          <div className="banner-text">
            <h1>
              Hi, <br /> I'm AB GHIMIRE <br /> An enthusiastic
              <span id="banner-text-secondary"> Web Developer.</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
