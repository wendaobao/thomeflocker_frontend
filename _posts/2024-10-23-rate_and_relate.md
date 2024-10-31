---
toc: true
layout: post
title: Update the Nest
description:
permalink: /updatethenest/ 
---
<style>

.textContainer {
    transform: translateY(30px)
}

.textInfo {
    transform: translateY(30px)
}

.imageContainer {
     height: auto;
    display: inline;
    float: left;
    width: 50%;
     transform: translateX(20px) translateY(20px);
}

.feed {
     border: 10px solid black;
        border-radius: 50px;
        background-color: pink;
        text-align: center;
        padding: 10px 0 3px 0;
        height: 1000px;
        font-family: 'Playfair Display', serif;
        float: left;

}

.header {
        border: 10px solid black;
        border-radius: 50px;
        background-color: pink;
        text-align: center;
        padding: 5px 0 3px 0;
        height: 200px;
        font-family: 'Playfair Display', serif;
    }

  .headerImage > img {
    height: auto;
    display: inline;
    width: 15%;
    float: left;
    transform: translateY(-80px);
  }
.styled-button {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 12px;
            transition: background-color 0.3s, transform 0.2s;
        }

        .styled-button:hover {
            background-color: #45a049;
            transform: scale(1.05);
        }

        .styled-button:active {
            background-color: #3e8e41;
            transform: scale(0.95);
        }
</style>

<div style="text-align: center;" class="header">
    <h1> Update the Nest </h1>
    <div class="headerImage">
        <img src="{{site.baseurl}}/images/about/CSP_LOGO-removebg-preview.png" style="display: block; margin: 0 auto;" alt="Logo">
    </div>
    <div class="headerText">
        <button class="styled-button"><a href="">Leaderboard</a></button>
        <button class="styled-button"><a href="">Upload Media</a></button>
        <button class="styled-button"><a href="">Profile</a></button>
        <button class="styled-button"><a href="">Settings</a></button>
    </div>
</div>

<div class="feed">
    <div class="post">
             <h2> Feed </h2>
        <div class="imageContainer">
            <img src="{{site.baseurl}}/images/tempPhoto.jpg">
        </div>
        <div class="textContainer">
            <h3>Caption</h3><br>
            <div class="textInfo">
                <p>Posted by: Abby Manalo</p><p>Date Posted: 10/25/24</p>
            </div>
        </div>
    </div>
</div>
