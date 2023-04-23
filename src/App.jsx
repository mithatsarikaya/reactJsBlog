import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import data from "./data";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  const [postDatas, setPostDatas] = useState(data);

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home postDatas={postDatas} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
