import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import EventCard from '../components/EventCard';
import CTA from '../components/CTA';
import tracker from '../analytics/tracker';

const Home = () => {
  useEffect(() => {
    tracker.trackEvent('page_view', 'navigation', 'home');
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: 'Red Bull Original',
      description: 'The original energy drink that gives you wings.',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Red Bull Sugar Free',
      description: 'All the energy, zero sugar.',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const featuredEvents = [
    {
      name: 'F1 Grand Prix',
      description: 'Experience the thrill of Formula 1 racing.',
      date: 'June 15, 2024',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Air Race World Championship',
      description: 'Watch the fastest pilots in the world.',
      date: 'July 20, 2024',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <section style={{ padding: '2rem', backgroundColor: '#f8f9fa' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Products</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Upcoming Events</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {featuredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </section>
      <CTA text="Ready to feel the energy?" link="/products" buttonText="Shop Now" />
    </div>
  );
};

export default Home;