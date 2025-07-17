import React, { useEffect, useState } from 'react';
import { getBooksWithReviews } from '../services/bookReviewService';
//import mountain from ''

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooksWithReviews()
      .then(res => setBooks(res.data))
      .catch(err => {
        console.error("Error fetching books:", err);
        alert("Backend not available or CORS issue");
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {books.length === 0 ? (
          <p>No books available</p>
        ) : (
          books.map(book => {
  const avgRating =
    book.reviews && book.reviews.length > 0
      ? book.reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / book.reviews.length
      : 0;

  return (
    <div className="col-md-3 mb-4" key={book.id}>
      <div className="card h-100 shadow-sm">
        <img
  src={book.imageUrl}
  alt={book.title}
  className="card-img-top"
  style={{ height: '200px', objectFit: 'cover' }}
/>

        <div className="card-body">
          
          <h5 className="card-title text-danger text-uppercase">{book.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">by {book.author}</h6>
          <p className="card-text">
                    <strong>Genre:</strong> {book.genre}<br />
                    <strong>Publisher:</strong> {book.publisher}<br />
                    <strong>Year:</strong> {book.year}<br />
                    <strong>Language:</strong> {book.language}<br />
                    <strong>Price:</strong> ₹{book.price}
                  </p>
                  <h6>Rating: <span className="mb-2">
           {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} style={{ color: i < Math.round(avgRating) ? '#ffc107' : '#e4e5e9' }}>
                ★
              </span>
            ))}
            <span className="ms-2 text-muted">({avgRating.toFixed(1)})</span>
          </span></h6>
                  

          {/* Reviews List */}
  
  <hr />{book.reviews.length > 0 ? (
    
    <ul className="list-group list-group-flush">
      <strong>Reviews:</strong>
      {book.reviews.map(r => (
        <li className="list-group-item d-flex justify-content-between" key={r.id}>
          <span>"{r.comment}" <em>- {r.reviewerName?.trim() || 'Unknown'}</em></span>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-muted">No reviews yet.</p>
  )}
        </div>
      </div>
    </div>
  );
})

        )}
      </div>
    </div>
  );
}
