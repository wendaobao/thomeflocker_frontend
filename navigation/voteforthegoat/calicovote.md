---
permalink: /voteforthegoat/calicovote/
menu: nav/vote_for_the_goat.html
layout: post
title: Calico Vote
description: Vote for your favorite critters here!
Authors: Maryam, Nora, Kushi, Joanna
---


<style>
p, h2, h3, body {
 font-family: "Times New Roman", Times, serif;;
}
.header-text {
    font-size: 40px;
    text-align: center;
}
.container2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: center; Push content to opposite sides */
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    gap: 15px;
}
.critter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; /* Push content to opposite sides */
    width: 200px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 20px;
    cursor: pointer;
}
.critter-container.selected {
    border-color: #007BFF;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5); /* Glow effect */
}
.image-container {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center; 
    gap: 10px;    
    margin: 0 auto;
}
.image-container img {
    width: auto;
    height: auto;
    max-height: 200px;
    cursor: pointer;
}
.dropdown-title {
    font-size: 20px;
}
.dropdown {
    font-size: 15px;
}
.button-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.button-text {
    font-size: 30px;
    text-align: center;
}
.hidden-example {
    display:none;
    font-size: 20px;
}
.message-box {
    display:none; 
    text-align:center; 
    margin-top:20px; 
    font-size:25px; 
    font-weight:bold; 
    color:#333;
}
.image-box {
    display:none; 
    align-items:center; 
    margin-top:15px;
    justify-content: center;
}
/* Style summary */
summary {
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    list-style: none;
    display: inline-block;
    transition: text-shadow 0.3s ease;
}
summary:hover {
    text-shadow: 0 0 8px #F5AAF5, 0 0 12px #F5AAF5;
}
/* Style for dropdown details */
details[open] p {
    margin: 0;
    padding: 8px;
    background-color: #CC99CC;
    border-radius: 10px;
    border: 1px solid #F5AAF5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    margin-bottom: 10px;
}
p {
    margin: 0;
}
    summary::before {
    content: '✿'; /* Unicode for vertical ellipsis */
}
.container {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    box-sizing: border-box;
}
.form-container {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    width: 100%;
    background-color: #2c3e50;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #ecf0f1;
}
.form-container label {
    margin-bottom: 5px;
}
.form-container input, .form-container textarea, .form-container select {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    width: 100%;
}
.form-container button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #34495e;
    color: #ecf0f1;
    cursor: pointer;
}
</style>

<div>
<img src="{{site.baseurl}}/images/calicocritters/voteheading.png" alt="Calico Critters Voting header">
</div>

<h2>Moderator Rules for Calico Critters</h2>
  <details>
    <summary> Rules are put in place to make this page a safe environment!</summary>
        <p>1. No cussing in the chats.</p>
        <p>2. Stay on topic, Calico Critters only!</p>
        <p>3. You have to be part of the DNHS Calico Critters club to join</p>
        <p>4. You must have valid reasoning for your votes</p>
        <p>5. Do not be toxic, negative, or attack others for their opinions.</p>
  </details>

<a href="{{site.baseurl}}/voteforthegoat/calicoworkflow">See our workflow here!</a>



<p class="header-text">Click on a critter below to vote!</p>

<div class="container2">
<div class="critter-container" onclick="selectCritter(this)" data-critter="Mizuki" data-house="Adventure Play">
    <div class="image-container">
        <img src="{{site.baseurl}}/images/calicocritters/mizuki.png">
    </div>
    <h3>Mizuki</h3>
    <div class="dropdown-title">
        <details>
            <summary>Species</summary>
                <div class="dropdown">Rabbit</div>
        </details>
        <details>
            <summary>Description</summary>
                <div class="dropdown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit.</div>
        </details>
        <details>
            <summary>Collection</summary>
                <div class="dropdown">Baby Fairy Tale</div>
        </details>
    </div>
</div>

