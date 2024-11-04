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
            background-attachment: fixed; /* Makes background fixed */
            color: #ffffff;
            font-family: Arial, sans-serif;
            min-height: 100vh; /* Ensures it covers the viewport height */
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
            max-width: 800px; /* Increased to accommodate side-by-side layout */
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
            margin: auto;
        }
        .voting-container:hover {
            transform: scale(1.02);
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
            width: 200px;
            margin: 8px 0;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s ease, transform 0.2s ease;
            outline: none;
            display: block;
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
        /* Add these new styles */
        .beverage-details {
            display: none;
            padding: 15px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 8px;
            text-align: left;
            position: sticky;
            top: 20px;
        }

        .beverage-details img {
            max-width: 200px;
            border-radius: 8px;
            margin: 10px 0;
        }

        .beverage-details p {
            font-size: 14px;
            line-height: 1.4;
            color: #ffffff;
        }

        /* Add new styles for the layout */
        .voting-layout {
            display: flex;
            gap: 20px;
            justify-content: space-between;
        }

        .options-container {
            flex: 0 0 40%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
        }

        .details-container {
            flex: 0 0 55%;
            position: relative;
        }

        /* Add or update these styles */
        nav {
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background: transparent;
        }

        nav a, .DNHS-title {
            background: rgba(0, 0, 0, 0.5);
            color: #00c6ff;
            padding: 12px 20px;
            text-decoration: none;
            transition: all 0.3s ease;
            font-family: Arial, sans-serif;
            font-size: 16px;
        }

        nav a:hover, .DNHS-title:hover {
            background: rgba(0, 0, 0, 0.7);
            color: #00e6ff;
            transform: scale(1.05);
        }

        .nav-container {
            border-bottom: 2px solid #00c6ff;
            background: transparent;
        }

        .header-container {
            background: transparent;
            padding: 20px;
        }

        /* Style for the DNHS Flocker title */
        .header-title, 
        h1, 
        .DNHS-title {  /* Use whichever class/element your title uses */
            background: transparent;
            color: #ffffff;
            font-family: Arial, sans-serif;
            padding: 12px 20px;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .header-title:hover,
        h1:hover,
        .DNHS-title:hover {
            transform: scale(1.1);
            text-shadow: 0 4px 8px rgba(255, 138, 0, 0.3);
        }

        .modal {
            display: none; /* Hidden by default */
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
        }

        .modal-content {
            background-color: #333;
            margin: 15% auto;
            padding: 20px;
            width: 80%;
            max-width: 600px;
            border-radius: 10px;
            color: #fff;
            text-align: center;
        }

        #closeModal {
            background-color: #00c6ff;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
        }

        #closeModal:hover {
            background-color: #00e6ff;
        }
    </style>
</head>
<body>
    <div id="guidelinesModal" class="modal">
        <div class="modal-content">
            <h2>Community Rules/Guidelines</h2>
            <ul>
                <li>Be Respectful: Keep things light and friendly.</li>
                <li>Keep it Family-Friendly: Use clean language.</li>
                <li>Stay On-Topic: Focus on the debate question.</li>
                <li>Vote Honestly: Vote once per debate.</li>
                <li>One Account Only: Just one account per person.</li>
            </ul>
            <button id="closeModal">I have read and acknowledged the rules</button>
        </div>
    </div>

    <div class="voting-container">
        <h2>Choose Your an Beverage that you would like to be added to Del Norte Cafeteria</h2>
        <div class="voting-layout">
            <div class="options-container">
                <button class="option-button" onclick="selectOption('Coke')">Coke</button>
                <button class="option-button" onclick="selectOption('Gatorade')">Gatorade</button>
                <button class="option-button" onclick="selectOption('Banana milk')">Banana milk</button>
                <button class="option-button" onclick="selectOption('Coconut water')">Coconut water</button>
                <div class="selected-option" id="selectedOption">Your Choice: None</div>
                <button class="submit-button" onclick="submitVote()">Submit Vote</button>
            </div>
            
            <div class="details-container">
                <div id="coke-details" class="beverage-details">
                    <img src="data:image/jpeg;base64,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" alt="Coca Cola">
                    <p>Ingredients: Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Caffeine</p>
                </div>

                <div id="gatorade-details" class="beverage-details">
                    <img src="https://www.kroger.com/product/images/large/right/0005200012324" alt="Gatorade">
                    <p>Ingredients: Water, Sugar, Dextrose, Citric Acid, Natural and Artificial Flavor, Salt, Sodium Citrate, Monopotassium Phosphate, Modified Food Starch, Red 40</p>
                </div>

                <div id="banana-milk-details" class="beverage-details">
                    <img src="https://m.media-amazon.com/images/I/6177MtlTnkL.jpg" alt="Banana Milk">
                    <p>Ingredients: Milk, Banana Puree, Sugar, Natural Flavors, Vitamins A & D</p>
                </div>

                <div id="coconut-water-details" class="beverage-details">
                    <img src="https://pics.walgreens.com/prodimg/476175/450.jpg" alt="Coconut Water">
                    <p>Ingredients: 100% Natural Coconut Water, No Added Sugar or Preservatives</p>
                </div>
            </div>
        </div>
        <!-- Reasoning Input Container -->
        <div class="reasoning-container" id="reasoningContainer">
            <h3>Why did you choose this beverage?</h3>
            <textarea id="reasoningText" placeholder="Enter your reasoning here..."></textarea>
            <button class="reasoning-submit" onclick="submitReasoning()">Submit Reasoning</button>
        </div>
    </div>
    <script>
        let selectedBeverage = null;
        
        function hideAllDetails() {
            const details = document.querySelectorAll('.beverage-details');
            details.forEach(detail => detail.style.display = 'none');
        }

        function selectOption(beverage) {
            selectedBeverage = beverage;
            document.getElementById('selectedOption').textContent = 'Your Choice: ' + beverage;
            
            // Hide all details first
            hideAllDetails();
            
            // Show details for selected beverage
            const detailsId = beverage.toLowerCase().replace(' ', '-') + '-details';
            document.getElementById(detailsId).style.display = 'block';
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

        document.addEventListener("DOMContentLoaded", function() {
            const modal = document.getElementById("guidelinesModal");
            const closeModal = document.getElementById("closeModal");

            // Show the modal on page load
            modal.style.display = "block";

            // Close the modal when the button is clicked
            closeModal.onclick = function() {
                modal.style.display = "none";
            }
        });
    </script>
</body>
</html>
