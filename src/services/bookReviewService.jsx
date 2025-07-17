import axios from 'axios';

const BASE_URL = 'http://localhost:8081/gateway/books-with-reviews';

export const getBooksWithReviews = () => axios.get(BASE_URL);
