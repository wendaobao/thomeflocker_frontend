---
layout: post 
title: Create and Compete - Elevator Pitch
search_exclude: true
permalink: /create_and_compete/elevatorpitch
menu: nav/create_and_compete.html
author: Manas, Lalita, Shriya, Ethan
---

<details>
  <summary>Room Details</summary>

<a href="{{site.baseurl}}/moderation/rules_elevatorpitch/">Moderation Rules</a>

<p>Imagine a platform where creativity meets competition—this is the essence of our project. Under the theme of Create and Compete, we’re designing a space where participants can pitch creative ideas, whether for inventions, stories, apps, or even business ventures. The twist? These ideas are sparked by random prompts, pushing users to think outside the box.</p>

<p>Once an idea is pitched, the real fun begins. Other participants engage with the pitch by challenging it with insightful questions, offering constructive feedback, and suggesting improvements. The focus here isn’t just on competing to create the best idea but also on fostering collaboration and creativity. Participants learn from one another, pushing the boundaries of their original concepts to create something even more innovative.</p>

<p>Whether you’re a writer, designer, entrepreneur, or problem-solver, this platform encourages you to compete by creating and evolving by collaborating.</p>

</details>

<p>Where creativity meets competition and collaboration.</p>

<!-- Icons Section -->
<div id="icons-section">
  <h3>Game Icons</h3>

  <!-- Pitch Icon -->
  <div class="icon">
    <h4>Pitch</h4>
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="black" stroke-width="2">
        <circle cx="25" cy="25" r="15" stroke-dasharray="5,5"></circle>
        <rect x="20" y="30" width="10" height="15" fill="gray"></rect>
        <path d="M 22 30 L 28 30 L 25 20 Z" fill="lightgray"></path>
        <circle cx="25" cy="15" r="3" fill="yellow"></circle>
        <path d="M 30 15 L 33 10 L 36 15 Z" fill="blue"></path>
      </g>
    </svg>
  </div>

  <!-- Challenge Icon -->
  <div class="icon">
    <h4>Challenge</h4>
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="black" stroke-width="2">
        <rect x="20" y="30" width="10" height="5" fill="gold"></rect>
        <path d="M 25 15 L 30 30 H 20 Z" fill="yellow"></path>
        <polygon points="25,30 27,35 25,32 23,35" fill="orange"></polygon>
      </g>
    </svg>
  </div>

  <!-- Idea Evolution Icon -->
  <div class="icon">
    <h4>Idea Evolution</h4>
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="green" stroke-width="2">
        <line x1="25" y1="25" x2="15" y2="15"></line>
        <circle cx="15" cy="15" r="3" fill="purple"></circle>
        <line x1="25" y1="25" x2="35" y2="15"></line>
        <circle cx="35" cy="15" r="3" fill="blue"></circle>
        <line x1="25" y1="25" x2="25" y2="35"></line>
        <circle cx="25" cy="35" r="2" fill="red"></circle>
      </g>
    </svg>
  </div>

  <!-- Collaboration Icon -->
  <div class="icon">
    <h4>Collaboration</h4>
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="black" stroke-width="2">
        <path d="M 20 20 Q 25 25 30 20" fill="none"></path>
        <path d="M 20 30 Q 25 25 30 30" fill="none"></path>
        <rect x="24" y="22" width="2" height="5" fill="gray"></rect>
      </g>
    </svg>
  </div>

  <!-- Prompt Selector Icon -->
  <div class="icon">
    <h4>Prompt Selector</h4>
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="black" stroke-width="2">
        <circle cx="25" cy="25" r="15" fill="lightgray"></circle>
        <line x1="25" y1="10" x2="25" y2="40" stroke="black"></line>
        <line x1="10" y1="25" x2="40" y2="25" stroke="black"></line>
        <text x="18" y="15" font-size="6">⚡</text>
        <text x="33" y="15" font-size="6">⚙️</text>
        <text x="18" y="35" font-size="6">💡</text>
        <text x="33" y="35" font-size="6">📘</text>
      </g>
    </svg>
  </div>

  <!-- Feedback Icon -->
  <div class="icon">
    <h4>Feedback</h4>
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="black" stroke-width="2">
        <ellipse cx="25" cy="25" rx="15" ry="10" fill="lightblue"></ellipse>
        <text x="18" y="23" font-size="6">👍</text>
        <text x="25" y="30" font-size="6">❓</text>
        <text x="32" y="23" font-size="6">⚠️</text>
      </g>
    </svg>
  </div>
</div>

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

<!-- Styles for Icons and Modal -->
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
    #icons-section .icon {
        display: inline-block;
        margin: 15px;
        text-align: center;
    }
</style>

<!-- Link to Custom CSS and Script -->
<link rel="stylesheet" href="{{site.baseurl}}/navigation/create_and_compete/style.css">
<script src="{{site.baseurl}}/navigation/create_and_compete/script.js"></script>
