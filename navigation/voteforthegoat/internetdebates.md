---
layout: post
title: Internet debates
description: internet debates
permalink: /voteforthegoat/internetdebates
menu: nav/vote_for_the_goat.html
comments: true
---

# Community Rules/Guidelines:
<div id="rules-popup" class = "modal">
    <div class="modal-content">
        <h2>Community Rules/Guidelines</h2>
        <ul>
            <li>Be Respectful: Keep things light and friendly. Make sure to respect others' views, and avoid any rude or offensive comments.</li>
            <li>Keep it Family-Friendly: Use clean language—no offensive words, hate speech, or harassment allowed.</li>
            <li>Stay On-Topic: Focus on the debate question. Stick to points that add to the discussion.</li>
            <li>Vote Honestly: Vote once per debate, whether it’s in the main chat or Timer Debate. All votes are anonymous.</li>
            <li>One Account Only: Just one account per person—no extra accounts to sway votes.</li>
            <li>Use Timer Debates Effectively: In Timer Debate mode, share quick, concise arguments on a timer. Stick to your turn, keep responses short, and follow the time limit.</li>
            <li>Respect Moderators: Moderators are here to help things run smoothly. Follow their lead if they give you a reminder.</li>
            <li>Report Issues: If you see spam or anything inappropriate, use the report feature to help us keep things fun for everyone.</li>
        </ul>
        <button id="acknowledge-rules" class="acknowledge-btn">I have read and acknowledged the rules</button>
    </div>
</div>


