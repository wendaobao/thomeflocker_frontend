---
permalink: /calicovote/
layout: post
title: Calico Vote
description: Vote for your favorite critters here!
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
.hiddenExample {
    display:none;
    font-size: 20px;
}
</style>

<div>
<img src="{{site.baseurl}}/images/calicocritters/voteheading.png" alt="Calico Critters Voting header">

<p class="header-text">Click on a critter below to vote!</p>
</div>

<div class="container">
<div class="critter-container" onclick="selectCritter(this)">
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

<div class="critter-container" onclick="selectCritter(this)">
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

<div class="critter-container" onclick="selectCritter(this)">
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

<div class="critter-container" onclick="selectCritter(this)">
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

<div class="critter-container" onclick="selectCritter(this)">
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

<div class="critter-container" onclick="selectCritter(this)">
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

<div class="hiddenExample" id="confirmText">Lorem ipsum dolor sit amet</div>

<script>
function selectCritter(element) {
    const critters = document.querySelectorAll('.critter-container');
    critters.forEach(critter => {
        critter.classList.remove('selected');
    });

    element.classList.add('selected');
}

function confirmChoice(){
    document.getElementById("confirmText").style.display="block"
}
</script>
