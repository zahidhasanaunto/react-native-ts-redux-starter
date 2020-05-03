import { SET_USER } from '../types';

export const setUser = (payload: any) => {
    return (dispatch) => {
        dispatch({ type: SET_USER, payload });
    }
}