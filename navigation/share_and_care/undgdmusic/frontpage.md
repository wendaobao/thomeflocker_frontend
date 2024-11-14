---
layout: page
title: Underground Music
description: Share music with others!
permalink: /undgdmusic/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Underground Music Vibes</title>
   <style>
    /* General Styling */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
        font-family: Arial, sans-serif;
        background-color: #000000;
        color: #FFD700;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
    }
    header {
        padding: 20px;
        width: 100%;
        max-width: 900px;
        background-color: #1F1F1F;
        text-align: center;
        border-bottom: 3px solid #FFD700;
        border-radius: 8px;
        margin-bottom: 30px;
    }
    header h1 {
        font-size: 2.5rem;
        color: #FFD700;
        text-shadow: 0px 2px 8px rgba(255, 215, 0, 0.6);
    }
    header p {
        color: #AAA;
        font-size: 1.1rem;
    }
    /* Chatroom Container */
    .chatroom-container {
        background-color: #1A1A1A;
        padding: 25px;
        border-radius: 10px;
        border: 2px solid #FFD700;
        margin-bottom: 30px;
        max-width: 800px;
        width: 100%;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
    }
    .chatroom-container h2 {
        color: #FFD700;
        text-align: center;
        margin-bottom: 20px;
    }
    #messages {
        height: 250px;
        overflow-y: auto;
        padding: 10px;
        background-color: #0D0D0D;
        border-radius: 6px;
        margin-bottom: 20px;
        border: 1px solid #FFD700;
    }
    #username, #message {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border-radius: 6px;
        border: 1px solid #FFD700;
        background-color: #333;
        color: #FFD700;
    }
    .message-form button {
        width: 100%;
        padding: 12px;
        border-radius: 6px;
        border: none;
        background-color: #FFD700;
        color: #000;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .message-form button:hover {
        background-color: #FFC700;
    }
    /* Form Container */
    .container {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 800px;
        margin-bottom: 30px;
    }
    .form-container {
        background-color: #1A1A1A;
        padding: 25px;
        border-radius: 10px;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
        width: 100%;
        border: 2px solid #FFD700;
    }
    .form-container label {
        color: #FFD700;
        font-weight: bold;
        margin-top: 10px;
    }
    .form-container input,
    .form-container textarea,
    .form-container select {
        width: 100%;
        padding: 12px;
        margin-top: 10px;
        border-radius: 6px;
        border: 1px solid #FFD700;
        background-color: #333;
        color: #FFD700;
    }
    .form-container button {
        width: 100%;
        padding: 12px;
        margin-top: 15px;
        border-radius: 6px;
        border: none;
        background-color: #FFD700;
        color: #000;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .form-container button:hover {
        background-color: #FFC700;
    }
    /* Data Display Area */
    .data {
        background-color: #1A1A1A;
        padding: 25px;
        border-radius: 10px;
        border: 2px solid #FFD700;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
        margin-top: 20px;
        max-width: 800px;
        width: 100%;
    }
    .post-item {
        background-color: #0D0D0D;
        border: 1px solid #FFD700;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 15px;
    }
</style>

<a href="{{ site.baseurl }}/undgdmusic/moderation/" style="color: #FFD700; text-decoration: none; font-size: 1rem;">Moderation Page</a>
</head>
<body>
<header>
    <h1>Welcome to the Underground Vibes!</h1>
    <p>Chat with others in real-time!</p>

</header>

<div class="chatroom-container">
    <h2>Flocker Chatroom</h2>
    <div class="chat-area" id="messages">
        <!-- Messages will appear here -->
    </div>
    <form class="message-form" id="chat-form">
        <input type="text" id="username" placeholder="Your Name" required>
        <input type="text" id="message" placeholder="Type a message..." maxlength="200" required>
        <button type="submit">Send</button>
    </form>
</div>

<script type="module">
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('chat-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value || "Anonymous";
            const message = document.getElementById('message').value;
            const timestamp = new Date().toLocaleTimeString();
            const messageHtml = `<p><span class="username">${username}</span>: ${message} <span class="timestamp">[${timestamp}]</span></p>`;
            document.getElementById("messages").innerHTML += messageHtml;
            event.target.reset();
        });
    });
