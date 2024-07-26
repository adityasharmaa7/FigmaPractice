import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Hero from "./Components/HeroSection/Hero";
import Intro from "./Components/Intro/Intro";
import Team from "./Components/Team/Team";
import Faq from "./Components/FAQ/Faq";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="topSection"> 
      <Navbar />
      <Hero />
      </div>
      <Intro />
      <Team />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
