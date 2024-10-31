---
layout: base
title: Satire
permalink: /shared_interests/satire/
menu: nav/shared_interests.html
---

DNHS Satire Home Page

<style>
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Background and text color */
  html {
    font-family: Arial, sans-serif;
    background-color: #1e1e1e; /* Dark background */
    color: #e0e0e0; /* Light text */
  }

  /* Container to center everything */
  .container {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }

  /* Header/Login Bar */
  .login-bar {
    background-color: #000000;
    text-align: right;
    padding: 10px;
  }

  .login-bar a {
    color: #00aaff;
    font-weight: bold;
    text-decoration: none;
  }

  /* Banner */
  .banner {
    width: 100%;
    background-color: #3b5998; /* Deep blue */
    padding: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 15px;
  }

  /* Intro Blurb */
  .intro-blurb {
    background-color: #2b2b2b; /* Dark grey */
    padding: 15px;
    text-align: center;
    font-size: 18px;
    color: #cccccc;
  }

  /* Main layout - Sidebar and Feed */
  .main-layout {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 15px;
    margin-top: 15px;
  }

  /* Left Sidebar */
  .left-sidebar {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 15px;
    background-color: #333333;
    border-radius: 8px;
  }

  .add-post {
    background-color: #ff5722;
    color: white;
    font-size: 24px;
    padding: 10px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }

  .search-bar input {
    padding: 10px;
    width: 100%;
    background-color: #444444;
    border: 1px solid #555;
    border-radius: 5px;
    color: #ffffff;
  }

  /* Center Feed */
  .feed {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .post {
    background-color: #333333;
    padding: 20px;
    border-radius: 8px;
    font-size: 18px;
    color: #e0e0e0;
  }

  .post-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 10px;
  }

  .post-actions button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #ffffff;
  }

  .like {
    background-color: #ff4081;
  }

  .comment {
    background-color: #1e88e5;
  }

  .share {
    background-color: #7e57c2;
  }

  /* Right Sidebar */
  .right-sidebar {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    background-color: #444444;
    border-radius: 8px;
  }

  .profile {
    background-color: #d81b60;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    color: #ffffff;
  }

  .profile-pic {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #e91e63;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 10px;
  }

  .activity, .followers-following {
    width: 100%;
  }

  .activity button, .followers-following button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #333333;
    color: #ffffff;
    margin-bottom: 10px;
  }
</style>

<!-- HTML Structure -->
<div class="container">
  <!-- Login Bar -->
  <div class="login-bar">
    <a href="#">Login</a>
  </div>

  <!-- Banner Section -->
  <div class="banner">
    Banner
  </div>

  <!-- Intro Blurb -->
  <div class="intro-blurb">
    <h1>DNHS Social Media Home Page</h1>
    <p>Login and explore our social media hub for everything DNHS</p>
  </div>

  <!-- Main Layout with Sidebar and Feed -->
  <div class="main-layout">
    
    <!-- Left Sidebar (Add Post and Search Bar) -->
    <div class="left-sidebar">
      <button class="add-post">+</button>
      <p>Add new post</p>
      <div class="search-bar">
        <input type="text" placeholder="Search...">
      </div>
    </div>

    <!-- Center Feed (Posts) -->
    <div class="feed">
      <div class="post">This is a sample post content. Users can post here.</div>
      <div class="post-actions">
        <button class="like">Like</button>
        <button class="comment">Comment</button>
        <button class="share">Share</button>
      </div>
    </div>

    <!-- Right Sidebar (Profile and Activity) -->
    <div class="right-sidebar">
      <div class="profile">
        <div class="profile-pic">Profile</div>
        <p>Account Information + Satire Score + Age (click profile)</p>
      </div>
      <div class="activity">
        <button>Activity</button>
      </div>
      <div class="followers-following">
        <button>Followers/Following</button>
      </div>
    </div>

  </div>
</div>
