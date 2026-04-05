import tracker from '../analytics/tracker';

const EventCard = ({ event }) => {
  const handleEventClick = () => {
    tracker.trackEvent('event_click', 'engagement', event.name);
  };

  return (
    <div
      onClick={handleEventClick}
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '1rem',
        margin: '1rem',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
        cursor: 'pointer'
      }}
    >
      <img
        src={event.image}
        alt={event.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '5px'
        }}
      />

      <h3>{event.name}</h3>
      <p>{event.description}</p>

      <p style={{ fontWeight: 'bold', color: '#333' }}>
        {event.date}
      </p>
    </div>
  );
};

export default EventCard;