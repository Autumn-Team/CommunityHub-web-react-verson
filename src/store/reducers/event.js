import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../sharedFunctions/utility';

const initialState = {
    events: [],
    error: null,
}

const createEventStart = (state, action) => {
    return updateObject(state, {
        error: null,
    });
};

const createEventSuccess = (state, action) => {
    const newEvent = updateObject(action.eventData, {
        id: action.eventId,
    });
    return updateObject(state, {
        events: state.events.concat(newEvent),
        error: 'no error',
    });
};

const createEventFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_EVENT_START: return createEventStart(state, action);
        case actionTypes.CREATE_EVENT_SUCCESS: return createEventSuccess(state, action);
        case actionTypes.CREATE_EVENT_FAIL: return createEventFail(state, action);
        default: return state;

    }
}

export default reducer;