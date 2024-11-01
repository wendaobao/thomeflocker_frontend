---
layout: post
title: Feedback - Interactive Chat Room
search_exclude: true
permalink: /create_and_compete/feedback
menu: nav/create_and_compete.html
---

<link rel="stylesheet" href="{{site.baseurl}}/navigation/create_and_compete/feedback.css">

<div class="chat-room-container">
<p>Share your feedback, discuss guesses, and chat with others in real time!</p>

<!-- Chat Box -->
<div id="chat-box" class="chat-box">
    <!-- Chat messages will be displayed here -->
    <div class="message">User1: This is a sample message.</div>
    <div class="message">User2: This is another sample message.</div>
</div>

<!-- Chat Input -->
<div class="chat-input">
    <input type="text" id="chat-message" placeholder="Type your message here...">
    <button id="send-message" class="send-button">Send</button>
</div>
</div>

<script src="{{site.baseurl}}/navigation/create_and_compete/chat.js"></script>
