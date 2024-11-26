import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './header';


function TopBooks() {
  const [books] = useState([
    {
      title: "Elon Musk",
      author: "Walter Isaacson",
      link: "https://amzn.to/4ik2Ex9",
      imageUrl: "https://m.media-amazon.com/images/I/41e3I4phaAL._SL500_.jpg"
    },
    {
      title: "Becoming Steve Jobs",
      author: "Brent Schlender and Rick Tetzeli",
      link: "https://amzn.to/4g4h7Lk",
      imageUrl: "https://m.media-amazon.com/images/I/41k4JCHnn3L._SL500_.jpg"
    },
    {
      title: "The Innovators",
      author: "Walter Isaacson",
      link: "https://amzn.to/4fIy3aJ",
      imageUrl: "https://m.media-amazon.com/images/I/41DullzKfyL._SL500_.jpg"
    },
    {
      title: "Life 3.0: Being Human in the Age of Artificial Intelligence",
      author: "Max Tegmark",
      link: "https://amzn.to/4fIy3aJ",
      imageUrl: "https://m.media-amazon.com/images/I/41DullzKfyL._SL500_.jpg"
    },
    {
      title: "The Dip",
      author: "Seth Godin",
      link: "https://amzn.to/3V4LYzG",
      imageUrl: "https://m.media-amazon.com/images/I/41DpNe1ihmL._SL500_.jpg"
    },
    {
      title: "Modern Software Engineering",
      author: "David Farley",
      link: "https://amzn.to/3Z5cU3d",
      imageUrl: "https://m.media-amazon.com/images/I/81sji+WquSL._SY466_.jpg"
    },
    {
      title: "Choose Your Enemies Wisely",
      author: "Patrick Bet-David",
      link: "https://amzn.to/3Zyz2Vr",
      imageUrl: "https://m.media-amazon.com/images/I/719RJVozfjL._SY425_.jpg"
    },
    // {
    //   title: "Algorithms to Live By - The Computer Science of Human Decisions",
    //   author: "Brian Christian and Tom Griffiths",
    //   link: "https://amzn.to/3Or39HH",
    //   imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41dKi-SbaqL._SX327_BO1,204,203,200_.jpg"
    // },
    // {
    //   title: "The Pragmatic Programmer: 20th Anniversary Edition, 2nd Edition",
    //   author: "Andrew Hunt and David Thomas",
    //   link: "https://amzn.to/4g40VK7",
    //   imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX396_BO1,204,203,200_.jpg"
    // },
    {
      title: "Steve Jobs",
      author: "Walter Isaacson",
      link: "https://amzn.to/49oqHHb",
      imageUrl: "https://m.media-amazon.com/images/I/41VUH+eQzlL._SL500_.jpg"
    },
    {
      title: "Benjamin Franklin",
      author: "Walter Isaacson",
      link: "https://amzn.to/3OuE7aA",
      imageUrl: "https://m.media-amazon.com/images/I/51ZVtaiqUVL._SL500_.jpg"
    },
    {
      title: "Eloquent JavaScript, 3rd Edition",
      author: "Marijn Haverbeke",
      link: "https://amzn.to/3Zlpvka",
      imageUrl: "https://m.media-amazon.com/images/I/41IrzSR9KAL._SL500_.jpg"
    }
  ]);

  return (
    <>
    <Header isDark={false}/>
    <div className="nav-block">
      <div className="books-container">
        <h1 className="top-books-header">My Top Books</h1>
        <div className="books-grid">
          {books.map((book, index) => (
            <div key={index} className="book-card">
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <img src={book.imageUrl} alt={`${book.title} cover`} className="book-image" />
                <h2>{book.title}</h2>
              </a>
              <p>by {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default TopBooks;
