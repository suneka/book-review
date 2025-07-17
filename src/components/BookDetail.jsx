import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBooksWithReviews } from '../services/bookReviewService';
import ReviewForm from './ReviewForm';

export default function BookDetail() {
  const { bookId } = useParams();
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    getBooksWithReviews(bookId).then(res => setBookData(res.data));
  }, [bookId]);

  if (!bookData) return <p>Loading...</p>;

  return (
    <div>
      <h2>{bookData.title}</h2>
      <p>Author: {bookData.author}</p>
      <h3>Reviews:</h3>
      <ul>
        {bookData.reviews?.map(r => (
          <li key={r.id}>{r.comment} - {r.reviewer}</li>
        ))}
      </ul>
      <ReviewForm bookId={bookId} />
    </div>
  );
}
