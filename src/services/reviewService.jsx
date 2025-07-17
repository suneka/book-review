import axios from 'axios';

const BASE_URL = 'http://localhost:8090/review'; // Update as per backend

export const getReviewsByBookId = (bookId) => axios.get(`${BASE_URL}/byBook/${bookId}`);
export const addReview = (review) => axios.post(BASE_URL, review);
