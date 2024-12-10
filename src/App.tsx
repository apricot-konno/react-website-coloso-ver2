import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import OurMission from "./components/OurMission";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#f0efed]">
      <div className="container mx-auto py-4 px-3">
        <Header />
        <Hero />
        <About />
        <Service />
        <OurMission />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
