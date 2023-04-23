import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import data from "./data";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";

function App() {
  const [postDatas, setPostDatas] = useState(data);
  const newIdForNewPost = postDatas[postDatas.length - 1].id + 1;
  console.log(newIdForNewPost);

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home postDatas={postDatas} />} />
        <Route
          path="/new"
          element={
            <NewPost
              setPostDatas={setPostDatas}
              newIdForNewPost={newIdForNewPost}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
