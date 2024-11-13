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

    /* Styles for Select Group and Channel, and Add New Post boxes */
    .form-container {
        display: flex;
        flex-direction: column;
        max-width: 800px;
        width: 100%;
        background-color: #008504; /* Green background */
        border: 2px solid #FFD700; /* Yellow border */
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        color: #ecf0f1;
    }

    .form-container label {
        margin-bottom: 5px;
    }

    .form-container input, .form-container textarea, .form-container select {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
        border: 2px solid #FFD700; /* Yellow border for inputs */
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

    .form-container button:hover {
        background-color: #C5B358;
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

<!-- Group and Channel Selection Box -->
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

<!-- Add New Post Box -->
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
