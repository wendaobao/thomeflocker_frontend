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

<!-- Discover New Artists Tab Content -->
<div class="tab-content" id="discover">
    <div class="chatroom-container">
        <h2>Discover New Artists</h2>
        
        <!-- Search Bar -->
        <div class="search-bar">
            <input type="text" id="searchQuery" placeholder="Search for more underground artists..." />
            <button onclick="searchGoogle()">Search</button>
        </div>
        
        <ul class="artist-list">
            <li class="artist-item">
                <strong>Artist Name:</strong> Lil Xtra <br>
                <span class="description">
                    Most Listened Track: "Under Pressure"<br>
                    Latest Album: *Lost in the Vibe*<br>
                    Monthly Listeners: 150,000<br>
                    Known for mixing emo with rap vibes.<br>
                    <a href="https://open.spotify.com/track/47DlkXm0LgQcJcz4nry9Gw" target="_blank">Listen on Spotify</a>
                </span>
            </li>
            <li class="artist-item">
                <strong>Artist Name:</strong> Sad Frosty <br>
                <span class="description">
                    Most Listened Track: "ADHD"<br>
                    Latest Album: *Graveyard Shift*<br>
                    Monthly Listeners: 200,000<br>
                    A unique sound with heavy beats and dark lyrics.<br>
                    <a href="https://open.spotify.com/artist/4VQjfdCN5W8jvwy4AvEnin" target="_blank">Listen on Spotify</a>
                </span>
            </li>
            <li class="artist-item">
                <strong>Artist Name:</strong> Tokyo's Revenge <br>
                <span class="description">
                    Most Listened Track: "GOODMORNINGTOKYO!"<br>
                    Latest Album: *From the Shadows*<br>
                    Monthly Listeners: 500,000<br>
                    Bringing aggressive energy and experimental rap.<br>
                    <a href="https://open.spotify.com/artist/spotify-artist-link" target="_blank">Listen on Spotify</a>
                </span>
            </li>
            <li class="artist-item">
                <strong>Artist Name:</strong> Powfu <br>
                <span class="description">
                    Most Listened Track: "Death Bed"<br>
                    Latest Album: *Poems of the Past*<br>
                    Monthly Listeners: 3,000,000<br>
                    Known for blending lo-fi beats with heartfelt lyrics.<br>
                    <a href="https://open.spotify.com/artist/spotify-artist-link" target="_blank">Listen on Spotify</a>
                </span>
            </li>
            <li class="artist-item">
                <strong>Artist Name:</strong> Shinigami <br>
                <span class="description">
                    Most Listened Track: "Lovers and Friends"<br>
                    Latest Album: *Eternal Nightmare*<br>
                    Monthly Listeners: 100,000<br>
                    Combines rap and emotional lyrics with a dark, gothic style.<br>
                    <a href="https://open.spotify.com/artist/spotify-artist-link" target="_blank">Listen on Spotify</a>
                </span>
            </li>
            <!-- Add more artists as needed -->
        </ul>
    </div>
</div>

<style>
    .chatroom-container h2 {
        font-size: 2rem;
        color: #FFD700;
        text-align: center;
        margin-bottom: 20px;
        text-shadow: 0 4px 12px rgba(255, 215, 0, 0.8);
    }
    /* Search Bar Styling */
    .search-bar {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    .search-bar input[type="text"] {
        padding: 10px;
        width: 300px;
        border: 1px solid #FFD700;
        border-radius: 6px 0 0 6px;
        background-color: #333;
        color: #FFD700;
        outline: none;
    }
    .search-bar button {
        padding: 10px 15px;
        border: none;
        border-radius: 0 6px 6px 0;
        background-color: #FFD700;
        color: #000;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .search-bar button:hover {
        background-color: #FFC700;
    }

    .artist-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .artist-item {
        background: rgba(15, 15, 15, 0.9); /* Dark background */
        border: 1px solid #FFD700;
        color: #FFD700;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 10px;
        backdrop-filter: blur(4px); /* Adds slight blur to the background */
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }
    .artist-item::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 215, 0, 0.1); /* Yellow overlay */
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .artist-item:hover::before {
        opacity: 1;
    }
    .artist-item:hover {
        transform: scale(1.05); /* Grows slightly on hover */
        background: rgba(255, 215, 0, 0.1); /* Slight yellow tint on hover */
        box-shadow: 0px 10px 20px rgba(255, 215, 0, 0.3); /* Glow effect */
    }
    .artist-item:hover .description {
        opacity: 1;
        transform: translateY(0); /* Slides in the description */
    }
    .description {
        display: block;
        margin-top: 5px;
        color: #AAA; /* Slightly lighter color for description */
        font-size: 0.9rem;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .description a {
        color: #FFD700;
        text-decoration: none;
        font-weight: bold;
    }
    .description a:hover {
        text-decoration: underline;
    }
</style>

<script>
    function searchGoogle() {
        const query = document.getElementById('searchQuery').value;
        if (query) {
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}+underground+artists`;
            window.open(googleSearchUrl, '_blank'); // Opens Google search in a new tab
        } else {
            alert("Please enter a search term."); // Alert if search is empty
        }
    }
</script>
