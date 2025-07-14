import React from "react";
import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="home-container">
          <Hero />
          <About />
          <Footer />
        </div>
      );
    };
    

export default Home;