<head>
    <title>Internet Debate Forum</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background-color: #0d0d0d;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 1rem;
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
            overflow: auto;
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

        .modal-content h2 {
            margin-bottom: 20px;
        }

        .modal-content ul {
            list-style: none;
            padding: 0;
            text-align: left;
        }

        .modal-content li {
            margin-bottom: 10px;
        }
        .container {
            width: 100%;
            max-width: 800px;
            text-align: center;
            padding: 2rem;
            background: #1a1a1a;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        header h1 {
            font-size: 3rem;
            margin-bottom: 2rem;
            color: #00e5ff;
            text-shadow: 0 0 15px rgba(0, 229, 255, 0.8);
        }

        #debate-selection h2, #arguments-list h2 {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
        }

        .buttons {
            display: flex;
            justify-content: space-around;
            margin-bottom: 2rem;
        }

        .side-btn {
            padding: 1rem 2rem;
            font-size: 1.2rem;
            border: none;
            cursor: pointer;
            border-radius: 10px;
            background: linear-gradient(45deg, #00e5ff, #0099cc);
            color: #fff;
            box-shadow: 0 0 10px rgba(0, 229, 255, 0.8);
            transition: background 0.3s ease;
        }

        .side-btn:hover {
            background: linear-gradient(45deg, #0099cc, #006699);
        }

        .switch-debate-btn {
            padding: 1rem 2rem;
            font-size: 1.2rem;
            border: none;
            cursor: pointer;
            border-radius: 10px;
            background: linear-gradient(45deg, #ff6347, #ff4500);
            color: #fff;
            box-shadow: 0 0 10px rgba(255, 99, 71, 0.8);
            transition: background 0.3s ease;
        }

        .switch-debate-btn:hover {
            background: linear-gradient(45deg, #ff4500, #ff6347);
        }

        #argument-section {
            margin-top: 2rem;
        }

        #argument-input {
            width: 100%;
            height: 100px;
            border: 2px solid #00e5ff;
            border-radius: 10px;
            background: #0a0a0a;
            color: #fff;
            padding: 1rem;
            margin-bottom: 1rem;
            font-size: 1rem;
            resize: none;
        }

        .submit-btn {
            padding: 1rem 2rem;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            border-radius: 10px;
            background: linear-gradient(45deg, #00e5ff, #0099cc);
            color: #fff;
            box-shadow: 0 0 10px rgba(0, 229, 255, 0.8);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 1rem 0;
        }

        li {
            background: #1a1a1a;
            margin: 1rem 0;
            padding: 1rem;
            border-radius: 10px;
            position: relative;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        li .rate {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
        }

        .rate button {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            margin: 0 0.5rem;
            color: #00e5ff;
            border-radius: 50px;
            padding: 0.2rem 0.5rem;
            background-color: rgba(0, 229, 255, 0.1);
            transition: transform 0.3s ease;
        }

        .hidden {
            display: none;
        }

        .acknowledge-btn {
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            border-radius: 10px;
            background: linear-gradient(45deg, #00e5ff, #0099cc);
            color: #fff;
            box-shadow: 0 0 10px rgba(0, 229, 255, 0.8);
            transition: background 0.3s ease;
        }

        .acknowledge-btn:hover {
            background: linear-gradient(45deg, #0099cc, #006699);
        }

        .reply-btn {
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            border-radius: 10px;
            background: linear-gradient(45deg, #00e5ff, #0099cc);
            color: #fff;
            box-shadow: 0 0 10px rgba(0, 229, 255, 0.8);
            transition: background 0.3s ease;
        }

        .reply-btn:hover {
            background: linear-gradient(45deg, #0099cc, #006699);
        }
    </style>
</head>
<body>
    <script>
       document.getElementById('acknowledge-rules').addEventListener('click', function() {
            var rulesPopup = document.getElementById('rules-popup');
            rulesPopup.style.display = 'none';
        });
        window.onload = function() {
            var rulesPopup = document.getElementById('rules-popup');
            rulesPopup.style.display = 'flex';
        };
    </script>
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

    <script>
        document.addEventListener("DOMContentLoaded", () => {
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
            const acknowledgeButton = document.getElementById('acknowledge-rules');
            const communityRules = document.querySelector('body > :first-child');

            let selectedSide = '';
            let lastMessageTime = 0;
            const userMessages = new Set();
            let currentDebate = 'Milk or Cereal First?';
            const debates = ['Milk or Cereal First?', 'Is a Hot Dog a Sandwich?'];
            let currentDebateIndex = 0;
            const chatHistory = {
                'Milk or Cereal First?': [],
                'Is a Hot Dog a Sandwich?': []
            };

            acknowledgeButton.addEventListener('click', () => {
                communityRules.classList.add('hidden');
                acknowledgeButton.classList.add('hidden');
            });

            milkButton.addEventListener('click', () => {
                selectedSide = milkButton.textContent;
                showArgumentSection();
            });

            cerealButton.addEventListener('click', () => {
                selectedSide = cerealButton.textContent;
                showArgumentSection();
            });

            switchDebateButton.addEventListener('click', () => {
                currentDebateIndex = (currentDebateIndex + 1) % debates.length;
                currentDebate = debates[currentDebateIndex];
                currentDebateText.textContent = `Current Debate: ${currentDebate}`;
                argumentContainer.innerHTML = '';
                userMessages.clear();
                argumentSection.classList.add('hidden');
                argumentsList.classList.add('hidden');
                updateButtons();
                loadChatHistory();
            });

            function updateButtons() {
                if (currentDebate === 'Milk or Cereal First?') {
                    milkButton.textContent = 'Milk First';
                    cerealButton.textContent = 'Cereal First';
                } else if (currentDebate === 'Is a Hot Dog a Sandwich?') {
                    milkButton.textContent = 'Yes';
                    cerealButton.textContent = 'No';
                }
                selectedSideText.textContent = 'Your Side:';
            }

            function showArgumentSection() {
                argumentSection.classList.remove('hidden');
                selectedSideText.textContent = `Your Side: ${selectedSide}`;
            }

            function loadChatHistory() {
                const history = chatHistory[currentDebate];
                history.forEach(argument => {
                    const argumentElement = document.createElement('li');
                    argumentElement.innerHTML = argument;
                    argumentContainer.appendChild(argumentElement);
                });
                if (history.length > 0) {
                    argumentsList.classList.remove('hidden');
                }
            }

            submitButton.addEventListener('click', () => {
                const currentTime = new Date().getTime();
                if (currentTime - lastMessageTime < 5000) {
                    alert('You can only send a message once every 5 seconds.');
                    return;
                }

                const argumentText = argumentInput.value.trim();
                if (argumentText && !userMessages.has(selectedSide)) {
                    const argumentElement = document.createElement('li');
                    let upvotes = 0;
                    let downvotes = 0;
                    let hasVoted = false;

                    argumentElement.innerHTML = `
                        <p><strong>${selectedSide}:</strong> ${argumentText}</p>
                        <div class="rate">
                            <button class="upvote">👍 <span class="upvote-count">0</span></button>
                            <button class="downvote">👎 <span class="downvote-count">0</span></button>
                        </div>
                        <button class="reply-btn">Reply</button>
                        <ul class="replies hidden"></ul>
                    `;

                    argumentContainer.appendChild(argumentElement);
                    argumentInput.value = '';
                    userMessages.add(selectedSide);
                    lastMessageTime = currentTime;

                    chatHistory[currentDebate].push(argumentElement.outerHTML);

                    argumentsList.classList.remove('hidden');

                    const upvoteBtn = argumentElement.querySelector('.upvote');
                    const downvoteBtn = argumentElement.querySelector('.downvote');
                    const upvoteCount = argumentElement.querySelector('.upvote-count');
                    const downvoteCount = argumentElement.querySelector('.downvote-count');
                    const replyBtn = argumentElement.querySelector('.reply-btn');
                    const repliesContainer = argumentElement.querySelector('.replies');

                    upvoteBtn.addEventListener('click', () => {
                        if (!hasVoted) {
                            upvotes++;
                            upvoteCount.textContent = upvotes;
                            hasVoted = true;
                        } else if (hasVoted && upvotes > 0) {
                            upvotes--;
                            upvoteCount.textContent = upvotes;
                            hasVoted = false;
                        }
                    });

                    downvoteBtn.addEventListener('click', () => {
                        if (!hasVoted) {
                            downvotes++;
                            downvoteCount.textContent = downvotes;
                            hasVoted = true;
                        } else if (hasVoted && downvotes > 0) {
                            downvotes--;
                            downvoteCount.textContent = downvotes;
                            hasVoted = false;
                        }
                    });

                    replyBtn.addEventListener('click', () => {
                        const replyText = prompt('Enter your reply:');
                        if (replyText) {
                            const replyElement = document.createElement('li');
                            replyElement.textContent = replyText;
                            repliesContainer.appendChild(replyElement);
                            repliesContainer.classList.remove('hidden');
                            chatHistory[currentDebate].push(argumentElement.outerHTML);
                        }
                    });
                } else if (userMessages.has(selectedSide)) {
                    alert('You can only post one message per debate.');
                }
            });

            loadChatHistory();
        });
    </script>
</body>