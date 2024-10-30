---
layout: post
title: Beverage Debates
menu: nav/vote_for_the_goat.html
permalink: /voteforthegoat/beveragedebates/
author: Thomas, Collin
---

Our group has chosen to focus on discussions about which drinks should be added to our school cafeteria menu. For instance, we might consider whether options like flavored water or fruit juices should be introduced alongside traditional choices like chocolate milk. By exploring these topics, we aim to engage students in conversations that reflect their preferences and encourage them to share their opinions on beverage options.


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beverage Voting</title>
    <style>
        /* Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        /* Body Styling */
        body {
            background: linear-gradient(135deg, #1d2671, #c33764);
            color: #ffffff;
            font-family: Arial, sans-serif;
            height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        /* Container Styling */
        .voting-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 30px;
            width: 100%;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
            margin: auto;
        }
        .voting-container:hover {
            transform: scale(1.05);
        }
        /* Header Styling */
        .voting-container h2 {
            color: #00c6ff;
            font-size: 24px;
            margin-bottom: 20px;
            text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
        /* Option Buttons Styling */
        .option-button {
            background: linear-gradient(135deg, #ff8a00, #e52e71);
            color: #ffffff;
            padding: 12px 20px;
            margin: 8px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s ease, transform 0.2s ease;
            outline: none;
        }
        .option-button:hover {
            background: linear-gradient(135deg, #e52e71, #ff8a00);
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(255, 138, 0, 0.3);
        }
        .option-button:active {
            transform: scale(0.95);
        }
        /* Selected Option Display */
        .selected-option {
            margin-top: 15px;
            font-size: 18px;
            font-weight: bold;
            color: #00e6ff;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }
        /* Submit Button Styling */
        .submit-button {
            background: linear-gradient(135deg, #00c6ff, #0072ff);
            color: #ffffff;
            padding: 12px 30px;
            margin-top: 20px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            transition: background 0.3s ease, transform 0.2s ease;
            outline: none;
        }
        .submit-button:hover {
            background: linear-gradient(135deg, #0072ff, #00c6ff);
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(0, 198, 255, 0.3);
        }
        .submit-button:active {
            transform: scale(0.95);
        }
        /* Reasoning Input Box */
        .reasoning-container {
            display: none;
            margin-top: 20px;
            text-align: center;
        }
        .reasoning-container textarea {
            width: 100%;
            max-width: 350px;
            height: 100px;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #00c6ff;
            background: rgba(255, 255, 255, 0.2);
            color: #ffffff;
            font-size: 16px;
            resize: none;
            outline: none;
        }
        .reasoning-submit {
            margin-top: 10px;
            background: linear-gradient(135deg, #00c6ff, #0072ff);
            color: #ffffff;
            padding: 10px 20px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s ease, transform 0.2s ease;
            outline: none;
        }
        .reasoning-submit:hover {
            background: linear-gradient(135deg, #0072ff, #00c6ff);
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(0, 198, 255, 0.3);
        }
        .reasoning-submit:active {
            transform: scale(0.95);
        }
        /* Add some basic styling for the clickable image */
        .clickable-image {
            cursor: pointer;
            max-width: 100%;
            height: auto;
            transition: opacity 0.3s ease;
        }
        .clickable-image:hover {
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <a href="https://example.com" target="_blank">
        <img src="path/to/your/image.jpg" alt="Description of image">
    </a>
    <div class="voting-container">
        <h2>Choose Your an Beverage that you would like to be added to Del Norte Cafeteria</h2>
        <div>
            <button class="option-button" onclick="selectOption('Coke')">Coke</button>
            <button class="option-button" onclick="selectOption('Gatorade')">Gatorade</button>
            <button class="option-button" onclick="selectOption('Banana milk')">Banana milk</button>
            <button class="option-button" onclick="selectOption('Coconut water')">Coconut water</button>
        </div>
        <div class="selected-option" id="selectedOption">Your Choice: None</div>
        <button class="submit-button" onclick="submitVote()">Submit Vote</button>
        <!-- Reasoning Input Container -->
        <div class="reasoning-container" id="reasoningContainer">
            <h3>Why did you choose this beverage?</h3>
            <textarea id="reasoningText" placeholder="Enter your reasoning here..."></textarea>
            <button class="reasoning-submit" onclick="submitReasoning()">Submit Reasoning</button>
        </div>
    </div>
    <script>
        let selectedBeverage = null;
        function selectOption(beverage) {
            selectedBeverage = beverage;
            document.getElementById('selectedOption').textContent = 'Your Choice: ' + beverage;
        }
        function submitVote() {
            if (selectedBeverage) {
                alert('Thank you for voting for ' + selectedBeverage + '!');
                // Show the reasoning input section
                document.getElementById('reasoningContainer').style.display = 'block';
            } else {
                alert('Please select a beverage before submitting your vote.');
            }
        }
        function submitReasoning() {
            const reasoning = document.getElementById('reasoningText').value;
            if (reasoning.trim()) {
                alert('Thank you for sharing your reasoning: ' + reasoning);
                // Hide the reasoning input section after submission
                document.getElementById('reasoningContainer').style.display = 'none';
                document.getElementById('reasoningText').value = ''; // Clear the text area
            } else {
                alert('Please enter a reasoning before submitting.');
            }
        }
    </script>
</body>
</html>
