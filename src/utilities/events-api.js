import axios from 'axios';

const BASE_URL = '/api/events';

export async function createEvent(eventData) {
    try {
    const response = await axios.post(BASE_URL, eventData);
    return response.data;
    } catch (error) {
    throw new Error('Failed to create event');
    }
}
