import { SET_USER } from '../types';

const INITIAL_STATE = {
    user: null,
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SET_USER:
            return { ...state, user: action.payload };

        default:
            return state;

    }
};
