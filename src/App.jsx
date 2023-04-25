import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import data from "./data";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import ShowPost from "./components/ShowPost";
import EditPost from "./components/EditPost";
import BlogContext, { BlogContextProvider } from "./context/BlogContext";

function App() {
  return (
    <>
      <BlogContextProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/:id" element={<ShowPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
        <Footer />
      </BlogContextProvider>
    </>
  );
}

export default App;
