---
layout: post
title: Internet debates
description: internet debates
permalink: /voteforthegoat/internetdebates
menu: nav/vote_for_the_goat.html
comments: true
---

# Community Rules/Guidelines:
<div id="rules-popup" class="modal">
    <div class="modal-content">
        <h2>Community Rules/Guidelines</h2>
        <ul>
            <li>Be Respectful: Keep things light and friendly. Make sure to respect others' views, and avoid any rude or offensive comments.</li>
            <li>Keep it Family-Friendly: Use clean language—no offensive words, hate speech, or harassment allowed.</li>
            <li>Stay On-Topic: Focus on the debate question. Stick to points that add to the discussion.</li>
            <li>Vote Honestly: Vote once per debate, whether it’s in the main chat or Timer Debate. All votes are anonymous.</li>
            <li>One Account Only: Just one account per person—no extra accounts to sway votes.</li>
        </ul>
        <button id="acknowledge-rules" class="acknowledge-btn">I have read and acknowledged the rules</button>
    </div>
</div>

<div class="container">
    <header>
        <h1>Choose Your Side</h1>
    </header>

    <section id="debate-selection">
        <h2 id="current-debate">Current Debate: Milk or Cereal First?</h2>
        <div class="buttons">
            <button id="milkFirst" class="side-btn">Milk First</button>
            <button id="cerealFirst" class="side-btn">Cereal First</button>
        </div>
        <button id="switch-debate" class="switch-debate-btn">Switch Debate</button>
    </section>

    <section id="argument-section" class="hidden">
        <h2 id="selected-side">Your Side:</h2>
        <textarea id="argument-input" placeholder="Submit your argument"></textarea>
        <button id="submit-argument" class="submit-btn">Submit Argument</button>
    </section>

    <section id="arguments-list" class="hidden">
        <h2>Arguments</h2>
        <ul id="argument-container"></ul>
    </section>
</div>

<style>
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #0d0d0d;
        color: #fff;
        padding: 1rem;
        display: flex;
    }
    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }
    .modal-content {
        background-color: #333;
        padding: 20px;
        border-radius: 10px;
        width: 80%;
        max-width: 600px;
        text-align: center;
    }
    .container {
        max-width: 800px;
        margin: auto;
        text-align: center;
        padding: 2rem;
        background: #1a1a1a;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    h1 {
        font-size: 3rem;
        margin-bottom: 2rem;
        color: #00e5ff;
    }
    h2 {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }
    .side-btn, .switch-debate-btn, .submit-btn, .acknowledge-btn {
        padding: 1rem 2rem;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        color: #fff;
        transition: background 0.3s ease;
        background: linear-gradient(45deg, #00e5ff, #0099cc);
    }
    .side-btn:hover {
        background: linear-gradient(45deg, #0099cc, #006699);
    }
    .switch-debate-btn {
        background: linear-gradient(45deg, #ff6347, #ff4500);
    }
    #argument-input {
        width: 100%;
        height: 100px;
        border: 2px solid #00e5ff;
        border-radius: 10px;
        background: #0a0a0a;
        color: #fff;
        padding: 1rem;
        resize: none;
        margin-bottom: 1rem;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        background: #1a1a1a;
        margin: 1rem 0;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    li .rate {
        display: flex;
        gap: 0.5rem;
    }
    .rate button {
        background: none;
        border: none;
        font-size: 1.2rem;
        color: #00e5ff;
        cursor: pointer;
    }
    .hidden {
        display: none;
    }
</style>

<script>
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById('acknowledge-rules').onclick = () => {
            document.getElementById('rules-popup').style.display = 'none';
        };

        const milkButton = document.getElementById('milkFirst');
        const cerealButton = document.getElementById('cerealFirst');
        const switchDebateButton = document.getElementById('switch-debate');
        const argumentSection = document.getElementById('argument-section');
        const argumentsList = document.getElementById('arguments-list');
        const argumentInput = document.getElementById('argument-input');
        const submitButton = document.getElementById('submit-argument');
        const argumentContainer = document.getElementById('argument-container');
        const selectedSideText = document.getElementById('selected-side');
        const currentDebateText = document.getElementById('current-debate');

        let selectedSide = '';
        const debates = ['Milk or Cereal First?', 'Is a Hot Dog a Sandwich?'];
        let currentDebateIndex = 0;
        const chatHistory = { 'Milk or Cereal First?': [], 'Is a Hot Dog a Sandwich?': [] };

        milkButton.onclick = () => { selectedSide = 'Milk First'; showArgumentSection(); };
        cerealButton.onclick = () => { selectedSide = 'Cereal First'; showArgumentSection(); };
        
        switchDebateButton.onclick = () => {
            currentDebateIndex = (currentDebateIndex + 1) % debates.length;
            currentDebateText.textContent = `Current Debate: ${debates[currentDebateIndex]}`;
            argumentContainer.innerHTML = '';
            loadChatHistory();
        };

        function showArgumentSection() {
            argumentSection.classList.remove('hidden');
            selectedSideText.textContent = `Your Side: ${selectedSide}`;
        }

        function loadChatHistory() {
            const history = chatHistory[debates[currentDebateIndex]];
            history.forEach(argument => {
                const argumentElement = document.createElement('li');
                argumentElement.innerHTML = argument;
                argumentContainer.appendChild(argumentElement);
            });
            if (history.length > 0) argumentsList.classList.remove('hidden');
        }

        submitButton.onclick = () => {
            const argumentText = argumentInput.value.trim();
            if (argumentText) {
                const argumentElement = document.createElement('li');
                argumentElement.innerHTML = `<p><strong>${selectedSide}:</strong> ${argumentText}</p>
                    <div class="rate">
                        <button class="upvote">👍 <span class="upvote-count">0</span></button>
                        <button class="downvote">👎 <span class="downvote-count">0</span></button>
                    </div>`;
                argumentContainer.appendChild(argumentElement);
                argumentInput.value = '';
                chatHistory[debates[currentDebateIndex]].push(argumentElement.outerHTML);
                argumentsList.classList.remove('hidden');
            }
        };
    });
</script>
