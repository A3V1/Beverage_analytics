import { Link } from 'react-router-dom';
import tracker from '../analytics/tracker';

const ProductCard = ({ product }) => {
  const handleProductClick = () => {
    tracker.trackEvent('product_click', 'engagement', product.name);
  };

  const handleViewDetails = () => {
    tracker.trackEvent('view_details_click', 'engagement', product.name);
  };

  const handleBuyNow = () => {
    tracker.trackEvent('buy_click', 'conversion', product.name);
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '1rem',
      margin: '1rem',
      textAlign: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }}
        onClick={handleProductClick}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p style={{ fontWeight: 'bold', color: '#ff0000' }}>${product.price}</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <Link to={`/product/${product.id}`}>
          <button onClick={handleViewDetails} style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            borderRadius: '5px'
          }}>
            View Details
          </button>
        </Link>
        <button onClick={handleBuyNow} style={{
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          borderRadius: '5px'
        }}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;