import Axios from 'axios';

const setAuthToken = token =>{
    if(token){
        // Apply to every request
        Axios.defaults.headers.common['Authorization'] = token;
    } else{
        // Delete auth headers
        delete Axios.defaults.headers.common['Authorization'];
    };
}

export default setAuthToken;