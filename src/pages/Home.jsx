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
      image: 'https://images.unsplash.com/photo-1528809579230-b606d85d5f70?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      name: 'Red Bull Sugar Free',
      description: 'All the energy, zero sugar.',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1566476532527-84826c8d0820?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const featuredEvents = [
    {
      name: 'F1 Grand Prix',
      description: 'Experience the thrill of Formula 1 racing.',
      date: 'June 15, 2024',
      image: 'https://images.unsplash.com/photo-1549921296-a52b6a6a1fdd?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Air Race World Championship',
      description: 'Watch the fastest pilots in the world.',
      date: 'July 20, 2024',
      image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="section" style={{background: 'linear-gradient(to bottom, rgba(15,15,15,.9), rgba(15,15,15,.95))'}}>
        <h2>Featured Products</h2>
        <div className="grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="section">
        <h2>Upcoming Events</h2>
        <div className="grid">
          {featuredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </section>
      <CTA text="Ready to feel the energy?" link="/products" buttonText="Shop Now" />
      <footer className="footer">© {new Date().getFullYear()} Red Bull Experience Analytics &ndash; Demo project</footer>
    </div>
  );
};

export default Home;