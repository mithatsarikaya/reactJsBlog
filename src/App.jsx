import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import data from "./data";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import ShowPost from "./components/ShowPost";
import EditPost from "./components/EditPost";

function App() {
  const [postDatas, setPostDatas] = useState(data);
  const newIdForNewPost = postDatas[postDatas.length - 1]?.id + 1;

  fetch("http://localhost:3500/posts/2").then((result) =>
    console.log(result.json())
  );

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
        <Route
          path="/:id"
          element={
            <ShowPost postDatas={postDatas} setPostDatas={setPostDatas} />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditPost postDatas={postDatas} setPostDatas={setPostDatas} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
