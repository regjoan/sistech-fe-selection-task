import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        SISTECH CAFE
      </Link>

      <div className="nav-links">
        <Link href="/menu">Menu</Link>
        <Link href="/about">About Us</Link>
        <Link href="/promo">Promo</Link>

        <Link href="/login" className="login-btn">
          Login
        </Link>
      </div>
    </nav>
  );
}
