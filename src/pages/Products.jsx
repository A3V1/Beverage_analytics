import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import tracker from '../analytics/tracker';

const Products = () => {
  useEffect(() => {
    tracker.trackEvent('page_view', 'navigation', 'products');
  }, []);

  const products = [
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
    },
    {
      id: 3,
      name: 'Red Bull Tropical',
      description: 'Tropical flavor for an exotic energy boost.',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Red Bull Watermelon',
      description: 'Refreshing watermelon flavor.',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div>
      <Navbar />
      <section style={{ padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Products</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;