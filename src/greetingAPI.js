import axios from 'axios';

const greetingAPI = axios.create({
  baseURL: 'https://hello-rails-backend.herokuapp.com',
});

export default greetingAPI;
