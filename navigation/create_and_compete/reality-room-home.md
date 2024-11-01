---
layout: base
title: Create and Compete - Reality Room
search_exclude: true
permalink: /create_and_compete/realityroom-home
author: Yash, Nikhil, Rohan, Neil
---

TEMPORARY LINK TO CHATROOM PAGE: [link]({{site.baseurl}}/create_and_compete/realityroom)

<div class="sidebar">
    <a href="/create_and_compete/realityroom-home" class="sidebar-btn">🏠 Home</a>
    <a href="/about" class="sidebar-btn">❓ About</a>
    <a href="/terms" class="sidebar-btn">📄 Terms</a>
</div>

<div class="user-list">
    <h3>Users</h3>
    <div class="user">
        <span>Bumerila (You)</span>
        <p>My dad is Bezos the founder of Amazon.</p>
    </div>
    <div class="user">
        <span>Bumerila</span>
        <p>My dad is Bezos the founder of Amazon.</p>
    </div>
    <div class="user">
        <span>Bumerila</span>
        <p>My dad is Bezos the founder of Amazon.</p>
    </div>
    <div class="user">
        <span>Bumerila</span>
        <p>My dad is Bezos the founder of Amazon.</p>
    </div>
    <div class="user">
        <span>Bumerila</span>
        <p>My dad is Bezos the founder of Amazon.</p>
    </div>
</div>

<div class="form-container">
    <h2>Add New Post</h2>
    <form id="postForm">
        <label for="title" class="label">Title:</label> <br>
        <input type="text" id="title" name="title" placeholder="Enter Title Here" required> <br>
        <label for="content" class="label">Content:</label>
        <textarea id="content" name="content" placeholder="Post Here" required></textarea>
        <button type="submit">Add Post</button>
    </form>
</div>

<div id="posts"></div>

<style>
    /* Sidebar */
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 150px;
        height: 100%;
        background-color: #333;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        color: white;
    }

    .sidebar-btn {
        background-color: gray;
        color: white;
        border: none;
        margin: 10px 0;
        padding: 10px;
        border-radius: 8px;
        font-size: 16px;
        width: 120px;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
    }

    /* User List on the Right */
    .user-list {
        position: fixed;
        top: 0;
        right: 0;
        width: 250px;
        height: 100%;
        background-color: #f4f4f4;
        padding: 20px;
        box-shadow: -2px 0 5px rgba(0,0,0,0.1);
        color: black;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .user-list h3 {
        margin-top: 0;
    }

    .user {
        margin-bottom: 20px;
    }

    .user span {
        font-weight: bold;
    }

    /* Form Styling */
    .form-container {
        margin-left: 170px;
        margin-right: 270px;
        padding: 20px;
        background-color: #f4f4f4;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        width: 500px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
    }

    #title, #content {
        width: 100%;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #ddd;
        margin-bottom: 10px;
    }

    button[type="submit"] {
        align-self: flex-end;
        background-color: #1da1f2;
        color: #ffffff;
        border: none;
        border-radius: 20px;
        padding: 8px 16px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    button[type="submit"]:hover {
        background-color: #1a91da;
    }

    h2, .label {
        color: #ff4d4d !important;
    }

    /* Posts Container */
    #posts {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 10px;
        margin-left: 170px;
        margin-right: 270px;
        padding-top: 20px;
    }

    /* Post Cards Styling */
    .card {
        width: calc(50% - 20px);
        padding: 20px;
        background-color: #ffffff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        text-align: center;
        margin: 10px;
        vertical-align: top;
    }

    .card-title {
        font-size: 1.5em;
        margin: 0;
        color: #333;
    }

    .card-description {
        color: #666;
        font-size: 1em;
        margin-top: 10px;
    }

    .delete-button, .comment-button {
        background-color: #ff4d4d;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9em;
        margin-top: 15px;
        transition: background-color 0.3s ease;
        margin-right: 5px;
    }

    .delete-button:hover, .comment-button:hover {
        background-color: #ff1a1a;
    }
</style>

<script type="module">
    import { pythonURI, fetchOptions } from '../assets/js/api/config.js';
    const container = document.getElementById("posts");

    function openChatRoom(button) {
        const postId = button.getAttribute("id");
        window.location.href = `{{site.baseurl}}/create_and_compete/realityroom?postId=${postId}`;
    }

    async function fetchPosts() {
        try {
            const response = await fetch(`${pythonURI}/api/post`, fetchOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const posts = await response.json();
            container.innerHTML = "";

            posts.forEach(post => {
                const card = document.createElement("div");
                card.classList.add("card");

                const title = document.createElement("h3");
                title.classList.add("card-title");
                title.textContent = post.title;

                const description = document.createElement("p");
                description.classList.add("card-description");
                description.textContent = post.content;

                const deleteButton = document.createElement("button");
                deleteButton.classList.add("delete-button");
                deleteButton.textContent = "Delete";

                const commentButton = document.createElement("button");
                commentButton.classList.add("comment-button");
                commentButton.textContent = "Comment";
                commentButton.setAttribute("id", post.id);

                commentButton.onclick = function () {
                    openChatRoom(commentButton);
                };

                card.appendChild(title);
                card.appendChild(description);
                card.appendChild(deleteButton);
                card.appendChild(commentButton);

                container.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }

    document.getElementById('postForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const group_id = 4;

        const postData = {
            title: title,
            content: content,
            group_id: group_id
        };

        try {
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

            fetchPosts();
            document.getElementById('postForm').reset();
        } catch (error) {
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
    });

    fetchPosts();
</script>
