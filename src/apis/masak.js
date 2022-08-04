import axios from 'axios';

// const API_KEY = '83ea6ba83d8e4a08a2ec6a67d0c6cf7d';
const baseUrl = 'https://masak-apa.tomorisakura.vercel.app/';

const masak = axios.create({
  baseURL: baseUrl,
  // mode: "no-cors",
  // params: {
  //   api_key: API_KEY,
  // },
});

export default masak;
