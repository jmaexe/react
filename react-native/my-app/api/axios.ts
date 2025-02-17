import axios from 'axios';
export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTIyNjQ0YzkwMTgxZmIxZTczYjNhMTg4ZTUzZmJhZiIsIm5iZiI6MTcyNTQ2NTg1Ny44OTc2NjEsInN1YiI6IjY2ZDFhYzA5MzljN2YyMzNlMDk0MzcyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C2lrm-jh95oJmMW8Xnte-QLVcrrkC57kMnrApz2I5-M',
  },
});
