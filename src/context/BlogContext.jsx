import { createContext } from "react";
import { useState, useEffect } from "react";
const BlogContext = createContext({});

export const BlogContextProvider = ({ children }) => {
  const [postDatas, setPostDatas] = useState([]);
  const newIdForNewPost = postDatas[postDatas.length - 1]?.id + 1;
  const url = "http://localhost:3500/posts";

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((data) => setPostDatas(data));
  }, []);

  return (
    <BlogContext.Provider
      value={{ url, postDatas, setPostDatas, newIdForNewPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
