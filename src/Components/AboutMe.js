import "./AboutMe.css";
import AboutMeImg from "../images/about-me-image-pingAvisek.jpg";

const AboutMe = () => {
  return (
    <div className="container">
      <h2 className="hero-heading" id="about">
        About Me
      </h2>
      <div className="about-me-section">
        <div className="left-container">
          <img src={AboutMeImg} alt="About Me Image" />
        </div>

        <div className="right-container">
          <h3>Hi</h3>
          <p style={{ textAlign: "justify" }}>
            My name is <span id="banner-text-secondary"> AB GHIMIRE</span>. I
            currently study in Patan Multiple Campus, Lalitpur, Nepal. Everyone
            can agree that I am a good student. I have chosen this career path
            because of my passion for{" "}
            <span id="banner-text-secondary">Information and Technology</span>.
          </p>{" "}
          {"\n"}
          <p style={{ textAlign: "justify" }}>
            {" "}
            I can say that I am a responsible and a hard-working student.
            Moreover, being a sociable person, I have many friends since I like
            to communicate with people and get to know new interesting
            individuals. I enjoy my time at college: the students are very
            friendly and ready to help. I like to receive and deal with
            challenging tasks. I am a very enthusiastic student and I think this
            is a strong point of mine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
