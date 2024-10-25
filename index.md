---
layout: post
title: My Space 
description: My Interests
hide: true
menu: nav/home.html
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
            height: 100vh;
        }

        .container {
            width: 60%;
            text-align: center;
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
        }

        li {
            background: #1a1a1a;
            margin: 1rem 0;
            padding: 1rem;
            border-radius: 10px;
            position: relative;
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
            font-size: 1.5rem;
            margin: 0 0.5rem;
            color: #00e5ff;
            transition: transform 0.3s ease;
        }

        .rate button:hover {
            transform: scale(1.2);
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

        <!-- Argument Submission -->
        <section id="argument-section" class="hidden">
            <h2 id="selected-side">Your Side:</h2>
            <textarea id="argument-input" placeholder="Submit your argument"></textarea>
            <button id="submit-argument" class="submit-btn">Submit Argument</button>
        </section>

        <!-- Argument List -->
        <section id="arguments-list" class="hidden">
            <h2>Arguments</h2>
            <ul id="argument-container">
                <!-- Arguments will go here -->
            </ul>
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

            // Side selection logic
            milkButton.addEventListener('click', () => {
                selectedSide = 'Milk First';
                showArgumentSection();
            });

            cerealButton.addEventListener('click', () => {
                selectedSide = 'Cereal First';
                showArgumentSection();
            });

            // Show the argument submission section
            function showArgumentSection() {
                argumentSection.classList.remove('hidden');
                selectedSideText.textContent = `Your Side: ${selectedSide}`;
            }

            // Submit argument and display it in the list
            submitButton.addEventListener('click', () => {
                const argumentText = argumentInput.value.trim();
                if (argumentText) {
                    const argumentElement = document.createElement('li');
                    argumentElement.innerHTML = `
                        <p><strong>${selectedSide}:</strong> ${argumentText}</p>
                        <div class="rate">
                            <button class="upvote">👍</button>
                            <button class="downvote">👎</button>
                        </div>
                    `;
                    argumentContainer.appendChild(argumentElement);
                    argumentInput.value = ''; // clear input

                    // Show argument list if hidden
                    argumentsList.classList.remove('hidden');

                    // Handle upvote/downvote
                    argumentElement.querySelector('.upvote').addEventListener('click', () => {
                        alert('Upvoted!');
                    });
                    argumentElement.querySelector('.downvote').addEventListener('click', () => {
                        alert('Downvoted!');
                    });
                }
            });
        });
    </script>
</body>
