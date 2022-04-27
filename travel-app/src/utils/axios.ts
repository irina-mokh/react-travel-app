import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wft-geo-db.p.rapidapi.com/v1',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    'X-RapidAPI-Key': '9f12688a49mshfd7c6441fcdf769p17ffecjsn7b8b997187ea',
  },
});

export { instance as axios };
