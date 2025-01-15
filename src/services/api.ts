import axios from 'axios';
import {API_BASE_URL} from 'react-native-dotenv';

console.log('API_BASE_URL', API_BASE_URL);
console.log('API_BASE_URL', API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
