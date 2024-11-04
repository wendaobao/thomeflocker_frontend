---
layout: post
title: Dnero Store
description: Dnero Store
menu: nav/vote_for_the_goat.html
permalink: /voteforthegoat/dnerostore/
author: Risha Guha, Vibha Mandayam, Ava Shalon
comments: true
---

<img src="{{ site.baseurl }}/images/dnerostore/Dnero_Store_Header.png" alt="Dnero Store Header" style="width: 100%; height: auto;">
<a href="{{ site.baseurl }}/dnerostore-mod/" class="mod-rules-button">Mod Rules</a>

<details>
  <summary style="color: white;">Room Details</summary>
  <p style="color: white;">Discuss your favorite D'Nero store items here!</p>
  <h4 style="color: white;">D'Nero Store</h4>
  <ul>
    <li style="color: white;">Food/Drink
      <ul>
        <li style="color: white;">Trail Mix</li>
        <li style="color: white;">Nutella</li>
        <li style="color: white;">Famous Amos</li>
        <li style="color: white;">Chips</li>
        <li style="color: white;">Sports Drinks</li>
        <li style="color: white;">Fruit Snacks</li>
        <li style="color: white;">Water</li>
      </ul>
    </li>
    <li style="color: white;">Pizza
      <ul>
        <li style="color: white;">Whole Pizza</li>
      </ul>
    </li>
    <li style="color: white;">Spirit
      <ul>
        <li style="color: white;">Morning Song</li>
        <li style="color: white;">DNHS T-shirt</li>
        <li style="color: white;">1 Pom Pom</li>
      </ul>
    </li>
    <li style="color: white;">Limited Edition
      <ul>
        <li style="color: white;">Candy</li>
        <li style="color: white;">Squishmallow mini</li>
        <li style="color: white;">Starbucks SDSU Tumbler</li>
      </ul>
    </li>
    <li style="color: white;">Gift Card
      <ul>
        <li style="color: white;">Chik-fil-a</li>
        <li style="color: white;">Canes</li>
      </ul>
    </li>
  </ul>
</details>

<div class="container">
  <div class="post-poll-container">
    <div class="post-container">
      <div class="image-container">
        <img src="{{ site.baseurl }}/images/dnerostore/pizza.jpg" alt="Pizza Image" class="post-image">
      </div>
      <div class="action-bar">
        <button class="like-button" onclick="toggleLike(this)">
          <span class="heart-icon" style="color: white;">&#10084;</span>
        </button>
        <span class="like-count" style="color: black;">136 Likes</span>
        <button class="action-icon" onclick="toggleCommentForm(this)">
          💬
        </button>
        <button class="action-icon">📤</button>
      </div>

      <div class="comment-section">
          <form class="comment-form" style="display:none;" onsubmit="postComment(event, this)">
              <div class="form-group">
                  <label for="username">Name:</label>
                  <input type="text" name="username" required>
              </div>
              <div class="form-group">
                  <label for="comment">Comment:</label>
                  <textarea name="comment" rows="3" required></textarea>
              </div>
              <button type="submit">Post Comment</button>
          </form>
          <div class="comments-display"></div>
      </div>

  <!-- New separate container for upload section -->
  <div class="upload-container">
    <h3 style="color: black;">Upload Your Own Post</h3>
    <input type="file" id="image-upload" accept="image/*" required>
    <input type="text" id="caption" placeholder="Caption" required>
    <button onclick="uploadPost()">Upload</button>
  </div>
</div>

<script>
  function toggleLike(button) {
    const likeCountSpan = button.nextElementSibling;
    let likeCount = parseInt(likeCountSpan.textContent) || 0;
    let isLiked = button.classList.toggle("liked");

    // Change the heart color based on the like state
    const heartIcon = button.querySelector(".heart-icon");
    heartIcon.style.color = isLiked ? "red" : "white"; // Change color to red if liked, else black

    likeCount += isLiked ? 1 : -1;
    likeCountSpan.textContent = `${likeCount} Like${likeCount === 1 ? '' : 's'}`;
  }

  function toggleCommentForm(button) {
    const commentForm = button.closest('.action-bar').nextElementSibling.querySelector('.comment-form');
    commentForm.style.display = commentForm.style.display === "none" ? "block" : "none";
  }

  function postComment(event, form) {
    event.preventDefault();
    const username = form.username.value;
    const commentText = form.comment.value;

    const comment = document.createElement("div");
    comment.className = "comment";
    comment.innerHTML = `<strong>${username}:</strong> ${commentText}`;
    
    const commentsDisplay = form.closest('.comment-section').querySelector('.comments-display');
    commentsDisplay.appendChild(comment);
    form.reset();
  }

  function uploadPost() {
    const imageUpload = document.getElementById("image-upload");
    const captionInput = document.getElementById("caption");

    if (imageUpload.files.length === 0) {
      alert("Please upload an image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const newPostContainer = document.createElement("div");
      newPostContainer.className = "post-container";
      newPostContainer.innerHTML = `
        <div class="image-container">
          <img src="${e.target.result}" alt="User Uploaded Post" class="post-image">
        </div>
        <div class="action-bar">
          <button class="like-button" onclick="toggleLike(this)">
            <span class="heart-icon" style="color: white;">&#10084;</span>
          </button>
          <span class="like-count" style="color: black;">0 Likes</span>
          <button class="action-icon" onclick="toggleCommentForm(this)">
            💬
          </button>
          <button class="action-icon">📤</button>
        </div>
        <div class="comment-section">
          <form class="comment-form" style="display:none;" onsubmit="postComment(event, this)">
            <div class="form-group">
              <label for="username">Name:</label>
              <input type="text" name="username" required>
            </div>
            <div class="form-group">
              <label for="comment">Comment:</label>
              <textarea name="comment" rows="3" required></textarea>
            </div>
            <button type="submit">Post Comment</button>
          </form>
          <div class="comments-display"></div>
        </div>
      `;
      document.querySelector(".container").appendChild(newPostContainer);
      captionInput.value = "";
      imageUpload.value = "";
    };
    reader.readAsDataURL(imageUpload.files[0]);
  }
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: black; /* Set default text color to black */
    margin: 0;
    padding: 20px;
  }

  .container {
    max-width: 600px; /* Adjusted max-width for the main container */
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .post-container {
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 20px;
    width: 90%;
  }

  .image-container {
    text-align: center;
  }

  .post-image {
    width: 100%; /* Ensures images are responsive */
    height: auto;
    border-radius: 4px;
  }

  .action-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .like-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
    color: black; /* Default heart color */
  }

  .like-button.liked .heart-icon {
    color: red; /* Heart color when liked */
  }

  .comment-section {
    margin-top: 15px;
  }

  .comments-display {
    margin-top: 10px;
    border-top: 1px solid #ddd;
    padding-top: 10px;
  }

  .comment {
    margin-bottom: 5px;
    color: black; /* Color for comments */
  }

  .upload-container {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fafafa;
  }

  .upload-container h3 {
    margin-bottom: 10px;
  }

  .form-group {
    margin-bottom: 10px;
  }

  .form-group label {
    color: black; /* Set the label text color to black */
    display: block; /* Make sure labels are block elements */
    margin-bottom: 5px; /* Spacing below the label */
}


  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: #4CAF50; /* Green background */
    color: white; /* White text */
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049; /* Darker green on hover */
  }

  .mod-rules-button {
    display: inline-block;
    margin-bottom: 15px;
    padding: 10px 15px;
    background-color: #007BFF; /* Bootstrap primary color */
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }

  .mod-rules-button:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
</style>

