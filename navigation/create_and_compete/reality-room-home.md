---
layout: base
title: Create and Compete - Reality Room
search_exclude: true
permalink: /create_and_compete/realityroom-home
author: Yash, Nikhil, Rohan, Neil
---

TEMPORARY LINK TO CHATROOM PAGE: [link]({{site.baseurl}}/create_and_compete/realityroom)

<div class="sidebar">
    <a href="/Users/neilchandra/nighthawk/flocker_frontend/navigation/create_and_compete/reality-room-home.md" class="sidebar-btn">🏠 Home</a>
    <a href="/about" class="sidebar-btn">❓ About</a>
    <a href="/terms" class="sidebar-btn">📄 Terms</a>
</div>

<div class="user-list">
    <h3>Users</h3>
    <table>
        <tr>
            <td><img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Image" class="user-img"></td>
            <td>
                <span class="user-name">Bumerila (You)</span><br>
                <p>My dad is Bezos the founder of Amazon.</p>
            </td>
        </tr>
        <tr>
            <td><img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Image" class="user-img"></td>
            <td>
                <span class="user-name">Bumerila</span><br>
                <p>My dad is Bezos the founder of Amazon.</p>
            </td>
        </tr>
        <tr>
            <td><img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Image" class="user-img"></td>
            <td>
                <span class="user-name">Bumerila</span><br>
                <p>My dad is Bezos the founder of Amazon.</p>
            </td>
        </tr>
        <tr>
            <td><img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Image" class="user-img"></td>
            <td>
                <span class="user-name">Bumerila</span><br>
                <p>My dad is Bezos the founder of Amazon.</p>
            </td>
        </tr>
    </table>
</div>

<div class="form-container">
    <form id="postForm">
        <div class="form-inputs">
            <input type="text" id="title" name="title" placeholder="Enter Title Here" required>
            <input type="file" id="fileInput" name="fileInput" style="display: none;">
            <button type="button" onclick="document.getElementById('fileInput').click()" class="file-button">➕</button>
        </div>
        <textarea id="content" name="content" placeholder="Post Here" required></textarea>
        <button type="submit">Post</button>
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
        background-color: #222;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        color: white;
    }

    .sidebar-btn {
        background-color: #333;
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
    }

    .user-list h3 {
        margin-top: 0;
        font-weight: bold;
    }

    .user-list table {
        width: 100%;
        border-collapse: collapse;
    }

    .user-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .user-name {
        font-weight: bold;
    }

    /* Form Styling */
    .form-container {
        margin-left: 170px;
        margin-right: 270px;
        padding: 20px;
        background-color: #f4f4f4;
        border-radius: 12px;
        width: calc(100% - 440px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
    }

    .form-inputs {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    #title {
        flex: 1;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ddd;
        font-size: 16px;
    }

    .file-button {
        padding: 10px;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 18px;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #content {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ddd;
        font-size: 16px;
        margin-top: 10px;
        resize: none;
        height: 100px;
    }

    button[type="submit"] {
        align-self: flex-start;
        padding: 10px 20px;
        background-color: #1da1f2;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 10px;
        transition: background-color 0.2s ease;
    }

    button[type="submit"]:hover {
        background-color: #1a91da;
    }

    /* Posts Container */
    #posts {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 20px;
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
        text-align: left;
    }

    .card-title {
        font-size: 1.2em;
        font-weight: bold;
        color: #333;
    }

    .card-description {
        color: #555;
        font-size: 1em;
        margin-top: 10px;
    }

    .delete-button, .comment-button {
        background-color: #ff4d4d;
        color: white;
        border: none;
        padding: 8px 12px;
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
                throw new Error('Failed to fetch posts: ' + response.statusText);
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
            console.error('Error fetching posts:', error);
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
