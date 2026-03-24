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
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        onClick={handleProductClick}
      />
      <div className="card-content">
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <div>
          <p style={{ fontWeight: 'bold', color: '#ffcc00' }}>${product.price}</p>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            <Link to={`/product/${product.id}`}>
              <button onClick={handleViewDetails} style={{
                background: 'linear-gradient(90deg, #0063f0, #00d4ff)',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                borderRadius: '999px'
              }}>
                View Details
              </button>
            </Link>
            <button onClick={handleBuyNow} style={{
              background: 'linear-gradient(90deg, #12c25f, #00e881)',
              color: '#fff',
              border: 'none',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              borderRadius: '999px'
            }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;