---
layout: post
title: Dnero Store
description: Dnero Store
menu: nav/vote_for_the_goat.html
permalink: /voteforthegoat/dnerostore/
author: Risha Guha, Vibha Mandayam, Ava Shalon
comments: true
---



<img src="{{ site.baseurl }}/images/dnerostore/Dnero_Store_Header.png" alt="Title">

<details>
  <summary>Room Details</summary>

  <a href="{{ site.baseurl }}/dnerostore-mod/">Moderation Rules</a>
  <p>Discuss your favorite D'Nero store items here!</p>
  <h4>D'Nero Store</h4>
  <ul>
    <li>Food/Drink</li>
    <ul>
      <li>Trail Mix</li>
      <li>Nutella</li>
      <li>Famous Amos</li>
      <li>Chips</li>
      <li>Sports Drinks</li>
      <li>Fruit Snacks</li>
      <li>Water</li>
    </ul>
    <li>Pizza</li>
    <ul>
      <li>Whole Pizza</li>
    </ul>
    <li>Spirit</li>
    <ul>
      <li>Morning Song</li>
      <li>DNHS T-shirt</li>
      <li>1 Pom Pom</li>
    </ul>
    <li>Limited Edition</li>
    <ul>
      <li>Candy</li>
      <li>Squishmallow mini</li>
      <li>Starbucks SDSU Tumbler</li>
    </ul>
    <li>Gift Card</li>
    <ul>
      <li>Chik-fil-a</li>
      <li>Canes</li>
    </ul>
  </ul>
</details>




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


<style>
    .container {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 1200px;
        padding: 20px;
        box-sizing: border-box;
    }
    .data {
        display: flex;
        align-items: flex-start;
        max-width: 800px;
        width: 100%;
        background-color: #2c3e50;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .left-side {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 20px;
    }
    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .post-item {
        background-color: #34495e;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        color: #ecf0f1;
    }
    .post-item h3 {
        margin: 0 0 5px 0;
    }
    .post-item p {
        margin: 0;
    }
</style>

<!-- Analytics Page -->
<div class="container">
    <div id="data" class="data">
        <div class="left-side">
            <p id="count"></p>
        </div>
        <div class="details" id="details">
        </div>
    </div>
</div>

<script type="module">
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    // URL to fetch all posts
    const postApiUrl = `${pythonURI}/api/post`;

    async function fetchData() {
        try {
            // Fetch all posts from the backend
            const postApiResponse = await fetch(postApiUrl, fetchOptions);

            if (!postApiResponse.ok) {
                throw new Error('Failed to fetch post API links: ' + postApiResponse.statusText);
            }

            // Parse the JSON data from the response
            const postData = await postApiResponse.json();

            // Count the total posts and display it
            const postCount = postData.length || 0;
            document.getElementById('count').innerHTML = `<h2>Count: ${postCount}</h2>`;

            // Get the details div
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = ''; // Clear previous posts

            // Iterate over postData and create HTML elements for each item
            postData.forEach(postItem => {
                const postElement = document.createElement('div');
                postElement.className = 'post-item';
                postElement.innerHTML = `
                    <h3>${postItem.title}</h3>
                    <p><strong>Group:</strong> ${postItem.group_name}</p>
                    <p><strong>User:</strong> ${postItem.user_name}</p>
                    <p>${postItem.content}</p>
                `;
                detailsDiv.appendChild(postElement);
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Call the fetchData function to load all posts
    fetchData();
</script>




<style>
    .container {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 1200px;
        padding: 20px;
        box-sizing: border-box;
    }
    .form-container {
        display: flex;
        flex-direction: column;
        max-width: 800px;
        width: 100%;
        background-color: #2c3e50;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        color: #ecf0f1;
    }
    .form-container label {
        margin-bottom: 5px;
    }
    .form-container input, .form-container textarea, .form-container select {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        width: 100%;
    }
    .form-container button {
        padding: 10px;
        border-radius: 5px;
        border: none;
        background-color: #34495e;
        color: #ecf0f1;
        cursor: pointer;
    }
</style>
<div class="container">
    <div class="form-container">
        <h2>Add New Post</h2>
        <form id="postForm">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
            <label for="content">Content:</label>
            <textarea id="content" name="content" required></textarea>
            <label for="group_id">Group:</label>
            <select id="group_id" name="group_id" required>
                <option value="">Select a group</option>
            </select>
            <button type="submit">Add Post</button>
        </form>
    </div>
</div>

<script type="module">
    // Import server URI and standard fetch options
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    // Fetch groups for dropdown selection
    async function fetchGroups() {
        try {
            const response = await fetch(`${pythonURI}/api/group`, fetchOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const groups = await response.json();
            const groupSelect = document.getElementById('group_id');
            groups.forEach(group => {
                const option = document.createElement('option');
                option.value = group.id;
                option.textContent = group.name;
                groupSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }

    // Handle form submission
    document.getElementById('postForm').addEventListener('submit', async function(event) {
        // Prevent default from submission
        event.preventDefault();

        // Extract data from form
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const group_id = document.getElementById('group_id').value;

        // Create API payload
        const postData = {
            title: title,
            content: content,
            group_id: group_id
        };

        // Trap errors
        try {
            // Send POST request to backend, purpose is to write to database
            const response = await fetch(`${pythonURI}/api/post`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error('Failed to add post: ' + response.statusText);
            }

            // Succesfull post
            const result = await response.json();
            alert('Post added successfully!');
            document.getElementById('postForm').reset();
        } catch (error) {
            // Present alert on error from backend
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
    });

    // Fetch groups when the page loads
    fetchGroups();
</script>
