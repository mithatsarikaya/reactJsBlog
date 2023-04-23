import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  const [postDatas, setPostDatas] = useState(data);

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
