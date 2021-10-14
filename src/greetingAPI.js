import axios from 'axios';

const greetingAPI = axios.create({
  baseURL: 'https://hello-rails-backend.herokuapp.com/api/v1/random-greeting',
});

export default greetingAPI;
