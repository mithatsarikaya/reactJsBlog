export default function Post({ title, text }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{text.length > 100 ? `${text.slice(0, 100)}...` : text}</p>
    </>
  );
}
