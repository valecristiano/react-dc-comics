export default function FooterCard({ url, text }) {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  );
}
