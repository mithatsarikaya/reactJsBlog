import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import postDatas from "./data";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Posts postDatas={postDatas} />
      <Footer />
    </>
  );
}

export default App;
