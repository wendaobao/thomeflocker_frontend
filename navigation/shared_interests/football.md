---
layout: base
title: Football
permalink: /shared_interests/football/
menu: nav/shared_interests.html
---

<!-- FOR THE NAV MENU AS IT IS NOT WORKING ON YOUR PAGE -->
<table>
    <tr>
        <td id="sharedinterests">
            <a href="{{site.baseurl}}/shared_interests/home">
                <img src="{{site.baseurl}}/images/school_logo.png" alt="logo" width="150" height="150">
            </a>
        </td>
        <td id="Limitless Connections"><a href="{{site.baseurl}}/shared_interests/limitconnect">Limitless Connections</a></td>
        <td id="DNHS Football"><a href="{{site.baseurl}}/shared_interests/football">DNHS Football</a></td>
        <td id="School Subjects"><a href="{{site.baseurl}}/shared_interests/jupyter/chatroom">School Subjects</a></td>
        <td id="Music"><a href="{{site.baseurl}}/music/">Music</a></td>
        <td id="Satire"><a href="{{site.baseurl}}/shared_interests/satire">Satire</a></td>
        <td id="AGK"><a href="{{site.baseurl}}/shared_interests/agk/agk.html">AGK</a></td>
    </tr>
</table>
<!-- END OF NAV MENU -->

<style>
    .page-header {
        text-align: center;
        padding: 20px;
        background-color: #001F3F;
        color: #FFD700;
        border-radius: 8px;
        border: 2px solid #C5B358;
    }

    .main-container {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        box-sizing: border-box;
    }

    .posts-wrapper {
        width: 45%;
    }

    .post {
        border: 2px solid #C5B358;
        border-radius: 8px;
        background-color: #008504;
        padding: 15px;
        margin-bottom: 15px;
        color: white;
    }

    .post-header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .post-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #FFD700;
        display: inline-block;
        margin-right: 10px;
    }

    .post-username {
        font-weight: bold;
        color: #FFD700;
    }

    .reaction-icons {
        margin-top: 10px;
        cursor: pointer;
    }

    .chatroom-container {
        width: 45%;
        border: 2px solid #C5B358;
        border-radius: 8px;
        background-color: #001F3F;
        padding: 20px;
        display: flex;
        flex-direction: column;
        max-height: 725px;
        overflow: hidden;
    }

    .chatroom-header {
        text-align: center;
        color: #FFD700;
        margin-bottom: 10px;
    }

    .chat-area {
        flex-grow: 1;
        min-height: 450px;
        max-height: 450px;
        overflow-y: auto;
        background-color: #008504;
        border: 2px solid #C5B358;
        border-radius: 8px;
        padding: 10px;
        margin-bottom: 10px;
        color: white;
    }

    .message-form {
        display: flex;
        align-items: center;
    }

    #messageInput {
        flex: 1;
        padding: 10px;
        border: 2px solid #C5B358;
        border-radius: 5px;
        margin-right: 10px;
    }

    button {
        background-color: #FFD700;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #C5B358;
    }

    /* Styles for Post Submission Form */
    .post-form-container {
        border: 2px solid #C5B358;
        border-radius: 8px;
        background-color: #008504;
        padding: 15px;
        margin-top: 20px;
    }

    #roleSelect {
        width: 100%;
        padding: 10px;
        border: 2px solid #C5B358;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    #postInput {
        width: 100%;
        height: 100px;
        padding: 10px;
        border: 2px solid #C5B358;
        border-radius: 5px;
        margin-bottom: 10px;
        resize: none;
    }
</style>

<!-- Page Header -->
<div class="page-header">
    <h1>Welcome to the Football Flocker Room</h1>
    <p>View announcements, posts, or engage with others in the chat!</p>
</div>

<div class="main-container">
    <!-- Posts Section on the Left -->
    <div class="posts-wrapper" id="postsWrapper">
        <!-- Posts will be dynamically loaded here -->
    </div>

    <!-- Chatroom Section on the Right -->
    <div class="chatroom-container">
        <header class="chatroom-header">
            <h2>Flocker Chatroom</h2>
        </header>
        <div class="chat-area" id="chatArea">
            <!-- Messages will appear here -->
        </div>
        <form class="message-form" id="messageForm">
            <input type="text" id="messageInput" placeholder="Enter your message..." required>
            <button type="submit">Send</button>
        </form>
    </div>
