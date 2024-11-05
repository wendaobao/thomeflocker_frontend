---
permalink: /voteforthegoat/calicovote/house
menu: nav/vote_for_the_goat.html
layout: post
title: Entering The House
description: Enter the houses of your favorite critters now
Authors: Maryam, Nora, Kushi, Joanna
---
<div class="content">
    <div id="houseInfo" class="house-info">Loading...</div>
    <div id="message" class="message">Please wait...</div>
    <button id="backButton" class="button">Go Back</button>
</div>

<style>


    /* Base Styles */
    body {
        font-family: "Times New Roman", Times, serif;
        transition: background-color 0.5s ease;
        color: #fff;
        margin: 0;
        padding: 0;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    /* Content Container */
    .content {
        padding: 20px;
        max-width: 600px;
        margin: 20px;
        border-radius: 10px;
        text-align: center;
        background: rgba(0, 0, 0, 0.5);
    }

    /* House Information */
    .house-info {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    .message {
        font-size: 20px;
        margin-bottom: 20px;
    }

    /* Button Styles */
    .button {
        padding: 10px 20px;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.2);
        color: #fff;
        transition: background-color 0.3s ease;
    }

    .button:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
</style>

<script>
     /*importing the og md file */

    import selectedHouse from '{{site.baseurl}}/navigation/voteforthegoat/calicovote.md';

    

// Retrieve selected house from localStorage
const selectedHouse = localStorage.getItem('selectedHouse');

const houseInfo = document.getElementById('houseInfo');
const message = document.getElementById('message');
const backButton = document.getElementById('backButton');

// Function to set the background color and content based on the selected house
function renderHousePage(house) {
    // Clear any previous content
    houseInfo.textContent = "";
    message.textContent = "";

    // Set styles and content based on the selected house
    switch (house) {
        case 'Adventure Play':
            document.body.style.backgroundColor = 'green';
            houseInfo.textContent = "Welcome to the Adventure Play House!";
            message.textContent = "Explore and have fun!";
            break;
        case 'Sylvanian Family Restaurant':
            document.body.style.backgroundColor = 'blue';
            houseInfo.textContent = "Welcome to the Sylvanian Family Restaurant House!";
            message.textContent = "Join us for a delightful meal!";
            break;
        case 'Magical Mermaid Castle':
            document.body.style.backgroundColor = 'purple';
            houseInfo.textContent = "Welcome to the Magical Mermaid Castle!";
            message.textContent = "Dive into an enchanting experience!";
            break;
        case 'Woody School':
            document.body.style.backgroundColor = 'goldenrod';
            houseInfo.textContent = "Welcome to the Woody School House!";
            message.textContent = "Get ready to learn and grow!";
            break;
        case 'Spooky Surprise Haunted':
            document.body.style.backgroundColor = 'darkred';
            houseInfo.textContent = "Welcome to the Spooky Surprise Haunted House!";
            message.textContent = "Dare to enter the haunted halls!";
            break;
        case 'Brick Oven Bakery':
            document.body.style.backgroundColor = 'orange';
            houseInfo.textContent = "Welcome to the Brick Oven Bakery House!";
            message.textContent = "Smell the freshly baked goodies!";
            break;
        default:
            document.body.style.backgroundColor = 'white';
            houseInfo.textContent = "House not found.";
            message.textContent = "Please go back and select a house.";
    }
}

// Function to handle the "Go Back" button click
function goBack() {
    window.history.back(); // Navigate to the previous page
}

// Set up the "Go Back" button event listener
backButton.addEventListener('click', goBack);

// Run the function only if `selectedHouse` exists
if (selectedHouse) {
    renderHousePage(selectedHouse);
} else {
    houseInfo.textContent = "No house selected.";
    message.textContent = "Please go back and select a house.";
}

// Listen for changes in house selection to update the page dynamically
window.addEventListener('storage', (event) => {
    if (event.key === 'selectedHouse') {
        renderHousePage(event.newValue);
    }
});
</script>