</script>
<div class="container">
    <div class="form-container">
        <h2>Select Group and Channel</h2>
        <form id="selectionForm">
            <label for="group_id">Group:</label>
            <select id="group_id" name="group_id" required>
                <option value="">Select a group</option>
            </select>
            <label for="channel_id">Channel:</label>
            <select id="channel_id" name="channel_id" required>
                <option value="">Select a channel</option>
            </select>
            <button type="submit">Select</button>
        </form>
    </div>
</div>

<div class="container">
    <div class="form-container">
        <h2>Add New Post</h2>
        <form id="postForm">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
            <label for="comment">Comment:</label>
            <textarea id="comment" name="comment" required></textarea>
            <button type="submit">Add Post</button>
        </form>
    </div>
</div>

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
    // Import server URI and standard fetch options
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    /**
     * Fetch groups for dropdown selection
     * User picks from dropdown
     */
    async function fetchGroups() {
        try {
            const response = await fetch(`${pythonURI}/api/groups/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ section_name: "Share and Care" }) // Adjust the section name as needed
            });
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const groups = await response.json();
            const groupSelect = document.getElementById('group_id');
            groups.forEach(group => {
                const option = document.createElement('option');
                option.value = group.name; // Use group name for payload
                option.textContent = group.name;
                groupSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }

    /**
     * Fetch channels based on selected group
     * User picks from dropdown
     */
async function fetchChannels(groupName) {
    try {
        console.log("Fetching channels for group:", groupName);
        const response = await fetch(`${pythonURI}/api/channels/filter`, {
            ...fetchOptions,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ group_name: groupName })
        });
        
        if (!response.ok) {
            console.error('Failed to fetch channels:', response.statusText);
            return;
        }
        
        const channels = await response.json();
        console.log("Fetched channels:", channels);
        
        const channelSelect = document.getElementById('channel_id');
        channelSelect.innerHTML = '<option value="">Select a channel</option>'; // Reset
        
        channels.forEach(channel => {
            const option = document.createElement('option');
            option.value = channel.id;
            option.textContent = channel.name;
            channelSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching channels:', error);
    }
}
    /**
      * Handle group selection change
      * Channel Dropdown refresh to match group_id change
      */
    document.getElementById('group_id').addEventListener('change', function() {
        const groupName = this.value;
        if (groupName) {
            fetchChannels(groupName);
        } else {
            document.getElementById('channel_id').innerHTML = '<option value="">Select a channel</option>'; // Reset channels
        }
    });

    /**
     * Handle form submission for selection
     * Select Button: Computer fetches and displays posts
     */
    document.getElementById('selectionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const groupId = document.getElementById('group_id').value;
        const channelId = document.getElementById('channel_id').value;
        if (groupId && channelId) {
            fetchData(channelId);
        } else {
            alert('Please select both group and channel.');
        }
    });

    /**
     * Handle form submission for adding a post
     * Add Form Button: Computer handles form submission with request
     */
    document.getElementById('postForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        // Extract data from form
        const title = document.getElementById('title').value;
        const comment = document.getElementById('comment').value;
        const channelId = document.getElementById('channel_id').value;

        // Create API payload
        const postData = {
            title: title,
            comment: comment,
            channel_id: channelId
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

            // Successful post
            const result = await response.json();
            alert('Post added successfully!');
            document.getElementById('postForm').reset();
            fetchData(channelId);
        } catch (error) {
            // Present alert on error from backend
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
    });

    /**
     * Fetch posts based on selected channel
     * Handle response: Fetch and display posts
     */
    async function fetchData(channelId) {
        try {
            const response = await fetch(`${pythonURI}/api/posts/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ channel_id: channelId })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch posts: ' + response.statusText);
            }

            // Parse the JSON data
            const postData = await response.json();

            // Extract posts count
            const postCount = postData.length || 0;

            // Update the HTML elements with the data
            document.getElementById('count').innerHTML = `<h2>Count ${postCount}</h2>`;

            // Get the details div
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = ''; // Clear previous posts

            // Iterate over the postData and create HTML elements for each item
            postData.forEach(postItem => {
                const postElement = document.createElement('div');
                postElement.className = 'post-item';
                postElement.innerHTML = `
                    <h3>${postItem.title}</h3>
                    <p><strong>Channel:</strong> ${postItem.channel_name}</p>
                    <p><strong>User:</strong> ${postItem.user_name}</p>
                    <p>${postItem.comment}</p>
                `;
                detailsDiv.appendChild(postElement);
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Fetch groups when the page loads
    fetchGroups();
</script>
