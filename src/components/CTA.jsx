import { Link } from 'react-router-dom';
import tracker from '../analytics/tracker';

const CTA = ({ text, link, buttonText }) => {
  const handleCTAClick = () => {
    tracker.trackEvent('cta_click', 'conversion', buttonText);
  };

  return (
    <section style={{
      backgroundColor: '#222',
      color: '#fff',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h2>{text}</h2>

      <Link to={link}>
        <button
          onClick={handleCTAClick}
          style={{
            backgroundColor: '#ff9800',
            color: '#fff',
            border: 'none',
            padding: '0.8rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '6px',
            marginTop: '1rem'
          }}
        >
          {buttonText}
        </button>
      </Link>
    </section>
  );
};

export default CTA;