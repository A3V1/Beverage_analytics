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
      name: 'Orange Juice',
      description: 'Fresh and natural orange juice',
      price: 80,
      image: 'https://images.unsplash.com/photo-1577801597460-5eec6d0c8e07?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      name: 'Cold Coffee',
      description: 'Chilled coffee with cream',
      price: 120,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const featuredEvents = [
    {
      name: 'Beverage Fest',
      description: 'Explore refreshing drinks and offers.',
      date: 'June 15, 2024',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Coffee Meetup',
      description: 'Meet coffee lovers and taste new blends.',
      date: 'July 20, 2024',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <div>
      <Navbar />
      <Hero />

      <section className="section">
        <h2>Featured Beverages</h2>
        <div className="grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Events & Promotions</h2>
        <div className="grid">
          {featuredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </section>

      <CTA
        text="Discover your favorite beverages today!"
        link="/products"
        buttonText="Shop Now"
      />

      <footer className="footer">
        © {new Date().getFullYear()} Beverage Store Analytics – Demo Project
      </footer>
    </div>
  );
};

export default Home;