import React, { useState } from 'react';
import { addReview } from '../services/reviewService';

export default function ReviewForm({ bookId }) {
  const [comment, setComment] = useState('');
  const [reviewer, setReviewer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = { bookId, comment, reviewer };
    addReview(review).then(() => {
      alert('Review added');
      setComment('');
      setReviewer('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={reviewer} onChange={e => setReviewer(e.target.value)} placeholder="Your Name" required />
      <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder="Your Review" required />
      <button type="submit">Submit Review</button>
    </form>
  );
}
