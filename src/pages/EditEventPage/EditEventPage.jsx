import UpdateEventForm from "../../components/UpdateEventForm/UpdateEventForm";
import { useParams } from "react-router-dom";
import * as eventsAPI from "../../utilities/events-api";

export default function EditEventPage({ event, setEvent }) {
    const eventId = useParams();
    return (
    <>
        <p>Edit Event</p>
        <UpdateEventForm eventId={eventId} event={event} setEvent={setEvent} />
    </>
    );
}
