import "./App.css";
import NavBar from "./Components/NavBar";
import HeroBanner from "./Components/HeroBanner";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="myApp">
      <NavBar />
      <HeroBanner />
      <AboutMe />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
