export default function MenuPage() {
  const coffees = [
    {
      name: "Americano",
      price: "Rp25.000",
      desc: "Rich espresso with hot water.",
    },
    {
      name: "Cappuccino",
      price: "Rp35.000",
      desc: "Espresso with steamed milk and foam.",
    },
    {
      name: "Latte",
      price: "Rp38.000",
      desc: "Smooth espresso with creamy milk.",
    },
    {
      name: "Mocha",
      price: "Rp40.000",
      desc: "Coffee blended with chocolate.",
    },
  ];

  return (
    <div className="page-content">
      <h1>Our Menu</h1>

      <div className="menu-grid">
        {coffees.map((coffee) => (
          <div key={coffee.name} className="menu-card">
            <h3>{coffee.name}</h3>
            <p>{coffee.desc}</p>
            <span>{coffee.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
