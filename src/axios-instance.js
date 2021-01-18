import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://summer-project-dac31-default-rtdb.firebaseio.com/'
});

export default instance;