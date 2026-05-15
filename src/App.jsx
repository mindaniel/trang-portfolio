import React from "react";
import "./App.css"; // <-- Fixed the path alias here!
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhyStartOver from "./components/WhyStartOver";
import Semester1 from "./components/Semester1";
import Semester2 from "./components/Semester2";
import Semester3 from "./components/Semester3";
import Semester4 from "./components/Semester4";
import Appendix from "./components/Appendix";
import Footer from "./components/Footer";

const Portfolio = () => {
  return (
    // We keep the main container full width for the background color
    <main className="App relative w-full overflow-hidden">
      <Navigation />
      
      {/* THIS IS THE FRAME: It limits the width and centers everything */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Hero />
        <WhyStartOver />
        <Semester1 />
        <Semester2 />
        <Semester3 />
        <Semester4 />
        <Appendix />
        <Footer />
      </div>
    </main>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;