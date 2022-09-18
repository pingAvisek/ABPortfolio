import "./App.css"
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import HeroBanner from "./Components/HeroBanner";
import NavBar from "./Components/NavBar";
import Services from "./Components/Services";

function App() {
  return (
    <div className="myApp">
      <NavBar />
      <HeroBanner />
      <AboutMe />
      <Services />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
