import React from "react";
import Navbar from "./assets/components/Navbar";
import Banner from "./assets/components/Banner";
import CardsContainer from "./assets/components/CardsContainer";
import Footer from "./assets/components/Footer";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CardsContainer />
      <Footer />
    </div>
  );
}

export default App;
