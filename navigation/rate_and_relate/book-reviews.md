---
layout: post 
title: Book Reviews
search_exclude: true
permalink: rate_and_relate/book_reviews
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
// Prompt the user for their username
const username = prompt("Please enter your username:") || "Anonymous";

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
    },
    {
        "title": "Divergent",
        "author": "Veronica Roth",
        "cover_url": "https://upload.wikimedia.org/wikipedia/en/f/f4/Divergent_%28book%29_by_Veronica_Roth_US_Hardcover_2011.jpg"
    },
    {
        "title": "Red Queen",
        "author": "Victoria Aveyard",
        "cover_url": "https://m.media-amazon.com/images/I/71SrvkGc4zL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "A Good Girl's Guide to Murder",
        "author": "Holly Jackson",
        "cover_url": "https://m.media-amazon.com/images/I/81x-tjdbZgL._AC_UF1000,1000_QL80_.jpg"
    }
];

// Sample Goodreads rating for each book (Assumed ratings)
const bookRatings = {
    "Harry Potter and the Sorcerer's Stone": 4.8,
    "Percy Jackson & the Olympians: The Lightning Thief": 4.3,
    "The Hunger Games": 4.2,
    "Divergent": 4.1,
    "Red Queen": 4.0,
    "A Good Girl's Guide to Murder": 4.5
};

// Pick a random book
const book = books[Math.floor(Math.random() * books.length)];
let liked = false; // Initialize liked state as false
let currentRating = 0;

// Initialize comments from local storage
let comments = JSON.parse(localStorage.getItem('comments')) || {};
let likesCount = JSON.parse(localStorage.getItem('likes')) || {};
let currentLikes = likesCount[book.title] || 11; // Start with 11 likes

// Display book details in the container
document.getElementById('bookContainer').innerHTML = `
  <div class="book-card">
    <h3 class="book-title">${book.title}</h3>
    <img src="${book.cover_url}" alt="Book Cover" class="book-cover" />
    <p class="book-author">by ${book.author}</p>

    <!-- Rating Section -->
    <div id="rating" class="rating-stars">
      <span onclick="rateBook(1)">★</span>
      <span onclick="rateBook(2)">★</span>
      <span onclick="rateBook(3)">★</span>
      <span onclick="rateBook(4)">★</span>
      <span onclick="rateBook(5)">★</span>
    </div>

    <!-- Average Rating -->
    <p>Average Rating: ${bookRatings[book.title]} ★</p>

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

// Function to display comments for the current book
function displayComments() {
  const commentsList = document.getElementById('commentsList');
  commentsList.innerHTML = '';

  const bookComments = comments[book.title] || [];
  bookComments.forEach((comment, index) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('comment-item');
    commentElement.innerHTML = `
      <div class="comment-text">
        <strong>${comment.username}</strong>
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

// Function to save comments in local storage
function saveComments() {
  localStorage.setItem('comments', JSON.stringify(comments));
}

// Add a new comment
function addComment() {
  const commentInput = document.getElementById('commentInput');
  const commentText = commentInput.value.trim();
  if (commentText === '') return alert('Please enter a comment.');

  if (!comments[book.title]) comments[book.title] = [];
  comments[book.title].push({ 
    text: commentText, 
    username: username,  
    replies: [] 
  });

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

// Function to toggle like/unlike and update like count
function toggleLike() {
  liked = !liked;
  document.getElementById('heart').innerText = liked ? '❤️' : '♡';
}
  // Increase or decrease likes based on the new liked state
  if (liked) {
    currentLikes++;
  } else {
    currentLikes;
  }

  // Update likes count in local storage
  likesCount[book.title] = currentLikes; 
  localStorage.setItem('likes', JSON.stringify(likesCount)); 

  // Update the UI
  updateLikeButton();


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

// Initialize like/unlike functionality
updateLikeButton();
</script>

<style>
  /* General styling */
  body {
    background-color: #ffe6f0;
    font-family: Arial, sans-serif;
    text-align: center; /* Center everything on the page */
  }

  /* Book card styling */
  .book-card {
    background-color: #2A3B50;
    color: #AFC0D5;
    padding: 20px;
    max-width: 700px;
    margin: 20px auto; /* Centers the book card horizontally */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center; /* Ensures content inside the card is centered */
  }

  .book-title {
    font-size: 24px;
    font-weight: bold;
    color: #AFC0D5;
    margin-bottom: 10px;
  }

  .book-author {
    font-size: 18px;
    color: #AFC0D5;
    margin-bottom: 15px;
  }

  .book-cover {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .rating-stars {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .rating-stars span {
    font-size: 30px;
    cursor: pointer; /* Change cursor to pointer for stars */
    color: #ccc; /* Default color for stars */
  }

  /* Heart button styling */
  .heart-button {
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    color: #AFC0D5; /* Color for the heart */
  }

  .comments-heading {
    margin-top: 20px;
    font-size: 20px;
    color: #AFC0D5;
  }

  .comment-section {
    margin-top: 10px;
  }

  #commentInput {
    width: 80%;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  .submit-comment {
    background-color: #AFC0D5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
    color: #2A3B50;
    font-size: 16px;
  }

  .comment-item {
    margin: 10px 0;
    background-color: #325771;
    border-radius: 5px;
    padding: 10px;
    color: #2A3B50; /* Text color for comments */
  }

  .reply-button {
    background-color: #AFC0D5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 3px 6px;
    color: #2A3B50;
    font-size: 14px;
    margin-top: 5px;
  }

  .reply-item {
    margin-left: 20px;
    color: #325771; /* Color for replies */
  }
</style>
