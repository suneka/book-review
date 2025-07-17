import axios from 'axios';

const BASE_URL = 'http://localhost:8080/book/get';

export const getAllBooks = () => axios.get(BASE_URL);
