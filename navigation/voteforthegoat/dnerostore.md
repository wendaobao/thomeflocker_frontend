---
layout: post
title: D'nero Store
description: D'nero Store
permalink: /voteforthegoat/dnerostore/
comments: true
---






<img src="{{ site.baseurl }}/images/dnerostore/Dnero_Store_Header.png" alt="Title">


<!-- Moderator Rules Image Link -->
<div style="display: flex; justify-content: center; margin: 20px 0;">
  <a href="{{ site.baseurl }}/dnerostore-mod/" target="_blank">
    <img src="{{ site.baseurl }}/images/dnerostore/mod_rules_button.png" alt="Mod Rules" style="cursor: pointer;">
  </a>
</div>


<div class="container">
  <div class="post-container">
    <div class="image-container">
      <img src="{{ site.baseurl }}/images/dnerostore/pizza.jpg" alt="Pizza Image">
    </div>
    <div class="action-bar">
      <button id="like-btn" onclick="toggleLike()">
        <span id="heart" class="heart-icon">&#10084;</span>
      </button>
      <span id="like-count" class="like-count">136 Likes</span>
      <button id="comment-btn">
        <span class="action-icon">💬</span> <!-- Comment icon -->
      </button>
      <button id="share-btn">
        <span class="action-icon">📤</span> <!-- Share icon -->
      </button>
    </div>
    <!-- Comment Section -->
    <div id="comment-section">
      <!-- Comment form -->
      <form id="comment-form" style="display:none;">
        <div class="form-group">
          <label for="username" style="color:#05092e;">Name:</label>
          <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="comment" style="color:#05092e;">Comment:</label>
          <textarea id="comment" name="comment" rows="3" required></textarea>
        </div>
        <button type="submit">Post Comment</button>
      </form>
      <!-- Display area for comments -->
      <div id="comments-display">
        <!-- Comments will appear here -->
      </div>
    </div>
  </div>




  <div class="poll-container">
    <h3>Would you prefer pizza or cookies from D'Nero Store?</h3>
    <div>
      <input type="radio" id="pizza" name="poll" value="pizza">
      <label for="pizza">🍕 Pizza</label><br>
      <input type="radio" id="cookies" name="poll" value="cookies">
      <label for="cookies">🍪 Cookies</label>
    </div>
    <button onclick="submitVote()">Vote</button>
    <button onclick="viewResults()">View Results</button>
    <!-- Results display -->
    <div id="results" style="display:none; margin-top: 15px;">
      <div id="pizza-bar" class="result-bar"></div>
      <div id="cookies-bar" class="result-bar"></div>
    </div>
  </div>
</div>




<script>
  // Initialize like count and liked status
  var likeCount = 136;
  var isLiked = false;




  // Toggle like count and heart color
  function toggleLike() {
    if (isLiked) {
      likeCount--;
      document.getElementById("heart").style.color = "grey";
    } else {
      likeCount++;
      document.getElementById("heart").style.color = "red";
    }
    isLiked = !isLiked;
    document.getElementById("like-count").innerHTML = likeCount + (likeCount === 1 ? " Like" : " Likes");
  }




  // Show and hide the comment form
  document.getElementById("comment-btn").addEventListener("click", () => {
    const form = document.getElementById("comment-form");
    form.style.display = form.style.display === "none" ? "block" : "none";
  });




  // Handle comment form submission
  document.getElementById("comment-form").addEventListener("submit", (event) => {
    event.preventDefault();




    const username = document.getElementById("username").value;
    const commentText = document.getElementById("comment").value;




    const comment = document.createElement("div");
    comment.classList.add("comment");




    const author = document.createElement("div");
    author.classList.add("comment-author");
    author.textContent = username;




    const text = document.createElement("div");
    text.classList.add("comment-text");
    text.textContent = commentText;




    comment.appendChild(author);
    comment.appendChild(text);




    const commentsDisplay = document.getElementById("comments-display");
    commentsDisplay.insertBefore(comment, commentsDisplay.firstChild);




    document.getElementById("username").value = "";
    document.getElementById("comment").value = "";
  });




  // Poll functions (same as before)
  var pizzaVotes = 0;
  var cookiesVotes = 0;




  function submitVote() {
    var pollChoice = document.querySelector('input[name="poll"]:checked');
    if (pollChoice) {
      if (pollChoice.value === "pizza") {
        pizzaVotes++;
      } else if (pollChoice.value === "cookies") {
        cookiesVotes++;
      }
      alert("Vote submitted!");
    } else {
      alert("Please select an option to vote.");
    }
  }




  function viewResults() {
    var totalVotes = pizzaVotes + cookiesVotes;
    if (totalVotes === 0) {
      alert("No votes submitted yet!");
      return;
    }




    var pizzaPercent = Math.round((pizzaVotes / totalVotes) * 100);
    var cookiesPercent = Math.round((cookiesVotes / totalVotes) * 100);




    document.getElementById("pizza-bar").style.width = pizzaPercent + "%";
    document.getElementById("pizza-bar").innerText = "Pizza: " + pizzaPercent + "%";
    document.getElementById("cookies-bar").style.width = cookiesPercent + "%";
    document.getElementById("cookies-bar").innerText = "Cookies: " + cookiesPercent + "%";




    document.getElementById("results").style.display = "block";
  }
</script>




<style>
  /* Main container for layout */
  .container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 50px;
  }




  /* Post container styles */
  .post-container {
    width: 320px;
    border: 1px solid #dbdbdb;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 5px;
  }




  .image-container img {
    width: 100%;
    height: auto;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }




  /* Action bar styling */
  .action-bar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
  }




  .action-bar button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
  }




  .heart-icon {
    font-size: 24px;
    color: grey;
    transition: color 0.3s ease;
  }




  .like-count {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }




  .action-icon {
    font-size: 24px;
  }




  /* Comment section styling */
  #comment-section {
    max-width: 300px;
    margin: 20px auto;
  }




  .comment {
    background-color: #05092e;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
  }




  .comment-author {
    font-weight: bold;
    font-size: 0.9em;
    color: #f1f1f1;
  }




  .comment-text {
    margin-top: 5px;
    font-size: 0.9em;
  }




  /* Align Name and Comment fields */
  #comment-form .form-group {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }




  #comment-form label {
    flex-shrink: 0;
    width: 70px;
    text-align: right;
    margin-right: 10px;
  }




  #comment-form input[type="text"],
  #comment-form textarea {
    flex-grow: 1;
    max-width: 100%;
  }




  /* Poll container styles */
  .poll-container {
      width: 300px;
      padding: 20px;
      border: 1px solid #dbdbdb;
      border-radius: 12px;
      background-color: #f9f9f9;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      height: 300px; /* Set a fixed height */
      overflow: hidden; /* Prevent overflow */
  }




  .poll-container h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: black;
  }




  .poll-container label {
    font-size: 16px;
    color: black;
  }




  .poll-container button {
    margin-top: 10px;
    margin-right: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }




  .result-bar {
    background-color: #4caf50;
    color: black;
    text-align: center;
    padding: 8px 0;
    margin-top: 5px;
    border-radius: 5px;
    width: 100%;
    height: 30px;
    max-width: 300px;
    white-space: nowrap;
  }




  /* Moderator Rules button */
  .moderator-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: black;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
  }




  .moderator-btn:hover {
    background-color: #444;
  }




</style>


