---
layout: post 
title: Book Reviews
search_exclude: true
permalink: rate_and_relate/book_reviews/
menu: nav/rate_and_relate.html
author: Soumini, Ahmad, Nikith, Kush
---
## Rules
- Be respectful to others
- No cursing

# Book of the day
<!-- Book of the Day -->

<div id="bookContainer">
  <!-- Book content will be dynamically added here -->
</div>

<script>
// Sample book list with image, title, and author
const books = [
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "cover_url": "https://m.media-amazon.com/images/I/71XqqKTZz7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Percy Jackson & the Olympians: The Lightning Thief",
        "author": "Rick Riordan",
        "cover_url": "https://m.media-amazon.com/images/I/91WN6a6F3RL._SY522_.jpg"
    },
    {
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "cover_url": "https://play-lh.googleusercontent.com/GkcEmu7R-4I3zdNz_A6IzfLS-GXUWigcbdFkNVxZSRjtSiRj2roQ0cixvwTEzgDr4iNP"
    }
];

// Pick a random book
const book = books[Math.floor(Math.random() * books.length)];
let liked = false;
let currentRating = 0;

// Initialize comments from local storage
let comments = JSON.parse(localStorage.getItem('comments')) || {};

// Display book details in the container
document.getElementById('bookContainer').innerHTML = `
  <div class="book-card">
    <h3 class="book-title">${book.title}</h3>
    <img src="${book.cover_url}" alt="Book Cover" width="600" height="400" title="${book.title}" class="book-cover" />
    <p class="book-author">by ${book.author}</p>

    <!-- Rating Section -->
    <div id="rating" class="rating-stars">
      <span onclick="rateBook(1)">★</span>
      <span onclick="rateBook(2)">★</span>
      <span onclick="rateBook(3)">★</span>
      <span onclick="rateBook(4)">★</span>
      <span onclick="rateBook(5)">★</span>
    </div>

    <!-- Like Button (Heart) -->
    <button onclick="toggleLike()" id="likeButton" class="heart-button">
      <span id="heart">♡</span>
    </button>

    <!-- Comment Section -->
    <h4 class="comments-heading">Comments:</h4>
    <div id="commentSection" class="comment-section">
      <textarea id="commentInput" placeholder="Add a comment..."></textarea>
      <button onclick="addComment()" class="submit-comment">Submit</button>
      <ul id="commentsList"></ul>
    </div>
  </div>
`;

// Display initial comments
function displayComments() {
  const commentsList = document.getElementById('commentsList');
  commentsList.innerHTML = '';

  const bookComments = comments[book.title] || [];
  bookComments.forEach((comment, index) => {
    const likeStatus = comment.liked ? 'Liked' : 'Not Liked';
    const commentElement = document.createElement('li');
    commentElement.classList.add('comment-item');
    commentElement.innerHTML = `
      <div class="comment-text">
        <strong>${likeStatus}</strong> | Rating: ${comment.rating}/5
        <br>${comment.text}
      </div>
      <button onclick="replyToComment(${index})" class="reply-button">Reply</button>
      <ul class="replies">
        ${comment.replies.map(reply => `<li class="reply-item">${reply}</li>`).join('')}
      </ul>
    `;
    commentsList.appendChild(commentElement);
  });
}

// Save comments to local storage
function saveComments() {
  localStorage.setItem('comments', JSON.stringify(comments));
}

// Add a new comment
function addComment() {
  const commentInput = document.getElementById('commentInput');
  const commentText = commentInput.value.trim();
  if (commentText === '') return alert('Please enter a comment.');

  if (!comments[book.title]) comments[book.title] = [];
  comments[book.title].push({ text: commentText, liked, rating: currentRating, replies: [] });
  saveComments();
  displayComments();
  commentInput.value = '';
}

// Reply to a comment
function replyToComment(index) {
  const replyText = prompt("Enter your reply:");
  if (replyText && replyText.trim() !== '') {
    comments[book.title][index].replies.push(replyText.trim());
    saveComments();
    displayComments();
  }
}

// Like button toggle
function toggleLike() {
  liked = !liked;
  document.getElementById('heart').innerText = liked ? '❤️' : '♡';
}

// Rate book function to change star colors and set current rating
function rateBook(rating) {
  currentRating = rating;
  const stars = document.querySelectorAll('#rating span');
  stars.forEach((star, index) => {
    star.style.color = index < rating ? 'gold' : '#ccc';
  });
}

// Display initial comments for this book
displayComments();
</script>

