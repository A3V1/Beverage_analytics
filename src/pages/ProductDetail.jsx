import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import tracker from '../analytics/tracker';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Mock product data - in real app, fetch from API
    const products = [
      {
        id: 1,
        name: 'Red Bull Original',
        description: 'The original energy drink that gives you wings. Perfect for when you need that extra boost.',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        details: '250ml can, 80mg caffeine, taurine, B-vitamins'
      },
      {
        id: 2,
        name: 'Red Bull Sugar Free',
        description: 'All the energy, zero sugar. Great for health-conscious consumers.',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        details: '250ml can, 80mg caffeine, zero sugar, aspartame'
      },
      {
        id: 3,
        name: 'Red Bull Tropical',
        description: 'Tropical flavor for an exotic energy boost.',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        details: '250ml can, tropical fruit flavor, 80mg caffeine'
      },
      {
        id: 4,
        name: 'Red Bull Watermelon',
        description: 'Refreshing watermelon flavor.',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        details: '250ml can, watermelon flavor, 80mg caffeine'
      }
    ];

    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);

    if (foundProduct) {
      tracker.trackEvent('view_product', 'engagement', foundProduct.name);
    }
  }, [id]);

  const handleBuyNow = () => {
    tracker.trackEvent('buy_click', 'conversion', product.name);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '300px', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
          />
          <div>
            <h1>{product.name}</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{product.description}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#ff0000', marginBottom: '1rem' }}>${product.price}</p>
            <p style={{ marginBottom: '2rem' }}>{product.details}</p>
            <Link to="/checkout">
              <button onClick={handleBuyNow} style={{
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                cursor: 'pointer',
                borderRadius: '5px'
              }}>
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;