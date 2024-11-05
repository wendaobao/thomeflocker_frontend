---
permalink: /voteforthegoat/genres/
menu: nav/vote_for_the_goat.html
layout: post
title: Genres Of Music
description: Vote for your favorite genre of music here!
Authors: Hannah, Rowan, Gaheera, Rhea
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Genre Poll</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background: pink !important;
        }
        .container {
            text-align: center;
        }
        .vinyl-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 20px;
        }
        .vinyl-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: transparent !important;
        }
        .vinyl-item button {
            border: none;
            cursor: pointer;
            outline: none;
            background: transparent !important;
        }
        .vinyl-item img {
            background-color: #F0F0F0;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            transition: transform 0.3s;
        }
        .vinyl-item img:hover {
            transform: scale(1.1);
        }
        .vinyl-item span {
            margin-top: 8px;
            font-size: 16px;
            color: #FFC0CB;
        }
        .genre-label {
            margin-top: 5px;
            font-size: 14px;
            color: black !important; /* Set text color to black */
        }
        .channels {
            margin-top: 20px;
            display: none; /* Hidden by default */
        }
        .channel-item {
            margin: 5px 0;
            cursor: pointer; /* Change cursor to pointer for clickable items */
            font-size: 18px;
        }
        .comment-box {
            margin-top: 10px;
            display: none; /* Hidden by default */
        }
        .comment-list {
            margin-top: 10px;
            text-align: left;
        }
        .comment-item {
            margin: 5px 0;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="vinyl-grid">
            <div class="vinyl-item">
                <button onclick="vote('Rock')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Rock Vinyl">
                </button>
                <span class="genre-label">Rock</span> <!-- Black text for genre -->
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Pop')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Pop Vinyl">
                </button>
                <span class="genre-label">Pop</span> <!-- Black text for genre -->
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Hip-Hop')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Hip-Hop Vinyl">
                </button>
                <span class="genre-label">Hip-Hop</span> <!-- Black text for genre -->
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Jazz')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Jazz Vinyl">
                </button>
                <span class="genre-label">Jazz</span> <!-- Black text for genre -->
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Classical')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Classical Vinyl">
                </button>
                <span class="genre-label">Classical</span> <!-- Black text for genre -->
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Electronic')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Electronic Vinyl">
                </button>
                <span class="genre-label">Electronic</span> <!-- Black text for genre -->
            </div>
        </div>
        <div class="channels" id="channels"></div>
    </div>

    <script>
        const channelsMap = {
            'Rock': ['Classic Rock', 'Alternative Rock', 'Hard Rock'],
            'Pop': ['Top 40', 'Dance Pop', 'Indie Pop'],
            'Hip-Hop': ['Old School', 'Trap', 'East Coast'],
            'Jazz': ['Smooth Jazz', 'Bebop', 'Fusion'],
            'Classical': ['Baroque', 'Romantic', 'Modern'],
            'Electronic': ['House', 'Techno', 'Trance']
        };

        const commentsMap = {};

        function vote(genre) {
            alert(genre + " selected!");
            displayChannels(genre);
        }

        function displayChannels(genre) {
            const channelsDiv = document.getElementById('channels');
            channelsDiv.innerHTML = ''; // Clear previous channels
            const channels = channelsMap[genre];

            if (channels) {
                channels.forEach(channel => {
                    const channelItem = document.createElement('div');
                    channelItem.className = 'channel-item';
                    channelItem.textContent = channel;
                    channelItem.onclick = () => showCommentBox(channel);
                    channelsDiv.appendChild(channelItem);
                });
                channelsDiv.style.display = 'block'; // Show the channels div
            }
        }

        function showCommentBox(channel) {
            const channelsDiv = document.getElementById('channels');
            const existingCommentBox = document.querySelector('.comment-box');
            
            // If comment box already exists for this channel, toggle it
            if (existingCommentBox && existingCommentBox.dataset.channel === channel) {
                existingCommentBox.style.display = existingCommentBox.style.display === 'none' ? 'block' : 'none';
                return;
            }

            // Create a new comment box
            const commentBoxDiv = document.createElement('div');
            commentBoxDiv.className = 'comment-box';
            commentBoxDiv.dataset.channel = channel; // Store the channel name
            commentBoxDiv.innerHTML = `
                <textarea placeholder="Write a comment..." rows="4" cols="50"></textarea>
                <br>
                <button onclick="submitComment('${channel}')">Submit</button>
                <div class="comment-list" id="${channel}-comments"></div>
            `;
            channelsDiv.appendChild(commentBoxDiv);
            commentBoxDiv.style.display = 'block'; // Show the comment box
        }

          function showCommentBox(channel) {
            const channelsDiv = document.getElementById('channels');
            
            // Check if a comment box already exists for this channel
            const existingCommentBox = document.querySelector(`.comment-box[data-channel='${channel}']`);
            
            if (existingCommentBox) {
                // If it exists, toggle its visibility
                existingCommentBox.style.display = existingCommentBox.style.display === 'none' ? 'block' : 'none';
                return;
            }

            // Create a new comment box since it doesn't exist
            const commentBoxDiv = document.createElement('div');
            commentBoxDiv.className = 'comment-box';
            commentBoxDiv.dataset.channel = channel; // Store the channel name
            commentBoxDiv.innerHTML = `
                <textarea placeholder="Write a comment..." rows="4" cols="50"></textarea>
                <br>
                <button onclick="submitComment('${channel}')">Submit</button>
                <div class="comment-list" id="${channel}-comments"></div>
            `;
            channelsDiv.appendChild(commentBoxDiv);
            commentBoxDiv.style.display = 'block'; // Show the comment box
        }

   function submitComment(channel) {
            const commentBox = document.querySelector(`.comment-box[data-channel='${channel}'] textarea`);
            const commentText = commentBox.value;
            if (!commentText) {
                alert('Please enter a comment!');
                return;
            }

            // Add the comment to the comments map
            if (!commentsMap[channel]) {
                commentsMap[channel] = [];
            }
            commentsMap[channel].push(commentText);
            displayComments(channel);
            commentBox.value = ''; // Clear the comment box
        }

        function displayComments(channel) {
            const commentListDiv = document.getElementById(`${channel}-comments`);
            commentListDiv.innerHTML = ''; // Clear previous comments

            if (commentsMap[channel]) {
                commentsMap[channel].forEach(comment => {
                    const commentItem = document.createElement('div');
                    commentItem.className = 'comment-item';
                    commentItem.textContent = comment;

                    // Like button
                    const likeButton = document.createElement('button');
                    likeButton.textContent = 'Like';
                    likeButton.onclick = () => alert('You liked this comment!'); // Placeholder for like functionality

                    // Reply button
                    const replyButton = document.createElement('button');
                    replyButton.textContent = 'Reply';
                    replyButton.onclick = () => alert('Reply functionality not implemented yet.'); // Placeholder for reply functionality

                    commentItem.appendChild(likeButton);
                    commentItem.appendChild(replyButton);
                    commentListDiv.appendChild(commentItem);
                });
            }
        }
    </script>
</body>
</html>