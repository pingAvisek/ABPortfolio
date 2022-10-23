import "./HeroBanner.css"
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
                        <h1>Hi, {"\n"} I'm <span id="banner-text-secondary"> AB GHIMIRE.</span></h1>
                        <h2>This is my official portfolio website.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner