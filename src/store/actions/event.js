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
        //dispatch(createEventStart());
        axios.post('/events.json', eventData)
            .then(response => {
                dispatch(createEventSuccess(response.data.name, eventData));
            })
            .catch(error => {
                dispatch(createEventFail(error));
            });
    };
};