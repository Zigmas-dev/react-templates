import { useState } from "react";
import "./calendar.scss";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ date: "", title: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (newEvent.date && newEvent.title) {
      setEvents((prev) => [...prev, newEvent]);
      setNewEvent({ date: "", title: "" });
    }
  };

  return (
    <div className="calendar-container">
      <h2>Įvykių kalendorius</h2>
      <form onSubmit={addEvent} className="event-form">
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Įvykio pavadinimas"
          value={newEvent.title}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Pridėti</button>
      </form>
      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.date}:</strong> {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;