</div>

<!-- Post Submission Form -->
<div class="post-form-container">
    <h3>Add a New Post</h3>
    <form id="postForm">
        <select id="roleSelect" required>
            <option value="" disabled selected>Select your role</option>
            <option value="Captain">Captain</option>
            <option value="Player">Player</option>
            <option value="Coach">Coach</option>
        </select>
        <textarea id="postInput" placeholder="What's on your mind?" required></textarea>
        <button type="submit">Post</button>
    </form>
</div>

<script>
    function getReactions() {
        const reactions = localStorage.getItem('reactions');
        return reactions ? JSON.parse(reactions) : {};
    }

    function saveReactions(reactions) {
        localStorage.setItem('reactions', JSON.stringify(reactions));
    }

    function getPosts() {
        const posts = localStorage.getItem('posts');
        return posts ? JSON.parse(posts) : [];
    }

    function savePosts(posts) {
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    document.addEventListener('DOMContentLoaded', () => {
        const reactions = getReactions();
        const posts = getPosts();

        // Load posts from localStorage
        posts.forEach(post => {
            createPostElement(post.username, post.content, post.id);
        });

        document.querySelectorAll('.post').forEach(postElement => {
            const postId = postElement.getAttribute('data-post-id');
            const postReactions = reactions[postId] || { thumbsUp: 0, heart: 0, fire: 0 };

            postElement.querySelector('.thumbsUp-count').textContent = postReactions.thumbsUp;
            postElement.querySelector('.heart-count').textContent = postReactions.heart;
            postElement.querySelector('.fire-count').textContent = postReactions.fire;
        });
    });

    function addReaction(postId, reactionType) {
        const reactions = getReactions();

        if (!reactions[postId]) {
            reactions[postId] = { thumbsUp: 0, heart: 0, fire: 0 };
        }

        reactions[postId][reactionType]++;
        saveReactions(reactions);

        const postElement = document.querySelector(`[data-post-id="${postId}"]`);
        const countElement = postElement.querySelector(`.${reactionType}-count`);
        countElement.textContent = reactions[postId][reactionType];
    }

    function createPostElement(username, content, postId) {
        // Create a new post element
        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.setAttribute('data-post-id', postId);
        newPost.innerHTML = `
            <div class="post-header">
                <div class="post-icon"></div>
                <span class="post-username">${username}</span>
            </div>
            <p>${content}</p>
            <div class="reaction-icons">
                <span class="emoji" onclick="addReaction('${postId}', 'thumbsUp')">👍 <span class="thumbsUp-count">0</span></span>
                <span class="emoji" onclick="addReaction('${postId}', 'heart')">❤️ <span class="heart-count">0</span></span>
                <span class="emoji" onclick="addReaction('${postId}', 'fire')">🔥 <span class="fire-count">0</span></span>
            </div>
        `;

        // Append the new post to the posts wrapper
        document.getElementById('postsWrapper').prepend(newPost); // Add to the top
    }

    // Handle post submission
    document.getElementById('postForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page refresh

        const roleSelect = document.getElementById('roleSelect');
        const postInput = document.getElementById('postInput');
        const selectedRole = roleSelect.value; // Get selected role
        const newPostContent = postInput.value;

        // Create a unique ID based on timestamp
        const newPostId = Date.now();

        // Save the new post to localStorage
        const posts = getPosts();
        posts.push({ id: newPostId, username: selectedRole, content: newPostContent });
        savePosts(posts);

        // Create and display the new post
        createPostElement(selectedRole, newPostContent, newPostId);

        // Clear the input
        // Clear the input fields
        postInput.value = '';
        roleSelect.selectedIndex = 0; // Reset to default
    });

    // Handle message submission
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const messageInput = document.getElementById('messageInput');
        const messageContent = messageInput.value;

        // Create a new message element
        const newMessage = document.createElement('div');
        newMessage.textContent = messageContent;
        document.getElementById('chatArea').appendChild(newMessage);

        // Clear the input field
        messageInput.value = '';
    });
</script>