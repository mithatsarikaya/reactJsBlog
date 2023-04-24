import Post from "./Post";

export default function Posts({ postDatas }) {
  return (
    <main>
      {postDatas.map((postData) => (
        <Post
          key={postData.id}
          id={postData.id}
          title={postData.title}
          text={postData.text}
        />
      ))}
    </main>
  );
}
