import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../sharedFunctions/utility';

const initialState = {
    events: [],
}

const createEventStart = (state, action) => {
    const newEvent = updateObject(action.eventData, {
        id: action.eventId,
    });
    return updateObject(state, {
        events: state.events.concat(newEvent),
    });
};

const createEventFail = (state, action) => {
    return updateObject(state, {});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //case actionTypes.CREATE_EVENT_START
        case actionTypes.CREATE_EVENT_SUCCESS: return createEventStart(state, action);
        case actionTypes.CREATE_EVENT_FAIL: return createEventFail(state, action);
        default: return state;

    }
}

export default reducer;