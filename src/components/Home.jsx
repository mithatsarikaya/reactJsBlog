import Posts from "./Posts";

export default function Home({ postDatas }) {
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
