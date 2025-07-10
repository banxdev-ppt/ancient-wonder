import axios from 'axios';

const sanity = axios.create({
  baseURL: import.meta.env.VITE_SANITY_API_URL,
  headers: { 'Content-Type': 'application/json' },
  params: { perspective: 'published' },
});

export { sanity };
