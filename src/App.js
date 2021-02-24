import React from "react";
import City from "./City";
import Temperature from "./Temperature";
import Conditions from "./Conditions";
import Form from "./Form";
import Footer from "./Footer";


import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>Weather Forecast</h1>
        <City />
        <Temperature />
        <Conditions />
        <Form />
        <Footer />
      </div>
    </div>
  );
}
