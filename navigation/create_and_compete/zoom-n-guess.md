---
layout: post
title: Create and Compete - Zoom n guess
search_exclude: true
permalink: /create_and_compete/zoominguess
menu: nav/create_and_compete.html
author: Arhaan, Mihir, Keerthan, and Akshaj
---


<a href="{{site.baseurl}}/create_and_compete/zoominguess/ui">Zoominguess UI</a>


<details>


<br>
 <summary>Room Details</summary>
  <a href="{{site.baseurl}}/moderation/rules_zoominguess/">Moderation Rules</a>








<p>The main purpose of our Zoom-In Guess room is to have people think critically and collaborate with other members of the channel to identify the image as fast as possible.</p>


<p>Room will consist of:</p>
<ul>
 <li>**Daily zoomed-in image** that can be optionally pinned to the top of the channel</li>
 <li>**Guessing opportunity throughout the day** with the image slowly zooming out if too hard</li>
 <li>**Chat box** where channel members can discuss and collaborate on their guesses</li>
 <li>**AI assistance** that posts hints if needed and reveals the answer at the end of the day</li>
 <li>**Profanity filter** to keep the conversation friendly and inclusive</li>
</ul>


<details>
 <summary>Additional Interactive Features</summary>
  <ul>
   <li>**Mini Game - "Guess the Zoom":** Players try to guess the object or person from a zoomed-in image, with clues if needed.</li>
   <li>**Posts and Comments:** Members can post their own zoomed-in pictures for others to guess and discuss in the comments.</li>
   <li>**Rate and Relate Theme:** After guessing, players rate the difficulty of the image, and connect with others on their similar or differing guesses.</li>
 </ul>


 <p>This interactive setup makes the game fun, challenging, and a great way to start conversations about perception and recognition!</p>
</details>



<link rel="stylesheet" href="{{site.baseurl}}/navigation/create_and_compete/style.css">
<script src="{{site.baseurl}}/navigation/create_and_compete/scripted.js"></script>

<div class="zoomnguess-container">
    <h1>Zoom N Guess</h1>
    <p>Look at the closely zoomed-in image below and guess who it is. Explain why you think it's that person!</p>

<!-- Random Image Section -->
<div class="zoom-image-section">
    <button id="generate-image" class="submit-button">Generate Zoomed Image</button>
    <div id="image-display" class="zoom-image-box">
        <!-- Random zoomed-in image will be displayed here -->
        <img id="einstein.jpg" src="{{site.baseurl}}/images/zoomin-guess/einstein.jpg" alt="Zoomed Image" class="zoom-image">
    </div>
</div>

<!-- Guess Input Section -->
<div class="guess-box">
    <label for="guess-input">Your Guess:</label>
    <input type="text" id="guess-input" placeholder="Enter the name of the person">
</div>

<!-- Reasoning Input Section -->
<div class="explanation-box">
    <label for="reasoning-input">Explain Your Reasoning:</label>
    <textarea id="reasoning-input" placeholder="Why do you think it's that person?"></textarea>
</div>

<!-- Submit Button -->
<button id="submit-guess" class="submit-button">Submit Guess</button>

<!-- Guess Feedback Section -->
<div id="feedback-section">
    <h2>Your Feedback</h2>
    <div id="feedback-display" class="info-box">Your guess and explanation will appear here after submission.</div>
</div>

<!-- Leaderboard Section -->
<section id="leaderboard-section">
    <h2>Top Guessers</h2>
    <ul id="leaderboard" class="leaderboard-box">
        <!-- Leaderboard will show the top contributors -->
    </ul>
</section>

<!-- Feedback Modal -->
<div id="feedback-modal" class="modal">
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2>Feedback Submitted!</h2>
        <p>😎</p>
    </div>
</div>
</div>

