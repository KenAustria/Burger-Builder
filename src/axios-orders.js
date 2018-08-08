import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-be355.firebaseio.com/'
});

export default instance;
