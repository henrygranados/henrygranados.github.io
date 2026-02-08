import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Henry Granados. All rights reserved.</p>
    </footer>
  );
}
