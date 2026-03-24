import tracker from '../analytics/tracker';

const EventCard = ({ event }) => {
  const handleEventClick = () => {
    tracker.trackEvent('event_click', 'engagement', event.name);
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '1rem',
      margin: '1rem',
      textAlign: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      cursor: 'pointer'
    }} onClick={handleEventClick}>
      <img
        src={event.image}
        alt={event.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }}
      />
      <h3>{event.name}</h3>
      <p>{event.description}</p>
      <p style={{ fontWeight: 'bold', color: '#ff0000' }}>{event.date}</p>
    </div>
  );
};

export default EventCard;