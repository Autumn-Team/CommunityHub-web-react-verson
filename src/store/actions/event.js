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

export const createEvent = (eventData, token) => {
    return dispatch => {
        dispatch(createEventStart());
        axios.post('/events.json?auth=' + token, eventData)
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

export const fetchEventByUserSuccess = (events) => {
    return {
        type: actionTypes.FETCH_EVENT_BY_USER_SUCCESS,
        eventsByUser: events,
    };
};

export const fetchEventFail = (error) => {
    return {
        type: actionTypes.FETCH_EVENT_FAIL,
        error: error,
    };
};

export const fetchEvents = (token) => {
    return dispatch => {
        dispatch(fetchEventStart());
        axios.get('/events.json?auth=' + token)
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

export const fetchEventsByUser = (token, userId) => {
    return dispatch => {
        dispatch(fetchEventStart());
        const queryParam = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/events.json' + queryParam)
            .then ( response => {
                const fetchData = [];
                for (let key in response.data) {
                    fetchData.push({
                        ...response.data[key],
                        id: key,
                    });
                };
                const reverseData = fetchData.reverse();
                dispatch(fetchEventByUserSuccess(reverseData));
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

export const fetchFullEvent = (id, token) => {
    return dispatch => {
        dispatch(fetchFullEventStart());
        axios.get(`/events/${id}.json?auth=${token}`)
            .then(response => {
                const fetchData = {...response.data};
                dispatch(fetchFullEventSuccess(fetchData));
            })
            .catch(error => {
                dispatch(fetchFullEventFail(error));
            })
    }
}