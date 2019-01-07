import types from '../actions/types';

const initialState = {
    image: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.FETCH_IMAGE:
            return {
                ...state,
                image: action.payload
            };
        default:
            return state;
    }
}