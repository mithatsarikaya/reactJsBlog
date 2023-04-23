import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import data from "./data";

console.log(data);

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Footer />
    </>
  );
}

export default App;
