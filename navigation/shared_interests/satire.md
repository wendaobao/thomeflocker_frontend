---
layout: base
title: Satire
permalink: /shared_interests/satire/
---


<style>
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f2f5;
  }

  /* Banner */
  .banner {
    width: 100%;
    background-color: #cde0ff;
    padding: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  /* Intro Blurb */
  .intro-blurb {
    width: 100%;
    background-color: #ffffff;
    padding: 15px;
    text-align: center;
    font-size: 18px;
    margin: 10px 0;
  }

  /* Main Container */
  .main-container {
    display: flex;
    width: 90%;
    gap: 15px;
    margin-top: 15px;
  }

  /* Left Sidebar */
  .left-sidebar {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .add-post {
    background-color: #3b5998;
    color: white;
    font-size: 20px;
    padding: 10px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }

  .search-bar input {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  /* Feed Section */
  .feed {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .post {
    background-color: #e0f0ff;
    padding: 20px;
    border-radius: 5px;
    font-size: 18px;
    text-align: center;
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
  }

  .like {
    background-color: #f783ac;
    color: white;
  }

  .comment {
    background-color: #3b5998;
    color: white;
  }

  .share {
    background-color: #333;
    color: white;
  }

  /* Right Sidebar */
  .right-sidebar {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  .profile {
    background-color: #f9cedf;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }

  .profile-pic {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #e0a3b0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: white;
    margin-bottom: 10px;
  }

  .activity button, .followers-following button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f9cedf;
    color: black;
  }
</style>

<!-- HTML Structure -->
<div class="banner">Banner</div>

<div class="intro-blurb">Intro Blurb</div>

<div class="main-container">

  <!-- Left Sidebar (Add Post and Search Bar) -->
  <div class="left-sidebar">
    <button class="add-post">+</button> Add new post
    <div class="search-bar">
      <input type="text" placeholder="Search...">
    </div>
  </div>

  <!-- Center Feed (Posts) -->
  <div class="feed">
    <div class="post">Post</div>
    <div class="post-actions">
      <button class="like">Like</button>
      <button class="comment">Comment</button>
      <button class="share">Share</button>
    </div>
  </div>

  <!-- Right Sidebar (Profile Info) -->
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
