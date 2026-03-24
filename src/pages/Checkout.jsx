import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import tracker from '../analytics/tracker';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  useEffect(() => {
    tracker.trackEvent('page_view', 'navigation', 'checkout');
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tracker.trackEvent('checkout', 'conversion', 'order_completed');
    alert('Order placed successfully! (This is a demo)');
  };

  const handleAddToCart = () => {
    tracker.trackEvent('add_to_cart', 'conversion', 'redbull_original');
  };

  return (
    <div>
      <Navbar />
      <section className="section" style={{ maxWidth: '720px', margin: '2rem auto', background: 'rgba(20,20,20,0.9)', borderRadius: '16px' }}>
        <div style={{ padding: '2rem' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Checkout</h1>
        
        <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h3>Order Summary</h3>
          <p>Red Bull Original - $2.99</p>
          <button onClick={handleAddToCart} style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            borderRadius: '5px',
            marginTop: '1rem'
          }}>
            Add to Cart
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3>Shipping Information</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ddd' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ddd' }}
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={formData.address}
            onChange={handleInputChange}
            required
            style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ddd', minHeight: '80px' }}
          />

          <h3>Payment Information</h3>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
            style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ddd' }}
          />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleInputChange}
              required
              style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleInputChange}
              required
              style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }}
            />
          </div>

          <button type="submit" style={{
            backgroundImage: 'linear-gradient(90deg, #28e05c, #10c33d)',
            color: '#000',
            border: 'none',
            padding: '1rem',
            fontSize: '1.2rem',
            cursor: 'pointer',
            borderRadius: '999px',
            marginTop: '1rem',
            fontWeight: 700
          }}>
            Complete Order
          </button>
        </form>
      </div>
      </section>
    </div>
  );
};

export default Checkout;