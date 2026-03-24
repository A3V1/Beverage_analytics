import { Link } from 'react-router-dom';
import tracker from '../analytics/tracker';

const Navbar = () => {
  const handleNavClick = (page) => {
    tracker.trackEvent('nav_click', 'navigation', page);
  };

  return (
    <nav style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Link to="/" onClick={() => handleNavClick('home')} style={{ color: '#fff', textDecoration: 'none' }}>
          Red Bull Experience
        </Link>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
        <li><Link to="/" onClick={() => handleNavClick('home')} style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/products" onClick={() => handleNavClick('products')} style={{ color: '#fff', textDecoration: 'none' }}>Products</Link></li>
        <li><Link to="/events" onClick={() => handleNavClick('events')} style={{ color: '#fff', textDecoration: 'none' }}>Events</Link></li>
        <li><Link to="/checkout" onClick={() => handleNavClick('checkout')} style={{ color: '#fff', textDecoration: 'none' }}>Order</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;