---
toc: true
layout: post
title: Voting Chatroom
permalink: /chatroom
comments: true
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Platform</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1c1e24;
            color: #fff;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .container {
            width: 80%;
            max-width: 800px;
        }

        h1 {
            font-size: 2em;
            margin-bottom: 10px;
        }

        .card {
            background-color: #2e3a4d;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .card h2 {
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        .card label {
            display: block;
            margin-top: 10px;
        }

        .card select,
        .card input[type="text"],
        .card textarea {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border-radius: 5px;
            border: none;
            background-color: #1c1e24;
            color: #fff;
        }

        .button {
            background-color: #4a90e2;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Voting Chatroom</h1>

        <!-- Group and Channel Selection -->
        <div class="card">
            <h2>Select Group and Channel</h2>
            <label for="group">Group:</label>
            <select id="group">
                <option value="general">General</option>
                <option value="private">Private</option>
            </select>

            <label for="channel">Channel:</label>
            <select id="channel">
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
                <option value="Electronic">Electronic</option>
                <option value="Hip-Hop">Hip-Hop</option>
                <option value="Classical">Classical</option>
            </select>

            <button class="button" onclick="loadPosts()">Select</button>
        </div>

        <!-- Post Creation -->
        <div class="card">
            <h2>Add New Post</h2>
            <label for="title">Title:</label>
            <input type="text" id="title" placeholder="Enter title...">

            <label for="comment">Comment:</label>
            <textarea id="comment" rows="4" placeholder="Enter your comment..."></textarea>

            <button class="button" onclick="addPost()">Add Post</button>
        </div>

        <!-- Post Feed -->
        <div class="card" id="post-feed">
            <h2>Posts</h2>
            <div id="posts"></div>
        </div>
    </div>

    <script>
        const postFeedDiv = document.getElementById('posts');
        const titleInput = document.getElementById('title');
        const commentInput = document.getElementById('comment');
        const groupSelect = document.getElementById('group');
        const channelSelect = document.getElementById('channel');

        // Load posts from localStorage when the page loads
        const posts = JSON.parse(localStorage.getItem('chatPosts')) || {};

        // Function to add a new post
        function addPost() {
            const title = titleInput.value.trim();
            const comment = commentInput.value.trim();
            const group = groupSelect.value;
            const channel = channelSelect.value;

            if (title === '' || comment === '') {
                alert("Please enter both a title and a comment.");
                return;
            }

            const newPost = {
                title: title,
                comment: comment,
                timestamp: new Date().toLocaleString(),
            };

            // Initialize group and channel if not already present
            if (!posts[group]) posts[group] = {};
            if (!posts[group][channel]) posts[group][channel] = [];

            // Add the new post to the appropriate group and channel
            posts[group][channel].push(newPost);
            localStorage.setItem('chatPosts', JSON.stringify(posts));

            // Display the new post immediately
            displayPost(newPost);

            // Clear the input fields
            titleInput.value = '';
            commentInput.value = '';
        }

        // Function to load posts for the selected group and channel
        function loadPosts() {
            const group = groupSelect.value;
            const channel = channelSelect.value;

            // Clear the post feed display
            postFeedDiv.innerHTML = '';

            // Display posts for the selected group and channel
            if (posts[group] && posts[group][channel]) {
                posts[group][channel].forEach(post => displayPost(post));
            } else {
                postFeedDiv.innerHTML = '<p>No posts available for this channel. Be the first to add one!</p>';
            }
        }

        // Function to display a single post
        function displayPost(post) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post-item');
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.comment}</p>
                <small>Posted on: ${post.timestamp}</small>
            `;
            postFeedDiv.appendChild(postDiv);
        }

        // Initial load of posts
        loadPosts();
    </script>
</body>
</html>
