import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <h1>SISTECH CAFE</h1>

      <p>Local Coffee brewed by Extraordinary Women in Indonesia</p>

      <Link href="/menu" className="primary-btn">
        See our Menu
      </Link>
    </section>
  );
}
