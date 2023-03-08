import * as eventsAPI from './events-api'

const createEvent = async (eventData) => {
    try {
        const response = await eventsAPI.createEvent(eventData);
        return response;
    } catch (error) {
        throw error;
    }
};

export { createEvent };
