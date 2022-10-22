import "./App.css"
import NavBar from "./Components/NavBar";
import HeroBanner from "./Components/HeroBanner";
import Services from "./Components/Services";
import AboutMe from "./Components/AboutMe";
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
