---
layout: post
title: Internet debates
description: internet debates
permalink: /voteforthegoat/internetdebates
comments: true
---


# Community Rules/Guidelines:
- Be Respectful: Keep things light and friendly. Make sure to respect others' views, and avoid any rude or offensive comments.
- Keep it Family-Friendly: Use clean language—no offensive words, hate speech, or harassment allowed.
- Stay On-Topic: Focus on the debate question. Stick to points that add to the discussion.
- Vote Honestly: Vote once per debate, whether it’s in the main chat or Timer Debate. All votes are anonymous.
- One Account Only: Just one account per person—no extra accounts to sway votes.
- Use Timer Debates Effectively: In Timer Debate mode, share quick, concise arguments on a timer. Stick to your turn, keep responses short, and follow the time limit.
- Respect Moderators: Moderators are here to help things run smoothly. Follow their lead if they give you a reminder.
- Report Issues: If you see spam or anything inappropriate, use the report feature to help us keep things fun for everyone.

<head>
    <title>Futuristic Debate Forum</title>
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

        .container {
            width: 100%;
            max-width: 800px;
            text-align: center;
            padding: 2rem;
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
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Choose Your Side</h1>
        </header>

        <section id="debate-selection">
            <h2>Current Debate: Milk or Cereal First?</h2>
            <div class="buttons">
                <button id="milkFirst" class="side-btn">Milk First</button>
                <button id="cerealFirst" class="side-btn">Cereal First</button>
            </div>
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
            const argumentSection = document.getElementById('argument-section');
            const argumentsList = document.getElementById('arguments-list');
            const argumentInput = document.getElementById('argument-input');
            const submitButton = document.getElementById('submit-argument');
            const argumentContainer = document.getElementById('argument-container');
            const selectedSideText = document.getElementById('selected-side');

            let selectedSide = '';

            milkButton.addEventListener('click', () => {
                selectedSide = 'Milk First';
                showArgumentSection();
            });

            cerealButton.addEventListener('click', () => {
                selectedSide = 'Cereal First';
                showArgumentSection();
            });

            function showArgumentSection() {
                argumentSection.classList.remove('hidden');
                selectedSideText.textContent = `Your Side: ${selectedSide}`;
            }

            submitButton.addEventListener('click', () => {
                const argumentText = argumentInput.value.trim();
                if (argumentText) {
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
                    `;

                    argumentContainer.appendChild(argumentElement);
                    argumentInput.value = '';

                    argumentsList.classList.remove('hidden');

                    const upvoteBtn = argumentElement.querySelector('.upvote');
                    const downvoteBtn = argumentElement.querySelector('.downvote');
                    const upvoteCount = argumentElement.querySelector('.upvote-count');
                    const downvoteCount = argumentElement.querySelector('.downvote-count');

                    upvoteBtn.addEventListener('click', () => {
                        if (!hasVoted) {
                            upvotes++;
                            upvoteCount.textContent = upvotes;
                            hasVoted = true;
                        }
                    });

                    downvoteBtn.addEventListener('click', () => {
                        if (!hasVoted) {
                            downvotes++;
                            downvoteCount.textContent = downvotes;
                            hasVoted = true;
                        }
                    });
                }
            });
        });
    </script>
</body>