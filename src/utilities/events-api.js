import sendRequest from './send-request';
const BASE_URL = '/api/events'

export function getAllEvents() {
    return sendRequest(`${BASE_URL}/index`);
}

export function addEvent(eventForm) {
    return sendRequest(`${BASE_URL}/create`, 'POST', eventForm);
}

export function deleteEvent(event) {
    return sendRequest(`${BASE_URL}/delete/${event}`, 'DELETE')
}

export async function updateEvent(id, formData) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData)
}