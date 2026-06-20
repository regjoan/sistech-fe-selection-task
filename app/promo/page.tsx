export default function PromoPage() {
  return (
    <div className="page-content">
      <h1>Current Promotions</h1>

      <div className="promo-grid">
        <div className="promo-card">
          <h3>Buy 1 Get 1</h3>
          <p>Every Monday for all coffee drinks.</p>
        </div>

        <div className="promo-card">
          <h3>Student Discount</h3>
          <p>10% off with a valid student card.</p>
        </div>

        <div className="promo-card">
          <h3>Morning Special</h3>
          <p>20% off before 10 AM.</p>
        </div>
      </div>
    </div>
  );
}
