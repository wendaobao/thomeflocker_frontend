---
layout: post 
title: Create and Compete - Elevator Pitch UI
search_exclude: true
permalink: /create_and_compete/elevatorpitchgame
author: Manas, Lalita, Shriya, Ethan
---

<p>Where creativity meets competition and collaboration.</p>

<!-- Prompt Generation Section -->
<button id="generate-prompt">Generate Random Prompt</button>
<div id="prompt-display"></div>

<!-- Pitch Submission Section -->
<section id="pitch-section">
    <h2>Your Pitch</h2>
    <textarea id="pitch-input" placeholder="Write your pitch here..."></textarea>
    <button id="submit-pitch">Submit Pitch</button>
    <div id="pitch-display"></div>
</section>

<!-- Feedback Section -->
<section id="feedback-section">
    <h2>Feedback & Challenges</h2>
    <textarea id="feedback-input" placeholder="Offer feedback or ask a question..."></textarea>
    <button id="submit-feedback">Submit Feedback</button>
    <div id="feedback-display"></div>
</section>

<!-- Leaderboard Section -->
<section id="leaderboard-section">
    <h2>Top Contributors</h2>
    <ul id="leaderboard"></ul>
</section>

<!-- Feedback Modal -->
<div id="feedback-modal" class="modal">
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2>Feedback Submitted!</h2>
        <p>Your feedback has been submitted successfully.</p>
    </div>
</div>

<!-- Styles for Modal -->
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
        background-color: rgba(0,0,0,0.4);
    }
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 50%;
        text-align: center;
    }
    .close-button {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }
</style>

<!-- Link to Custom CSS and Script -->
<link rel="stylesheet" href="{{site.baseurl}}/navigation/create_and_compete/style.css">
<script src="{{site.baseurl}}/navigation/create_and_compete/script.js"></script>
