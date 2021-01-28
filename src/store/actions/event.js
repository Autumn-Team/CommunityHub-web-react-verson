import * as actionTypes from './actionTypes';
import { instance as axios }  from '../../axios-instance';

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
                const reverseData = fetchData.reverse();
                dispatch(fetchEventSuccess(reverseData));
            })
            .catch(error => {
                dispatch(fetchEventFail(error));
            })
    }
}

export const fetchFullEventStart = () => {
    return {
        type: actionTypes.FETCH_FULL_EVENT_START,
    };
};

export const fetchFullEventSuccess = (fullEvent) => {
    return {
        type: actionTypes.FETCH_FULL_EVENT_SUCCESS,
        fullEvent: fullEvent,
    };
};

export const fetchFullEventFail = (error) => {
    return {
        type: actionTypes.FETCH_FULL_EVENT_FAIL,
        error: error,
    };
};

export const fetchFullEvent = (id) => {
    return dispatch => {
        dispatch(fetchFullEventStart());
        axios.get(`/events/${id}.json`)
            .then(response => {
                const fetchData = {...response.data};
                dispatch(fetchFullEventSuccess(fetchData));
            })
            .catch(error => {
                dispatch(fetchFullEventFail(error));
            })
    }
}