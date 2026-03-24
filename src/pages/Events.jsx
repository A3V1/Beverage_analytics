import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';
import tracker from '../analytics/tracker';

const Events = () => {
  useEffect(() => {
    tracker.trackEvent('page_view', 'navigation', 'events');
  }, []);

  const events = [
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
    },
    {
      name: 'Red Bull Cliff Diving',
      description: 'Extreme cliff diving competition.',
      date: 'August 10, 2024',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Red Bull Rampage',
      description: 'Mountain biking at its most extreme.',
      date: 'September 5, 2024',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div>
      <Navbar />
      <section style={{ padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Red Bull Events</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;