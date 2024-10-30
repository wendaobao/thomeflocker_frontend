---
permalink: /calicoclubhouse/
layout: post
title: Calico Clubhouse
description: Welcome to the DNHS Calico Critters Club!
---

<style>
.header-text {
    font-size: 40px;
    font-family: "Times New Roman", Times, serif;
    text-align: center;
}
.button-text {
    background-color: #d14dc0;
    cursor: pointer;
}
.button-image {
    border: none;
    width: 50px;
    height: 50px;
    cursor: pointer;
}
.container {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Push content to opposite sides */
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}
.button-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.header-image-container {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    gap: 10px;    
}
.header-image-container img {
    width: 100%;
    height: auto;
    object-fit: contain;
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
    max-height: 250px;
    cursor: pointer;
}

/* post styles */
.pfp {
    display: flex;
    align-items: center;
    margin-bottom: 10px; 
}
.pfp img {
    width: auto;
    max-height: 50px;
    max-width: 50px;
    margin-right: 10px;
    object-fit: contain;
}
.username {
    font-size: 24px;
}
.post {
    align-items: center;
    font-size: 20px;
    /*
    background-color: #2b2d42;
    border: 1px solid #ddd;
    max-width: 600px;
    padding: 15px;
    margin: 20px auto;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    */
    
}
hr {
    background-color: #ddd;
    height: 1px;
    border: none; 
    margin: 30px 0; 
    background: linear-gradient(to right, transparent, #5f0f40, transparent);
}
.post-footer {
    display: flex;
    justify-content: flex-end;
    font-size: 18px;
    padding: 10px;
}
.heart {
    margin-left: auto;
    font-size: 22px;
}
</style>

<div>
<img src="{{site.baseurl}}/images/calicocritters/heading.png" alt="Calico Critters Clubhouse header">
</div>

<div class="container">
<div class="button-container" class="header-text">
    <a href="https://www.example.com" target="_blank">
        <button class="button-text">Members</button>
    </a>
    <a href="https://www.example.com/" target="_blank">
        <button class="button-text">Collections available</button>
    </a>
</div>

<div class="header-image-container">
    <img src="{{site.baseurl}}/images/calicocritters/mizuki.png" alt="Sample Critter">
    <a href="https://www.example.com" target="_blank">
        <button class="button-text">Re-generate!</button>
    </a>
</div>
</div>
<br>
<div>
<p class="header-text">Click to enter! ↓</p>

<div class="image-container">
    <a href="https://www.example.com" target="_blank">
        <img src="{{site.baseurl}}/images/calicocritters/adtreehouse.png" alt="Adventure Tree House">
    </a>
    <a href="https://www.example.com" target="_blank">
        <img src="{{site.baseurl}}/images/calicocritters/spookhouse.png" alt="Spooky Surprise House">
    </a>
    <a href="https://www.example.com" target="_blank">
        <img src="{{site.baseurl}}/images/calicocritters/sylhouse.png" alt="Sylvanian Families Restaurant House">
    </a>
</div>
<br>
<br>
<!--posts-->
<h3 style="text-align: center;">Timeline</h3>
<div class="post" style="align-items: center; background-color: #E48A9C; border: 1px solid #ddd; max-width: 600px; padding: 15px; margin: 20px auto; border-radius: 5px;">
    <div class="pfp">
        <img src="{{site.baseurl}}/images/logo.png">
        <span class="username">CalicoCritterLover236</span>
    </div>
    <hr>
    <div>
        <p>I love love Calico Critters! I have 236 of them!</p>
    </div>
    <hr>
    <div class="post-footer">
    <a href="javascript:void(0);" onclick="likeFunction(this)">
        <span class="like">🤍</span>
    </a>
</div>

<script>
function likeFunction(element){
    const heart = element.querySelector('.like');
        heart.textContent = heart.textContent === '🤍' ? '❤️' : '🤍';
}
</script>