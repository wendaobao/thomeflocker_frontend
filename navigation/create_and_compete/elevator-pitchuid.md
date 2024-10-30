---
layout: post 
title: Create and Compete - Elevator Pitch UI
search_exclude: true
permalink: /create_and_compete/elevatorpitchgame
author: Manas, Lalita, Shriya, Ethan
---

<h1>Create and Compete – Elevator Pitch</h1>
<p>Where creativity meets competition and collaboration.</p>

<p>Click the button below to generate a random prompt for your pitch. Share your ideas and provide feedback to others!</p>
<button id="generate-prompt" aria-label="Generate a random pitch prompt">Generate Random Prompt</button>
<div id="prompt-display" aria-live="polite"></div>

<section id="pitch-section">
    <h2>Your Pitch</h2>
    <textarea id="pitch-input" placeholder="Write your pitch here..." aria-label="Pitch input area"></textarea>
    <button id="submit-pitch" aria-label="Submit your pitch">Submit Pitch</button>
    <div id="pitch-display" aria-live="polite"></div>
</section>

<section id="feedback-section">
    <h2>Feedback & Challenges</h2>
    <textarea id="feedback-input" placeholder="Offer feedback or ask a question..." aria-label="Feedback input area"></textarea>
    <button id="submit-feedback" aria-label="Submit your feedback">Submit Feedback</button>
    <div id="feedback-display" aria-live="polite"></div>
</section>

<section id="leaderboard-section">
    <h2>Top Contributors</h2>
    <ul id="leaderboard">
        <li>No contributors yet. Join the competition!</li>
    </ul>
</section>

<!-- Feedback Modal -->
<div id="feedback-modal" class="modal" role="dialog" aria-labelledby="modal-title" aria-hidden="true">
    <div class="modal-content">
        <span class="close-button" aria-label="Close modal">&times;</span>
        <h2 id="modal-title">Feedback Submitted!</h2>
        <p>Your feedback has been submitted successfully.</p>
    </div>
</div>

<!-- Styles for modal -->
<style>
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}

.close-button {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
</style>

<link rel="stylesheet" href="{{site.baseurl}}/navigation/create_and_compete/style.css">
<script src="{{site.baseurl}}/navigation/create_and_compete/script.js"></script>
