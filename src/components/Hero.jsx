import tracker from '../analytics/tracker';

const Hero = () => {
  const handleCTAClick = (action) => {
    tracker.trackEvent('cta_click', 'engagement', action);
  };

  return (
    <section style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '2rem',
        borderRadius: '10px'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Gives You Wings</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Experience the ultimate energy boost</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button
            onClick={() => handleCTAClick('explore_products')}
            style={{
              backgroundColor: '#ff0000',
              color: '#fff',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              cursor: 'pointer',
              borderRadius: '5px'
            }}
          >
            Explore Products
          </button>
          <button
            onClick={() => handleCTAClick('view_events')}
            style={{
              backgroundColor: '#fff',
              color: '#000',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              cursor: 'pointer',
              borderRadius: '5px'
            }}
          >
            View Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;