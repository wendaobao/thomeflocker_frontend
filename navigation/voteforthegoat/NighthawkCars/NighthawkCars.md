---
layout: post
title: Nighthawk Cars
description: A site all about cars
permalink: /voteforthegoat/nighthawkCars/
comments: true
---

<table>
    <tr>
        <td id="homepage"><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars">Nighthawk Cars (Home Page)</a></td>
        <td id="internetdebates"><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/luxuryCars">Luxury Cars</a></td>
        <td id="calicovote"><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/vintageCars">Vintage Cars</a></td>
        <td id="dnerostore"><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/studentCars">Student Cars</a></td>
        <td id="Beveragedebates"><a href="{{site.baseurl}}/voteforthegoat/nighthawkCars/economyCars">Economy Cars</a></td>
    </tr>
</table>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Cars</title>
    <style>
        /* Popup Overlay and Popup Content Styles */
        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .popup-overlay.active {
            visibility: visible;
            opacity: 1;
        }
        .popup-content {
            background-color: black;
            padding: 20px;
            width: 80%;
            max-width: 400px;
            border-radius: 8px;
            text-align: center;
        }
        .popup-content h3 {
            margin-top: 0;
            color: #ff5050;
        }
        .popup-content button {
            background-color: #ff5050;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<!-- Popup Overlay -->
<div class="popup-overlay" id="popup">
    <div class="popup-content">
        <h3>Welcome to Nighthawk Cars!</h3>
        <p>Please read and accept the following rules:</p>
        <ul style="text-align: left; padding-left: 20px;">
            <li>Respect other users' opinions on cars.</li>
            <li>No spamming or irrelevant links.</li>
            <li>Use appropriate language at all times.</li>
        </ul>
        <input type="text" id="usernameInput" placeholder="Enter your name" style="padding: 8px; margin-top: 15px;">
        <button onclick="setUsername()" style="margin-top: 10px;">I Agree</button>
    </div>
</div>

<h2> Welcome to the Nighthawk Cars Page! </h2>
<p>A set of pages created by Lars Andre Lindain, Arnav Mittal, Weston Gardener, and Shaurya Singh</p>
<p>Here is a game to keep you entertained:</p>

<iframe src="https://voyager162.github.io/carGame/index.html"
        width="1200" 
        height="1200" 
        frameborder="0" 
        allowfullscreen>
</iframe>

<!-- Include the popup script at the bottom -->
<script>
    // Show the popup when the page loads
    window.onload = function() {
        if (!localStorage.getItem('ifEnteredUsernameCars')) {
            document.getElementById('popup').classList.add('active');
        }
        else {
            alert("collected data" + localStorage.getItem('username'))  
        }
    };

    // Function to set username when the user agrees
    function setUsername() {
        const usernameInput = document.getElementById('usernameInput').value.trim();
        if (usernameInput) {
            localStorage.setItem('CarsUsername', usernameInput); // Store in localStorage
            localStorage.setItem('ifEnteredUsernameCars', true)
            document.getElementById('popup').classList.remove('active'); // Close the popup
        } else {
            alert("Please enter a valid name!");
        }
    }
</script>

</body>
</html>