import tracker from '../analytics/tracker';

const Hero = () => {
  const handleCTAClick = (action) => {
    tracker.trackEvent('cta_click', 'engagement', action);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Gives You Wings</h1>
        <p>Experience the ultimate energy boost with high-octane sport and event experiences.</p>
        <div className="cta-group">
          <button onClick={() => handleCTAClick('explore_products')}>Explore Products</button>
          <button onClick={() => handleCTAClick('view_events')}>View Events</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;