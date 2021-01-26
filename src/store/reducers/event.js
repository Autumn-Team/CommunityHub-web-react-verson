import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../sharedFunctions/utility';

const initialState = {
    events: [],
    fullEvent: null,
    loading: false,
    error: null,
}

const createEventStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
    });
};

const createEventSuccess = (state, action) => {
    const newEvent = updateObject(action.eventData, {
        id: action.eventId,
    });
    return updateObject(state, {
        events: state.events.concat(newEvent),
        loading: false,
        error: 'no error',
    });
};

const createEventFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
    });
};

const fetchEventStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
    });
};

const fetchEventSuccess = (state, action) => {
    return updateObject(state, {
        events: action.events,
        loading: false,
        error: null,
    });
};

const fetchEventFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
    });
};

const fetchFullEventStart = (state, action) => {
    return updateObject(state, {
        fullEvent: null,
        loading: true,
        error: null,
    });
};

const fetchFullEventSuccess = (state, action) => {
    return updateObject(state, {
        fullEvent: action.fullEvent,
        loading: false,
        error: null,
    });
};

const fetchFullEventFail = (state, action) => {
    return updateObject(state, {
        fullEvent: null,
        loading: false,
        error: action.error,
    });
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_EVENT_START: return createEventStart(state, action);
        case actionTypes.CREATE_EVENT_SUCCESS: return createEventSuccess(state, action);
        case actionTypes.CREATE_EVENT_FAIL: return createEventFail(state, action);
        case actionTypes.FETCH_EVENT_START: return fetchEventStart(state, action);
        case actionTypes.FETCH_EVENT_SUCCESS: return fetchEventSuccess(state, action);
        case actionTypes.FETCH_EVENT_FAIL: return fetchEventFail(state, action);
        case actionTypes.FETCH_FULL_EVENT_START: return fetchFullEventStart(state, action);
        case actionTypes.FETCH_FULL_EVENT_SUCCESS: return fetchFullEventSuccess(state, action);
        case actionTypes.FETCH_FULL_EVENT_FAIL: return fetchFullEventFail(state, action);
        default: return state;

    }
}

export default reducer;