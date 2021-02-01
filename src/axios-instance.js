import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://summer-project-dac31-default-rtdb.firebaseio.com/'
});

const login = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5fqq3CBZKwNYzWsispuuyL3drcbDgvAY'
});

const register = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5fqq3CBZKwNYzWsispuuyL3drcbDgvAY'
})

export { instance, login, register };