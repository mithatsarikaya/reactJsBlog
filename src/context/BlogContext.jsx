import { createContext } from "react";

const BlogContext = createContext({});

export const BlogContextProvider = ({ children }) => {
  const url = "http://localhost:3500/posts/";
  const [postDatas, setPostDatas] = useState([]);
  const newIdForNewPost = postDatas[postDatas.length - 1]?.id + 1;
  return (
    <BlogContext.Provider
      value={{ url, postDatas, setPostDatas, newIdForNewPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};
