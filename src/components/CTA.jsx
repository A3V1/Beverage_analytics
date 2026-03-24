import { Link } from 'react-router-dom';
import tracker from '../analytics/tracker';

const CTA = ({ text, link, buttonText }) => {
  const handleCTAClick = () => {
    tracker.trackEvent('cta_click', 'conversion', buttonText);
  };

  return (
    <section style={{
      backgroundColor: '#ff0000',
      color: '#fff',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h2>{text}</h2>
      <Link to={link}>
        <button onClick={handleCTAClick} style={{
          backgroundColor: '#fff',
          color: '#ff0000',
          border: 'none',
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          cursor: 'pointer',
          borderRadius: '5px',
          marginTop: '1rem'
        }}>
          {buttonText}
        </button>
      </Link>
    </section>
  );
};

export default CTA;