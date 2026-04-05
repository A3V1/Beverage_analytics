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
      name: 'Summer Beverage Fest',
      description: 'Enjoy refreshing drinks and exclusive discounts.',
      date: 'June 15, 2024',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Coffee Lovers Meetup',
      description: 'Taste premium coffee blends and meet enthusiasts.',
      date: 'July 20, 2024',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Mocktail Night',
      description: 'Explore creative mocktails and flavors.',
      date: 'August 10, 2024',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Healthy Drinks Workshop',
      description: 'Learn to make healthy juices and smoothies.',
      date: 'September 5, 2024',
      image: 'https://images.unsplash.com/photo-1572441710534-6809e4c6dc5b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div>
      <Navbar />

      <section style={{ padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Beverage Events & Promotions
        </h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;