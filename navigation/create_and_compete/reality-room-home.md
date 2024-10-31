---
layout: base
title: Create and Compete - Reality Room
search_exclude: true
permalink: /create_and_compete/realityroom-home
author: Yash, Nikhil, Rohan, Neil
---


<div class="form-container">
    <h2>Add New Post</h2>
    <form id="postForm">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>
        <label for="content">Content:</label>
        <textarea id="content" name="content" required></textarea>
        <button type="submit">Add Post</button>
    </form>
</div>


<div id="posts"></div>

<style>
    .card {
        width: 300px;
        padding: 20px;
        background-color: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        text-align: center;
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

    .delete-button {
        background-color: #ff4d4d;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9em;
        margin-top: 15px;
        transition: background-color 0.3s ease;
    }

    .delete-button:hover {
        background-color: #ff1a1a;
    }
</style>

<script type="module">
    import { pythonURI, fetchOptions } from '../assets/js/api/config.js';
    const container = document.getElementById("posts");

    // function deletePost(formID) {
    //     event.preventDefault();

    //     // Create API payload
    //     const deleteData = {
    //         id: formID,
    //     };

    //     try {
    //         const response = await fetch(`${pythonURI}/api/post`, {
    //             ...fetchOptions,
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(postData)
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to delete post: ' + response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('Error deleting post:', error);
    //         alert('Error deleting post: ' + error.message);
    //     }
    // }

    async function fetchPosts() {
        try {
            const response = await fetch(`${pythonURI}/api/post`, fetchOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const posts = await response.json();
            container.innerHTML = "";

            posts.forEach(post => {
                console.log("Id:", post.id);
                console.log("Title:", post.title);
                console.log("User:", post.user_name);
                console.log("Content:", post.content);
                console.log("Group:", post.group_name);

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

                card.appendChild(title);
                card.appendChild(description);
                card.appendChild(deleteButton);

                container.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }

    document.getElementById('postForm').addEventListener('submit', async function(event) {
        // Prevent default from submission
        event.preventDefault();

        // Extract data from form
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const group_id = 4;

        // Create API payload
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

            // Successful post
            const result = await response.json();
            fetchPosts();
            document.getElementById('postForm').reset();
        } catch (error) {
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
    });

    fetchPosts();
</script>