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
    name: 'Orange Juice',
    description: 'Fresh and natural orange juice',
    price: 80,
    image: 'https://images.unsplash.com/photo-1577801597460-5eec6d0c8e07?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Cold Coffee',
    description: 'Chilled coffee with cream',
    price: 120,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Lemon Soda',
    description: 'Refreshing fizzy lemon drink',
    price: 60,
    image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Strawberry Shake',
    description: 'Sweet and creamy strawberry milkshake',
    price: 140,
    image: 'https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb?auto=format&fit=crop&w=800&q=80'
  }
];

  return (
    <div>
      <Navbar />
      <section style={{ padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Products</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap:'1.5rem' }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;