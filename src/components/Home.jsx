import Posts from "./Posts";
import { useContext } from "react";
import BlogContext from "../context/BlogContext";

export default function Home() {
  const { postDatas } = useContext(BlogContext);
  return (
    <>
      {postDatas.length !== 0 ? (
        <Posts postDatas={postDatas} />
      ) : (
        <h3>There are not any blog post yet</h3>
      )}
    </>
  );
}
