---
layout: page
title: DNHS Cafe Study Room
description: Help out your peers with school work to earn d'neros!
permalink: /dnhscafestudyroom/
---
<style>
body { 
    background: linear-gradient(135deg, #a17a64, #452f22); /* Dark brown to light brown */
    background-attachment: fixed; /* Keeps background fixed */
    color: #333333; /* Darker text color for better readability */
    font-family: Arial, sans-serif; 
    min-height: 100vh; /* Ensures it covers the viewport height */ 
    margin: 0; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
}

.collapsible {
  background-color: #825B41;
  color: #ffff;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}
.active, .collapsible:hover {
  background-color: #825B41;
}
.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #AB8265;
}
</style>

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
        background-color: #A68877;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        color: #ECF0F1;
    }
    .form-container label {
        margin-bottom: 5px;
    }
    .form-container input, .form-container textarea, .form-container select {
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
        background-color: #34495E;
        color: #ECF0F1;
        cursor: pointer;
    }
</style>
<div class="container">
    <div class="form-container">
        <h2>☆*: .｡. Add New Post :coffee:.｡.:*☆</h2>
        <form id="postForm">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
            <label for="content">Message:</label>
            <textarea id="content" name="content" required></textarea>
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
<script type="module">
    // Import server URI and standard fetch options
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';
    // Fetch groups for dropdown selection
    async function fetchGroups() {
        try {
            const response = await fetch(`${pythonURI}/api/group`, fetchOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const groups = await response.json();
            const groupSelect = document.getElementById('group_id');
            groups.forEach(group => {
                const option = document.createElement('option');
                option.value = group.id;
                option.textContent = group.name;
                groupSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }
    // Handle form submission
    document.getElementById('postForm').addEventListener('submit', async function(event) {
        // Prevent default from submission
        event.preventDefault();
        // Extract data from form
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const group_id = document.getElementById('group_id').value;
        // Create API payload
        const postData = {
            title: title,
            content: content,
            group_id: group_id
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
            // Succesfull post
            const result = await response.json();
            alert('Post added successfully!');
            document.getElementById('postForm').reset();
        } catch (error) {
            // Present alert on error from backend
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
    });
    // Fetch groups when the page loads
    fetchGroups();
</script>