<div class="critter-container" onclick="selectCritter(this)" data-critter="Chiyo" data-house="Sylvanian Family Restraunt">
    <div class="image-container">
        <img src="{{site.baseurl}}/images/calicocritters/chiyo.png">
    </div>
    <h3>Chiyo</h3>
    <div class="dropdown-title">
        <details>
            <summary>Species</summary>
                <div class="dropdown">Hazelnut Chipmunk</div>
        </details>
        <details>
            <summary>Description</summary>
                <div class="dropdown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit.</div>
        </details>
        <details>
            <summary>Collection</summary>
                <div class="dropdown">School Baby</div>
        </details>
    </div>
</div>

<div class="critter-container" onclick="selectCritter(this)" data-critter="Emi" data-house="Magical Mermaid Castle">
    <div class="image-container">
        <img src="{{site.baseurl}}/images/calicocritters/emi.png">
    </div>
    <h3>Emi</h3>
    <div class="dropdown-title">
        <details>
            <summary>Species</summary>
                <div class="dropdown">Husky</div>
        </details>
        <details>
            <summary>Description</summary>
                <div class="dropdown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit.</div>
        </details>
        <details>
            <summary>Collection</summary>
                <div class="dropdown"> Sylvanian Families Flower Princess</div>
        </details>
    </div>
</div>

<div class="critter-container" onclick="selectCritter(this)" data-critter="Nory" data-house="Woody School">
    <div class="image-container">
        <img src="{{site.baseurl}}/images/calicocritters/nory.png">
    </div>
    <h3>Nory</h3>
    <div class="dropdown-title">
        <details>
            <summary>Species</summary>
                <div class="dropdown">Chocolate Rabbit</div>
        </details>
        <details>
            <summary>Description</summary>
                <div class="dropdown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit.</div>
        </details>
        <details>
            <summary>Collection</summary>
                <div class="dropdown">Nursery Friend Walk Along Duo</div>
        </details>
    </div>
</div>

<div class="critter-container" onclick="selectCritter(this)" data-critter="Rin" data-house="Spooky Suprise Haunted">
    <div class="image-container">
        <img src="{{site.baseurl}}/images/calicocritters/rin.png">
    </div>
    <h3>Rin</h3>
    <div class="dropdown-title">
        <details>
            <summary>Species</summary>
                <div class="dropdown">Persian Cat</div>
        </details>
        <details>
            <summary>Description</summary>
                <div class="dropdown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit.</div>
        </details>
        <details>
            <summary>Collection</summary>
                <div class="dropdown">Sylvanian Families Baby Cat</div>
        </details>
    </div>
</div>

<div class="critter-container" onclick="selectCritter(this)" data-critter="Junko" data-house="Brick Oven Bakery">
    <div class="image-container">
        <img src="{{site.baseurl}}/images/calicocritters/junko.png">
    </div>
    <h3>Junko</h3>
    <div class="dropdown-title">
        <details>
            <summary>Species</summary>
                <div class="dropdown">Caramel Dog</div>
        </details>
        <details>
            <summary>Description</summary>
                <div class="dropdown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit.</div>
        </details>
        <details>
            <summary>Collection</summary>
                <div class="dropdown">Forest Kitchen Baby</div>
        </details>
    </div>
</div>
</div>
<br>

<div class="container2" style="justify-content:center;">
    <div class="button-container">
        <button id="confirmButton" class="button-text" onclick="confirmChoice();">Confirm</button>
    </div>
</div>

<!-- if you want Long Boi button
<div class="button-container" style="justify-content:center;">
    <button id="confirmButton" class="button-text" onclick="confirmChoice();">Confirm</button>
</div>
-->


<div class="message-box" id="messageBox" style="color: #ffffff;"></div>
<div id="imageBox" class="image-box">
    <img id="houseImage" src="" alt="House Image" style="max-width:300px; border-radius:15px;">
</div>


