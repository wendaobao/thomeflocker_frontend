---
layout: post 
title: Instabox
search_exclude: true
permalink: rate_and_relate/instabox
menu: nav/rate_and_relate.html
author: Aadi, Aaditya, Aditya, Kanhay
---

<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #333;
        color: white;
        margin: 0;
        padding: 0;
    }
    hr {
        border-color: #333;
    }
    /* Navbar styling */
    .navbar {
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .navbar a {
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        font-size: 18px;
    }
    .navbar a:hover {
        background-color: #6a59a3;
        border-radius: 5px;
    }
    .container {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        height: calc(100vh - 60px); /* Full height minus navbar */
    }
    /* Added margin for each box */
    .leaderboard-box,
    .instabox-box {
        margin: 10px;
    }
    .leaderboard-box {
        background-color: #444;
        border-radius: 10px;
        padding: 10px;
        height: 100%;
        /* width: 15%; */
        overflow-y: scroll;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    }
    .instabox-box {
        background-color: #555;
        border-radius: 10px;
        padding: 20px;
        width: 65%;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    }
    /* Instabox chatbox */
    .instabox {
        flex-grow: 1;
        overflow-y: auto;
        padding: 20px;
        background-color: #666;
        border-radius: 5px;
    }
    .instabox p {
        margin: 10px 0;
    }
    .instabox textarea {
        width: 100%;
        height: 60px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-size: 16px;
    }
    .leaderboard-box h2 {
        text-align: center;
        margin-bottom: 10px;
    }
    .leaderboard ul li {
        padding: 10px;
        border-bottom: 1px solid #777;
    }
    .leaderboard ul {
        list-style: none;
        padding: 0;
    }
    /* Responsive design */
    @media (max-width: 768px) {
        .container {
            flex-direction: column;
            align-items: center;
        }
        .leaderboard-box {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
        }
        .instabox-box {
            width: 100%;
        }
    }
</style>
<body>
    <hr>
    <!-- Navbar -->
    <div class="navbar">
        <a href="">Home</a>
        <a href="{{site.baseurl}}/rate_and_relate/instabox/profile">Profile</a>
        <a href="{{site.baseurl}}/rate_and_relate/instabox/settings">Settings</a>
    </div>
    <div class="container">
        <!-- Instabox chatbox -->
        <div class="instabox-box">
            <h2>Instabox 💬</h2>
            <div class="instabox" id="instabox">
                <p><strong>Shish Kabob:</strong> Hey bro! What’s good [1 hr ago]</p>
                <p><strong>Me:</strong> Nothing much, just studying for AP Chemistry.</p>
                <p>You responded one hour and 23 minutes after the notification, with a bonus of -60 points, for a total of 63 points!</p>
            </div>
            <textarea id="chatInput" placeholder="Type your message..."></textarea>
        </div>
        <!-- Leaderboard box -->
        <div class="leaderboard-box">
            <h2>Leaderboard 🏆</h2>
            <div class="leaderboard">
                <ul>
                    <li>🥇 Rama Kama Jamabama - 63</li>
                    <li>🥈 Jenneth Jabberson - 159</li>
                    <li>🥉 Googly Moogly - 203</li>
                    <li>🔺 Shannon Cannonball - 443</li>
                    <li>🔺 Shish Kabob - 652</li>
                    <li>🔺 Frenk Bonobo - 654</li>
                    <li>🔺 Galvin Ized-Steel - 730</li>
                </ul>
            </div>
        </div>
    </div>
    <script>
        // Handle chat input submission
        const instabox = document.getElementById("instabox");
        const chatInput = document.getElementById("chatInput");
        chatInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                const newMessage = document.createElement("p");
                newMessage.innerHTML = `<strong>Me:</strong> ${chatInput.value}`;
                instabox.appendChild(newMessage);
                chatInput.value = "";
                instabox.scrollTop = instabox.scrollHeight; // Scroll to the latest message
            }
        });
    </script>
</body>