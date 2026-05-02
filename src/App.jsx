import "./App.css";


import Packages from "./components/packages/Packages";   // NEW

import Testimonials from "./components/testimonials/Testimonials";
import Instagram from "./components/instagram/Instagram";

import Footer from "./components/footer/footer";
import Gallery from "./pages/Gallery";
import Location from "./components/location/Location";
import Featured from "./components/featured/featured";
import Services from "./components/Services/Services"
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      {/* Home Section */}
      <section id="home">
        <Hero/>
      </section>

      {/* Services Section */}
      <section id="services">
         <Services/>
      </section>

       <section id="gallery">
        <Gallery/>
        </section>
     

      {/* Gallery Section */}
      <section id="gallery">
        <Featured/>
      </section>

      {/* About Section */}
      <section id="about">
        <About/>
      </section>

      {/* Video Section */}
      <section id="packages">
        <Packages />
      </section>
    

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Instagram Section */}
      <section id="instagram">
        <Instagram />
      </section>
      <section id="location">
        <Location/>
      </section>
   

      {/* Contact Section */}
      <section id="contact">
        <Footer />
      </section>
   
    </>
  );
}

export default App;
