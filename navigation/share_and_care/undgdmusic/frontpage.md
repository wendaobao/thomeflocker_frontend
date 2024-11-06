---
layout: page
title: Underground Music
description: Share music with others!
permalink: /undgdmusic/
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Underground Rapper Chatroom</title>
    <style>
        /* General Styling */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background-color: #181818; color: #e0e0e0; display: flex; flex-direction: column; align-items: center; min-height: 100vh; overflow-x: hidden; }
        header { padding: 20px; width: 100%; background-color: #1f1f1f; text-align: center; border-bottom: 3px solid #f2b600; }
        header h1 { font-size: 2.5rem; color: #f2b600; margin-bottom: 5px; }
        header p { color: #888; font-size: 1rem; }
        #navbar { width: 100%; background-color: #1f1f1f; padding: 15px; display: flex; justify-content: space-around; border-bottom: 1px solid #333; }
        #navbar a { color: #f2b600; text-decoration: none; font-size: 1.1rem; cursor: pointer; }
        #navbar a:hover { color: #ffffff; }
        .content-section { display: none; max-width: 1000px; width: 90%; padding: 20px; background-color: #2b2b2b; border-radius: 8px; margin-top: 20px; }
        #chatroom, #artist-discovery, #now-playing { display: none; }
        #messages { background-color: #333; padding: 10px; border-radius: 8px; max-height: 400px; overflow-y: auto; margin-bottom: 10px; }
        footer { padding: 20px; background-color: #1f1f1f; text-align: center; color: #888; width: 100%; font-size: 0.9rem; }
        /* Chat Message Styling */
        #messages p {
            position: relative;
            margin: 10px 0;
            padding: 10px;
            border: 2px solid #f2b600;
            border-radius: 8px;
            background-color: #444;
            color: #e0e0e0;
            font-size: 0.95rem;
        }
        #messages p .timestamp {
            position: absolute;
            right: -70px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 0.8rem;
            color: #aaa;
        }
        /* Artist Name Styling with Hover Effect */
        #artist-list li {
            color: #f2b600; /* Base color for readability */
            font-size: 1.1rem;
            font-weight: 600;
            text-shadow: 0px 0px 5px rgba(242, 182, 0, 0.6);
            margin: 10px 0;
            cursor: pointer;
            transition: transform 0.2s, text-shadow 0.2s, color 0.2s;
            opacity: 0.9;
        }
        #artist-list li:hover {
            color: #f2b600;
            text-shadow: 1px 1px 2px rgba(242, 182, 0, 1); /* Clearer, sharper look on hover */
            transform: scale(1.03);
            opacity: 1;
        }
        /* "Now Playing" and Skip Button Styling */
        #now-playing p, #search-artist {
            color: #f2b600;
            font-size: 1.1rem;
            margin-bottom: 10px;
        }
        #skip-button {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            background-color: #f2b600;
            color: #1b1b1b;
            font-weight: bold;
            cursor: pointer;
            margin-top: 10px;
        }
    </style>
</head>
<body>
<header>
    <h1>Underground Rapper Chatroom</h1>
    <p>Connect, share, and discover new artists with the community.</p>
</header>

<nav id="navbar">
    <a onclick="showSection('chatroom')">Chatroom</a>
    <a onclick="showSection('artist-discovery')">Discover Artists</a>
    <a onclick="showSection('now-playing')">Now Playing</a>
</nav>

<div id="chatroom" class="content-section">
    <h2>Live Chat</h2>
    <div id="messages"></div>
    <form id="chat-form">
        <input type="text" id="username" placeholder="Your Name" required>
        <input type="text" id="message" placeholder="Type a message..." maxlength="200" required>
        <button type="submit">Send</button>
    </form>
</div>

<div id="artist-discovery" class="content-section">
    <h2>Discover Artists</h2>
    <form id="artist-form">
        <input type="text" id="search-artist" placeholder="Search for niche artists..." oninput="filterArtists()">
    </form>
    <ul id="artist-list">
        <li data-name="JPEGMAFIA">JPEGMAFIA - Top Song: "Baby I'm Bleeding" | 950k listeners</li>
        <li data-name="Saba">Saba - Top Song: "Busy / Sirens" | 750k listeners</li>
        <li data-name="MAVI">MAVI - Top Song: "Sense" | 300k listeners</li>
        <li data-name="Yves Tumor">Yves Tumor - Top Song: "Gospel for a New Century" | 500k listeners</li>
        <li data-name="Mick Jenkins">Mick Jenkins - Top Song: "Jazz" | 700k listeners</li>
    </ul>