<style>
  /* General styling */
  body {
    background-color: #ffe6f0;
    font-family: Arial, sans-serif;
  }
  .book-card {
    background-color: #fff;
    color: #333;
    padding: 20px;
    max-width: 700px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .book-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  .book-author {
    font-size: 18px;
    color: #555;
    margin-bottom: 15px;
  }
  .book-cover {
    display: block;
    max-width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  /* Rating stars */
  .rating-stars {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
  #rating span {
    font-size: 24px;
    cursor: pointer;
    color: #ccc;
    transition: color 0.2s;
  }

  /* Heart button */
  .heart-button {
    display: block;
    width: 100%;
    background-color: transparent;
    color: #ff6f61;
    border: none;
    padding: 10px;
    font-size: 24px;
    cursor: pointer;
  }

  /* Comments section */
  .comments-heading {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #333;
  }
  .comment-section textarea, .reply-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    resize: none;
  }
  .submit-comment {
    background-color: #ff6f61;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  .comment-item, .reply-item {
    background-color: #ffe6f0;
    color: #b3005e; /* Dark pink color for comments */
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 16px;
  }
  .comment-item {
    border: 1px solid #ff6f61;
    margin-bottom: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
  .reply-button {
    font-size: 12px;
    color: #007bff;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    text-decoration: underline;
  }
  .replies {
    margin-left: 20px;
    padding-left: 0;
  }
</style>
<!-- Book of the Day -->

<div id="bookContainer">
  <!-- Book content will be dynamically added here -->
</div>

<script>
// Sample book list with image, title, and author
const books = [
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "cover_url": "https://m.media-amazon.com/images/I/71XqqKTZz7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Percy Jackson & the Olympians: The Lightning Thief",
        "author": "Rick Riordan",
        "cover_url": "https://m.media-amazon.com/images/I/91WN6a6F3RL._SY522_.jpg"
    },
    {
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "cover_url": "https://play-lh.googleusercontent.com/GkcEmu7R-4I3zdNz_A6IzfLS-GXUWigcbdFkNVxZSRjtSiRj2roQ0cixvwTEzgDr4iNP"
    }
];

// Pick a random book
const book = books[Math.floor(Math.random() * books.length)];
let liked = false;
let currentRating = 0;

// Initialize comments from local storage
let comments = JSON.parse(localStorage.getItem('comments')) || {};

// Display book details in the container
document.getElementById('bookContainer').innerHTML = `
  <div class="book-card">
    <h3 class="book-title">${book.title}</h3>
    <img src="${book.cover_url}" alt="Book Cover" width="600" height="400" title="${book.title}" class="book-cover" />
    <p class="book-author">by ${book.author}</p>

    <!-- Rating Section -->
    <div id="rating" class="rating-stars">
      <span onclick="rateBook(1)">★</span>
      <span onclick="rateBook(2)">★</span>
      <span onclick="rateBook(3)">★</span>
      <span onclick="rateBook(4)">★</span>
      <span onclick="rateBook(5)">★</span>
    </div>

    <!-- Like Button (Heart) -->
    <button onclick="toggleLike()" id="likeButton" class="heart-button">
      <span id="heart">♡</span>
    </button>

    <!-- Comment Section -->
    <h4 class="comments-heading">Comments:</h4>
    <div id="commentSection" class="comment-section">
      <textarea id="commentInput" placeholder="Add a comment..."></textarea>
      <button onclick="addComment()" class="submit-comment">Submit</button>
      <ul id="commentsList"></ul>
    </div>
  </div>
`;

// Display initial comments
function displayComments() {
  const commentsList = document.getElementById('commentsList');
  commentsList.innerHTML = '';

  const bookComments = comments[book.title] || [];
  bookComments.forEach((comment, index) => {
    const likeStatus = comment.liked ? 'Liked' : 'Not Liked';
    const commentElement = document.createElement('li');
    commentElement.classList.add('comment-item');
    commentElement.innerHTML = `
      <div class="comment-text">
        <strong>${likeStatus}</strong> | Rating: ${comment.rating}/5
        <br>${comment.text}
      </div>
      <button onclick="replyToComment(${index})" class="reply-button">Reply</button>
      <ul class="replies">
        ${comment.replies.map(reply => `<li class="reply-item">${reply}</li>`).join('')}
      </ul>
    `;
    commentsList.appendChild(commentElement);
  });
}

// Save comments to local storage
function saveComments() {
  localStorage.setItem('comments', JSON.stringify(comments));
}

// Add a new comment
function addComment() {
  const commentInput = document.getElementById('commentInput');
  const commentText = commentInput.value.trim();
  if (commentText === '') return alert('Please enter a comment.');

  if (!comments[book.title]) comments[book.title] = [];
  comments[book.title].push({ text: commentText, liked, rating: currentRating, replies: [] });
  saveComments();
  displayComments();
  commentInput.value = '';
}

// Reply to a comment
function replyToComment(index) {
  const replyText = prompt("Enter your reply:");
  if (replyText && replyText.trim() !== '') {
    comments[book.title][index].replies.push(replyText.trim());
    saveComments();
    displayComments();
  }
}

// Like button toggle
function toggleLike() {
  liked = !liked;
  document.getElementById('heart').innerText = liked ? '❤️' : '♡';
}

// Rate book function to change star colors and set current rating
function rateBook(rating) {
  currentRating = rating;
  const stars = document.querySelectorAll('#rating span');
  stars.forEach((star, index) => {
    star.style.color = index < rating ? 'gold' : '#ccc';
  });
}

// Display initial comments for this book
displayComments();
</script>

<style>
  /* General styling */
  body {
    background-color: #ffe6f0;
    font-family: Arial, sans-serif;
  }
  .book-card {
    background-color: #fff;
    color: #333;
    padding: 20px;
    max-width: 700px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .book-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  .book-author {
    font-size: 18px;
    color: #555;
    margin-bottom: 15px;
  }
  .book-cover {
    display: block;
    max-width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  /* Rating stars */
  .rating-stars {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
  #rating span {
    font-size: 24px;
    cursor: pointer;
    color: #ccc;
    transition: color 0.2s;
  }

  /* Heart button */
  .heart-button {
    display: block;
    width: 100%;
    background-color: transparent;
    color: #ff6f61;
    border: none;
    padding: 10px;
    font-size: 24px;
    cursor: pointer;
  }

  /* Comments section */
  .comments-heading {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #333;
  }
  .comment-section textarea, .reply-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    resize: none;
  }
  .submit-comment {
    background-color: #ff6f61;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  .comment-item, .reply-item {
    background-color: #ffe6f0;
    color: #b3005e; /* Dark pink color for comments */
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 16px;
  }
  .comment-item {
    border: 1px solid #ff6f61;
    margin-bottom: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
  .reply-button {
    font-size: 12px;
    color: #007bff;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    text-decoration: underline;
  }
  .replies {
    margin-left: 20px;
    padding-left: 0;
  }
</style>
