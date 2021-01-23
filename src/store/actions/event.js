import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const createEventSuccess = (id, eventData) => {
    return {
        type: actionTypes.CREATE_EVENT_SUCCESS,
        eventId: id,
        eventData: eventData,
    };
};

export const createEventFail = (error) => {
    return {
        type: actionTypes.CREATE_EVENT_FAIL,
        error: error,
    };
};

export const createEventStart = () => {
    return {
        type: actionTypes.CREATE_EVENT_START,
    };
};

export const createEvent = (eventData) => {
    return dispatch => {
        dispatch(createEventStart());
        axios.post('/events.json', eventData)
            .then(response => {
                dispatch(createEventSuccess(response.data.name, eventData));
            })
            .catch(error => {
                dispatch(createEventFail(error));
            });
    };
};

export const fetchEventStart = () => {
    return {
        type: actionTypes.FETCH_EVENT_START,
    };
};

export const fetchEventSuccess = (events) => {
    return {
        type: actionTypes.FETCH_EVENT_SUCCESS,
        events: events,
    };
};

export const fetchEventFail = (error) => {
    return {
        type: actionTypes.FETCH_EVENT_FAIL,
        error: error,
    };
};

export const fetchEvents = () => {
    return dispatch => {
        dispatch(fetchEventStart());
        axios.get('/events.json')
            .then(response => {
                const fetchData = [];
                for (let key in response.data) {
                    fetchData.push({
                        ...response.data[key],
                        id: key,
                    });
                };
                dispatch(fetchEventSuccess(fetchData));
            })
            .catch(error => {
                dispatch(fetchEventFail(error));
            })
    }
}