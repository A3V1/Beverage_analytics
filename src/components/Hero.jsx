import { useNavigate } from 'react-router-dom';
import tracker from '../analytics/tracker';

const Hero = () => {
  const navigate = useNavigate();

  const handleCTAClick = (action, route) => {
    tracker.trackEvent('cta_click', 'engagement', action);
    navigate(route);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Fresh Beverages Delivered</h1>
        <p>
          Explore a wide range of refreshing drinks, juices, coffee, and cool beverages.
        </p>

        <button onClick={() => handleCTAClick('shop_drinks', '/products')}>
          Shop Drinks
        </button>

        <button onClick={() => handleCTAClick('browse_products', '/products')}>
          Browse Products
        </button>
      </div>
    </section>
  );
};

export default Hero;