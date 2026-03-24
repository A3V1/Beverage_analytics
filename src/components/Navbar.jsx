import { Link } from 'react-router-dom';
import tracker from '../analytics/tracker';

const Navbar = () => {
  const handleNavClick = (page) => {
    tracker.trackEvent('nav_click', 'navigation', page);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          <Link to="/" onClick={() => handleNavClick('home')}>
            Red Bull Experience
          </Link>
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1.25rem', margin: 0, padding: 0 }}>
          <li><Link to="/" onClick={() => handleNavClick('home')}>Home</Link></li>
          <li><Link to="/products" onClick={() => handleNavClick('products')}>Products</Link></li>
          <li><Link to="/events" onClick={() => handleNavClick('events')}>Events</Link></li>
          <li><Link to="/checkout" onClick={() => handleNavClick('checkout')}>Order</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;