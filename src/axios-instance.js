import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://summer-project-dac31-default-rtdb.firebaseio.com/'
});

const login = axios.create({
    baseURL: ''
});

const register = axios.create({
    baseURL: ''
})

export { instance, login, register };