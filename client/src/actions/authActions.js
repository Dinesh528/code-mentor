import Axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER} from "./types"

// Register User
export const registerUser = (userData, history)=> dispatch =>{
    Axios
         .post('/api/users/register',userData)
         .then(res => history.push('/login'))
         .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login User
export const loginUser = userData => dispatch =>{
    Axios
        .post('/api/users/login', userData)
        .then(res => {
            // Save to local Storage
            const { token } = res.data;
            // Set token to Local Storage
            localStorage.setItem('jwtToken', token);
            // Set Token to auth header
            setAuthToken(token);
            // Decode token to get user Data
            const decoded = jwt_decode(token);
            // set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(
            err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Set logged in user
export const setCurrentUser =(decoded) =>{
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}