</div>

<div id="now-playing" class="content-section">
    <h2>Now Playing</h2>
    <p id="now-playing-song">Currently playing: "Baby I'm Bleeding" by JPEGMAFIA</p>
    <audio id="audio-player" controls>
        <source id="audio-source" src="https://example.com/sample-audio-1.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <button id="skip-button" onclick="nextSong()">Skip</button>
</div>

<footer>
    <p>&copy; 2024 Underground Rapper Chatroom | Privacy Policy</p>
</footer>

<script>
    // Show the selected section and hide others
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => section.style.display = 'none');
        document.getElementById(sectionId).style.display = 'block';
    }
    
    // Show chatroom by default
    showSection('chatroom');

    // Load saved messages from localStorage on page load
    document.addEventListener("DOMContentLoaded", async function () {
        const savedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
        const messagesDiv = document.getElementById("messages");
        savedMessages.forEach(msg => messagesDiv.innerHTML += msg);

        // Load messages from backend for cross-device access
        try {
            const response = await fetch("https://your-backend-url/api/chat/loadMessages");
            if (response.ok) {
                const messages = await response.json();
                messages.forEach(msg => addMessageToChat(msg.username, msg.text, msg.timestamp));
            } else {
                console.error("Failed to load messages from backend");
            }
        } catch (error) {
            console.error("Error loading messages from backend:", error);
        }
    });

    // Filter artist list based on search input
    function filterArtists() {
        const searchQuery = document.getElementById('search-artist').value.toLowerCase();
        const artistList = document.getElementById('artist-list').querySelectorAll('li');
        
        artistList.forEach(artist => {
            const artistName = artist.getAttribute('data-name').toLowerCase();
            if (artistName.includes(searchQuery)) {
                artist.style.display = '';
            } else {
                artist.style.display = 'none';
            }
        });
    }

    // Handle form submission for chat messages
    document.getElementById('chat-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const message = document.getElementById('message').value;
        const timestamp = new Date().toLocaleTimeString();

        // Add message to chat UI and save to localStorage
        addMessageToChat(username, message, timestamp);
        saveMessageToLocalStorage(username, message, timestamp);

        // Send message to backend for cross-device persistence
        try {
            const response = await fetch("https://your-backend-url/api/chat/saveMessage", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, message, timestamp })
            });
            if (!response.ok) {
                throw new Error("Failed to save message to backend");
            }
        } catch (error) {
            console.error("Error saving message to backend:", error);
        }

        // Clear message input field
        document.getElementById('message').value = '';
    });

    // Add message to chat UI
    function addMessageToChat(username, message, timestamp) {
        const messagesDiv = document.getElementById("messages");
        const messageHtml = `<p><span class="username">${username}</span>: ${message}<span class="timestamp">[${timestamp}]</span></p>`;
        messagesDiv.innerHTML += messageHtml;
    }

    // Save message to localStorage
    function saveMessageToLocalStorage(username, message, timestamp) {
        const savedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
        const messageHtml = `<p><span class="username">${username}</span>: ${message}<span class="timestamp">[${timestamp}]</span></p>`;
        savedMessages.push(messageHtml);
        localStorage.setItem("chatMessages", JSON.stringify(savedMessages));
    }

    // Array of underground rap songs with URLs (replace with real URLs)
    const songs = [
        { name: "JPEGMAFIA", song: "Baby I'm Bleeding", audio: "https://example.com/sample-audio-1.mp3" },
        { name: "Saba", song: "Busy / Sirens", audio: "https://example.com/sample-audio-2.mp3" },
        { name: "MAVI", song: "Sense", audio: "https://example.com/sample-audio-3.mp3" },
        { name: "Yves Tumor", song: "Gospel for a New Century", audio: "https://example.com/sample-audio-4.mp3" },
        { name: "Mick Jenkins", song: "Jazz", audio: "https://example.com/sample-audio-5.mp3" }
    ];
    let currentIndex = 0;

    function nextSong() {
        currentIndex = (currentIndex + 1) % songs.length;
        const song = songs[currentIndex];
        document.getElementById('now-playing-song').innerText = `Currently playing: "${song.song}" by ${song.name}`;
        document.getElementById('audio-source').src = song.audio;
        const audioPlayer = document.getElementById('audio-player');
        audioPlayer.load();
        audioPlayer.play();
    }
</script>
</body>
</html>
