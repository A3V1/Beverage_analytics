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
    {  id: 1,
    name: 'Orange Juice',
    description: 'Fresh and natural orange juice packed with vitamin C.',
    price: 80,
    image: 'https://images.unsplash.com/photo-1577801597460-5eec6d0c8e07?auto=format&fit=crop&w=800&q=80',
    details: '300ml glass, no added sugar, rich in Vitamin C'
  },
  {
    id: 2,
    name: 'Cold Coffee',
    description: 'Chilled coffee with cream and ice.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    details: '350ml, creamy texture, moderate caffeine'
  },
  {
    id: 3,
    name: 'Lemon Soda',
    description: 'Refreshing fizzy lemon drink.',
    price: 60,
    image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=800&q=80',
    details: '250ml, carbonated, tangy flavor'
  },
  {
    id: 4,
    name: 'Strawberry Shake',
    description: 'Sweet and creamy strawberry milkshake.',
    price: 140,
    image: 'https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb?auto=format&fit=crop&w=800&q=80',
    details: '400ml, milk-based, rich and thick'
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
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap : 'wrap' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '300px', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
          />
          <div>
            <h1>{product.name}</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{product.description}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>Ru{product.price}</p>
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