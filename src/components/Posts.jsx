import Post from "./Post";

export default function Posts({ postDatas }) {
  return (
    <main>
      {postDatas.map((postData) => (
        <Post id={postData.id} title={postData.title} text={postData.text} />
      ))}
    </main>
  );
}
