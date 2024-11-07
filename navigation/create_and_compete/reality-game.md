---
layout: base
title: Create and Compete - Reality Room Game
search_exclude: true
permalink: /create_and_compete/reality_game
author: Yash, Nikhil, Rohan, Neil
---



<table class="sub-menu">
    <tr>
        <td>
            <label class="switch">
                <input type="checkbox" id="toggle-switch" onclick="toggleRedirect()">
                <span class="slider round"></span>
            </label>
        </td>
    </tr>
</table>

<div id="main-content">
    <div id="chatPanel">
        <h3>Game</h3>
        <div id="outputDiv"></div>
        <form>
            <button class="plus-button" onclick="triggerFileUpload()">+</button>
            <input type="file" id="file-input">
            <input placeholder="Enter message to send:" type="text" id="messageBox" name="message">
        </form>
    </div>
</div>

<style>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        padding: 5px;
        text-align: left;
    }
    .small {
        font-size: 8px;
    }
    h3 {
        margin-bottom: 20px;
    }
    #main-content {
        display: flex;
        align-content: space-between;
    }
    #userPanel {
        margin-left: auto;
        width: 30%;
    }
    #chatPanel {
        position: relative;
        width: 700px;
        height: 500px;
    }
    #messageBox {
        width: 85%;
        height: 40px;
        padding: 15px 20px;
        font-size: 16px;
        border: 1px solid #ddd;
        outline: none;
        background-color: #f3f3f3;
        border-radius: 30px;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
        color: #333;
    }
    #outputDiv {
        flex-grow: 1;
        overflow-y: auto;
        max-height: calc(100% - 135px);
    }
    form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 10px 0;
    }
    .message-bubble {
        background-color: #218aff;
        padding: 10px;
        border-radius: 10px;
        margin: 5px 0;
        max-width: 80%;
        word-wrap: break-word;
    }
    .cell {
        display: flex;
    }
    .cell-content {
        margin-left: 10px;
    }
    .profile-photo {
        border-radius: 30px;
    }
    .plus-button {
        width: 40px;
        height: 40px;
        color: white;
        border: none;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 24px;
        outline: none;
    }
    input[type="file"] {
        display: none;
    }
</style>

<style>
    @keyframes screenFlash {
        0% {
            background-color: white;
        }
        50% {
            background-color: #8B0000;
        }
        100% {
            background-color: white;
        }
    }

    .flash {
        animation: screenFlash 2.5s ease-out;
        height: 100vh;
        width: 100vw;
    }
</style>

<style>
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #2196F3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 35px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>

<script>
    // chat functionality
    document.getElementById('messageBox').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault() // prevent page refresh
            var inputValue = event.target.value; // get da content of the message
            var messageContent = inputValue;
            const fileInput = document.getElementById('file-input');
            const file = fileInput.files[0];

            const apiUrl = `https://api.api-ninjas.com/v1/profanityfilter?text=${encodeURIComponent(inputValue)}`;

            fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'X-Api-Key': 'uZQcFwYU/4Ttvkv9wmSYpQ==ERhuZfToEn2rmGWJ'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            })
            .then(data => {
                if (data.has_profanity) {
                    console.log('Profanity detected!');
                    console.log('Censored message:', data.censored);

                    messageContent = data.censored;
                } else {
                    console.log('No profanity');
                }

                var paragraph = document.createElement('p');
                paragraph.textContent = messageContent;
                paragraph.classList.add('message-bubble');
                document.getElementById('outputDiv').appendChild(paragraph);
                event.target.value = ''; // clear box

                const messagesDiv = document.getElementById('outputDiv');
                messagesDiv.scrollTop = messagesDiv.scrollHeight;

                const boomSound = new Audio('../images/boom.mp3');
                if (messageContent.toLowerCase() === 'boom') {
                    boomSound.play();
                    document.body.classList.add('flash');
                    setTimeout(() => {
                        document.body.classList.remove('flash');
                    }, 500); // Remove the flash effect after 0.5s
                }
            })
            .catch(error => {
                console.error(error);
            });
        }
    });
</script>

<script>
    async function fetchPosts() {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('postId');
        console.log(postId)
        console.log("test")

        try {
            const response = await fetch(`${pythonURI}/api/post`, fetchOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const posts = await response.json();
            console.log(posts)

        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }
    fetchPosts();

    // file upload functionality
    function triggerFileUpload() {
        document.getElementById('file-input').click();
    }

    function toggleRedirect() {
        const checkbox = document.getElementById('toggle-switch');
        if (checkbox.checked) {
            window.location.href = '{{site.baseurl}}/create_and_compete/realityroom';
        }
    }
</script>
