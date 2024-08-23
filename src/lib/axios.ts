import axios from 'axios';

export const url = process.env.NEXT_PUBLIC_API_URL;

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
});
