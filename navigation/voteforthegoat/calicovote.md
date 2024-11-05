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
.container {
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
.comment-section {
    display: none; 
    max-width: 600px; 
    margin: 20px auto; 
    padding: 10px; 
    border: 1px solid #ddd; 
    border-radius: 5px;
}
.comment-button {
    padding: 8px; 
    margin-top: 5px;
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

<div class="container">
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

<div class="container" style="justify-content:center;">
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

<div class="comment-section" id="commentSection">
    <input type="text" id="usernameInput" placeholder="Enter your username" style="width: 80%; padding: 8px; margin-bottom: 5px;">
    <input type="text" id="commentInput" placeholder="Enter your comment" style="width: 80%; padding: 8px;">
    <button onclick="addComment();" class="comment-button">Submit</button>
    <div id="commentList" style="margin-top: 10px;"></div>
    <button onclick="clearComments();" class="comment-button">Clear All Comments</button>
</div>
<script>
  