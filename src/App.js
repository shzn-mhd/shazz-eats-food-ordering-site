import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Tiles from "./components/Tiles";
import Foods from "./components/Foods";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Tiles />
      <Foods />
      <Category />
    </div>
  );
}

export default App;