<div class="container">
    <div class="form-container">
        <h2>Select Group and Channel</h2>
        <form id="selectionForm">
            <label for="group_id">Group:</label>
            <select id="group_id" name="group_id" required>
                <option value="">Select a group</option>
            </select>
            <label for="channel_id">Channel:</label>
            <select id="channel_id" name="channel_id" required>
                <option value="">Select a channel</option>
            </select>
            <button type="submit">Select</button>
        </form>
    </div>
</div>

<div class="container">
    <div class="form-container">
        <h2>Add New Post</h2>
        <form id="postForm">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
            <label for="comment">Comment:</label>
            <textarea id="comment" name="comment" required></textarea>
            <button type="submit">Add Post</button>
        </form>
    </div>
</div>

<div class="container">
    <div id="data" class="data">
        <div class="left-side">
            <p id="count"></p>
        </div>
        <div class="details" id="details">
        </div>
    </div>
</div>

<script>
let selectedCritter = null;
let selectedHouse = null;

function selectCritter(element) {
    const critters = document.querySelectorAll('.critter-container');
    critters.forEach(critter => critter.classList.remove('selected')); // Remove selection from others

    element.classList.add('selected'); // Highlight the selected critter
    selectedCritter = element.getAttribute('data-critter'); // Store selected critter name
    selectedHouse = element.getAttribute('data-house'); // Store corresponding house
}

function confirmChoice() {
    const messageBox = document.getElementById('messageBox');
    const imageBox = document.getElementById('imageBox');
    const houseImage = document.getElementById('houseImage'); // Get image element

    if (!selectedCritter || !selectedHouse) {
        alert("Please select a critter before confirming!"); // Alert if nothing is selected
        return;
    }

    // Set the message
    const message = `Congrats! You picked ${selectedCritter} and are in the ${selectedHouse} House!<br>Connect with others in the ${selectedHouse} House.`;
    messageBox.innerHTML = message; // Display the message
    messageBox.style.display = "block"; // Make the message visible

    // Use template literals to construct the image source
    const baseURL = "{{site.baseurl}}/images/calicocritters/"; // Base URL for images
    const houseImageFile = `${selectedCritter.toLowerCase()}house.png`; // Constructing the image file name
    houseImage.src = `${baseURL}${houseImageFile}`; // Set the image source

    imageBox.style.display = "block"; // Show the image box
}


function selectCritter(element) {
    const critters = document.querySelectorAll('.critter-container');
    critters.forEach(critter => critter.classList.remove('selected')); // Remove selection from others

    element.classList.add('selected'); // Highlight the selected critter
    selectedCritter = element.getAttribute('data-critter'); // Store selected critter name
    selectedHouse = element.getAttribute('data-house'); // Store corresponding house

    // Remove the previous "Enter House" button if it exists
    const existingButtonContainer = document.querySelector('#houseButtonContainer');
    if (existingButtonContainer) {
        existingButtonContainer.remove();
    }
}

function confirmChoice() {
    const messageBox = document.getElementById('messageBox');
    const imageBox = document.getElementById('imageBox');
    const houseImage = document.getElementById('houseImage'); // Get image element

    if (!selectedCritter || !selectedHouse) {
        alert("Please select a critter before confirming!"); // Alert if nothing is selected
        return;
    }

    // Set the message
    const message = `Congrats! You picked ${selectedCritter} and are in the ${selectedHouse} House!<br>Connect with others in the ${selectedHouse} House.`;
    messageBox.innerHTML = message; // Display the message
    messageBox.style.display = "block"; // Make the message visible

    // Use template literals to construct the image source
    const baseURL = "{{site.baseurl}}/images/calicocritters/"; // Base URL for images
    const houseImageFile = `${selectedCritter.toLowerCase()}house.png`; // Constructing the image file name
    houseImage.src = `${baseURL}${houseImageFile}`; // Set the image source

    imageBox.style.display = "block"; // Show the image box

    // Optional: Display the comment section after confirmation
    document.getElementById("commentSection").style.display = "block";

    // Remove any existing "Enter House" button before creating a new one
    const existingButtonContainer = document.querySelector('#houseButtonContainer');
    if (existingButtonContainer) {
        existingButtonContainer.remove();
    }

    // Add the dynamic button for entering the house
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.id = 'houseButtonContainer';
    const enterHouseButton = document.createElement('button');
    enterHouseButton.classList.add('button-text');
    enterHouseButton.textContent = `Enter ${selectedHouse} House`;
    enterHouseButton.onclick = function() {
        window.location.href = '{{site.baseurl}}/voteforthegoat/calicovote/house'; 
    };

    buttonContainer.appendChild(enterHouseButton);
    document.getElementById('imageBox').appendChild(buttonContainer);
}

