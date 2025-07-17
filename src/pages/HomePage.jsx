import React from 'react';
import BookList from '../components/BookList';
import '../App.css'

export default function HomePage() {
  return (
    <div>
      <h1 className='center'>Book Review App</h1>
      <BookList />
    </div>
  );
}
