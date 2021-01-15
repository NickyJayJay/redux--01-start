import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility.js';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result * 2})});
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter(result => result.id !== action.resultElId); // action.resultElId is only passed as a prop to the 'DELETE_RESULT' case where it's equal to result.id and therefore the condition returns false (and thereby the current item is filtered from the array). In all other cases, action.resultElId will be undefined and therefore the condition would return true (so the current item is unaffected)
            return updateObject(state, {results: updatedArray});
    }
    return state;
}

export default reducer;