<style>
    .zoomnguess-container {
        font-family: Arial, sans-serif;
        margin: 0 auto;
        padding: 20px;
        max-width: 800px;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 255, 0.2); /* Blue shadow for main container */
        border-radius: 10px;
    }

    h1 {
        font-size: 2em;
        color: #333;
        text-shadow: 1px 1px 5px rgba(0, 0, 255, 0.4); /* Blue shadow for heading */
    }

    .guess-box label {
    font-size: 1.5em; /* Make the font size larger */
    color: #333333; /* Dark grey color */
    text-shadow: 1px 1px 5px rgba(0, 0, 255, 0.4); /* Blue shadow for label */
    }

    .explanation-box label {
    font-size: 1.5em; /* Make the font size larger */
    color: #333333; /* Dark grey color */
    text-shadow: 1px 1px 5px rgba(0, 0, 255, 0.4); /* Blue shadow for label */
    }

    .submit-button {
    font-size: 1.5em; /* Make the font size larger */
    color: #333333; /* Dark grey color */
    text-shadow: 1px 1px 5px rgba(0, 0, 255, 0.4); /* Blue shadow for label */
    }
    .zoom-image-section,
    .explanation-box,
    #feedback-section,
    #leaderboard-section {
        margin-top: 20px;
        padding: 15px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 255, 0.2); /* Blue shadow for sections */
    }

    .zoom-image-box {
        display: inline-block;
        box-shadow: 0 4px 8px rgba(0, 0, 255, 0.3); /* Blue shadow for image box */
    }

    .zoom-image {
        max-width: 100%;
        border-radius: 8px;
    }
    .submit-button label {
    font-size: 1.5em; /* Make the font size larger */
    color: #333333; /* Dark grey color */
    text-shadow: 1px 1px 5px rgba(0, 0, 255, 0.4); /* Blue shadow for label */
    }
    .submit-button {
    font-size: 1.5em; /* Increase font size */
    color: #333333; /* Dark grey text color */
    text-shadow: 1px 1px 5px rgba(0, 0, 255, 0.4); /* Blue shadow for text */
    background-color: #007bff; /* Button background color (optional) */
    padding: 10px 20px; /* Add padding for better appearance */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 255, 0.3); /* Blue shadow around button */
    transition: box-shadow 0.3s ease;
    }

    .submit-button:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 255, 0.4); /* Stronger shadow on hover */
    }

    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        padding-top: 60px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 255, 0.3); /* Blue shadow for modal */
        width: 80%;
        max-width: 500px;
        text-align: center;
        text-shadow: 1px 1px 5px rgba(0, 0, 255, 0.4); /* Blue shadow effect */
    }

    .close-button {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }
    #feedback-modal .modal-content {
    font-size: 1.5em; /* Make the font size larger */
    color: #333333; /* Dark grey text color for all modal content */
    text-shadow: 1px 1px 5px rgba(0, 0, 255, 0.4); /* Blue text shadow */
}

#feedback-modal h2 {
    font-size: 2em; /* Larger font size for the heading */
    color: #333333; /* Dark grey text color */
    text-shadow: 1px 1px 5px rgba(0, 0, 255, 0.4); /* Blue text shadow for heading */
}

#feedback-modal p {
    font-size: 1.2em; /* Slightly larger font size for paragraph text */
    color: #333333; /* Dark grey text color */
    text-shadow: 1px 1px 5px rgba(0, 0, 255, 0.4); /* Blue text shadow for paragraph */
}

#feedback-modal .close-button {
    font-size: 1.5em; /* Font size for the close button */
    color: #333333; /* Dark grey text color */
    text-shadow: 1px 1px 5px rgba(0, 0, 255, 0.4); /* Blue text shadow for close button */
    cursor: pointer; /* Pointer cursor for better interactivity */
}

.info-box label {
    font-size: 1.5em; /* Make the font size larger */
    color: #333333; /* Dark grey color */
    text-shadow: 1px 1px 5px rgba(0, 0, 255, 0.4); /* Blue shadow for label */
    }

#feedback-section .info-box {
    font-size: 1.5em; /* Make the font size larger */
    color: #333333; /* Dark grey text color for all modal content */
    text-shadow: 1px 1px 5px rgba(0, 0, 255, 0.4); /* Blue text shadow */
}

</style>