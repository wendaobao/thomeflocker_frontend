---
layout: post 
title: Add a Post
permalink: /post
menu: nav/home.html
search_exclude: true
---
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
    .form-container input, .form-container textarea {
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
            <label for="group_id">Group ID:</label>
            <input type="number" id="group_id" name="group_id" required>
            <button type="submit">Add Post</button>
        </form>
    </div>
</div>

<script type="module">
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    document.getElementById('postForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const group_id = document.getElementById('group_id').value;

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

            const result = await response.json();
            alert('Post added successfully!');
            // Optionally, you can redirect to another page or clear the form
            document.getElementById('postForm').reset();
        } catch (error) {
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
    });
</script>
