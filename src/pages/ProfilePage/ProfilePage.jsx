import { useState } from 'react';
import { createEvent } from '../../utilities/events-service';
import EventForm from '../../components/EventForm/EventForm';

export default function ProfilePage({ user }) {
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleCreateEvent(eventData) {
    try {
      await createEvent(eventData);
      // Optionally, you could redirect to a success page or display a success message
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <>
    <h1>Create an Event</h1>
    {user && <p>Welcome, {user.name}!</p>}
    {errorMessage && <p>{errorMessage}</p>}
    <EventForm onSubmit={handleCreateEvent} />
  </>
  );
}