</script>

<script type="module">
    // Import server URI and standard fetch options
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    // Fetch groups for dropdown selection
    async function fetchGroups() {
        try {
            const response = await fetch(`${pythonURI}/api/groups/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ section_name: "Home Page" }) // Adjust the section name as needed
            });
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const groups = await response.json();
            const groupSelect = document.getElementById('group_id');
            groups.forEach(group => {
                const option = document.createElement('option');
                option.value = group.name; // Use group name for payload
                option.textContent = group.name;
                groupSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }

    // Fetch channels based on selected group
    async function fetchChannels(groupName) {
        try {
            const response = await fetch(`${pythonURI}/api/channels/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ group_name: groupName })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch channels: ' + response.statusText);
            }
            const channels = await response.json();
            const channelSelect = document.getElementById('channel_id');
            channelSelect.innerHTML = '<option value="">Select a channel</option>'; // Reset channels
            channels.forEach(channel => {
                const option = document.createElement('option');
                option.value = channel.id;
                option.textContent = channel.name;
                channelSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching channels:', error);
        }
    }

    // Handle group selection change
    document.getElementById('group_id').addEventListener('change', function() {
        const groupName = this.value;
        if (groupName) {
            fetchChannels(groupName);
        } else {
            document.getElementById('channel_id').innerHTML = '<option value="">Select a channel</option>'; // Reset channels
        }
    });

    // Handle form submission for selection
    document.getElementById('selectionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const groupId = document.getElementById('group_id').value;
        const channelId = document.getElementById('channel_id').value;
        if (groupId && channelId) {
            fetchData(channelId);
        } else {
            alert('Please select both group and channel.');
        }
    });

    // Handle form submission for adding a post
    document.getElementById('postForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        // Extract data from form
        const title = document.getElementById('title').value;
        const comment = document.getElementById('comment').value;
        const channelId = document.getElementById('channel_id').value;

        // Create API payload
        const postData = {
            title: title,
            comment: comment,
            channel_id: channelId
        };

        // Trap errors
        try {
            // Send POST request to backend, purpose is to write to database
            const response = await fetch(`${pythonURI}/api/post`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error('Failed to add post: ' + response.statusText);
            }

            // Successful post
            const result = await response.json();
            alert('Post added successfully!');
            document.getElementById('postForm').reset();
            fetchData(channelId);
        } catch (error) {
            // Present alert on error from backend
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
    });

    // Fetch posts based on selected channel
    async function fetchData(channelId) {
        try {
            const response = await fetch(`${pythonURI}/api/posts/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ channel_id: channelId })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch posts: ' + response.statusText);
            }

            // Parse the JSON data
            const postData = await response.json();

            // Extract posts count
            const postCount = postData.length || 0;

            // Update the HTML elements with the data
            document.getElementById('count').innerHTML = `<h2>Count ${postCount}</h2>`;

            // Get the details div
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = ''; // Clear previous posts

            // Iterate over the postData and create HTML elements for each item
            postData.forEach(postItem => {
                const postElement = document.createElement('div');
                postElement.className = 'post-item';
                postElement.innerHTML = `
                    <h3>${postItem.title}</h3>
                    <p><strong>Channel:</strong> ${postItem.channel_name}</p>
                    <p><strong>User:</strong> ${postItem.user_name}</p>
                    <p>${postItem.comment}</p>
                `;
                detailsDiv.appendChild(postElement);
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Fetch groups when the page loads
    fetchGroups();
</script>