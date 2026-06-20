import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <FaInstagram />
        <FaTwitter />
        <FaWhatsapp />
      </div>

      <p>Made with Love by Regina Joan</p>
    </footer>
  );
}
