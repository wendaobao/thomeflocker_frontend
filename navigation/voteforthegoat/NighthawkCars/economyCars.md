---
layout: page
title: Economy Cars
description: Economy Car Information and Chatroom
permalink: /voteforthegoat/nighthawkCars/economyCars/
---

<script type="module" src="{{site.baseurl}}/navigation/voteforthegoat/NighthawkCars/Functions.js"></script>

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
    <title>Economy Cars</title>
    <style>
        body {
            background-color: white;
            color: rgb(255, 80, 80);
            font-family: Arial, sans-serif;
        }
        h2, h3 {
            color: rgb(255, 80, 80);
            border-bottom: 2px solid rgb(255, 80, 80);
            font-weight: bold;
            text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8),  /* White shadow */
                         2px 2px 0 rgba(255, 255, 255, 0.6); /* Lighter shadow */
            border-radius: 10px;
            padding: 10px;
        }
        p {
            color: rgb(255, 80, 80);
            font-weight: bold;
            text-shadow: 1px 0 rgba(255, 255, 255, 0.8),  /* White shadow */
                         1px 0 rgba(255, 255, 255, 0.6); /* Lighter shadow */
            border-radius: 10px;
            padding: 10px;
        }
        button {
            background-color: rgb(255, 80, 80);
            color: white;
            border: none;
            padding: 10px 15px;
            margin: 5px;
            cursor: pointer;
            border-radius: 15px;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: rgb(220, 60, 60);
        }
        div {
            margin: 20px 0;
        }
        .message-box {
            border: 1px solid rgb(200, 200, 200);
            border-radius: 10px;
            padding: 10px;
            height: 500px;
            overflow-y: auto;
            margin-top: 10px;
        }
        #comment {
            width: 100%;
            height: 80px;
            padding: 10px;
            font-size: 16px;
            border-radius: 8px;
            border: 1px solid #ccc;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
            resize: vertical;
        }
        button {
            margin-top: 10px;
            padding: 8px 16px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            background-color: rgb(255, 80, 80);
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #45a049;
        }
        .message-box {
            margin-top: 20px;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 8px;
            background-color: rgb(0, 0, 0);
        }
    </style>
</head>
<body>

<h3>Examples</h3>
<div>
    <p>Honda Civic</p>
    <img src="https://media.ed.edmunds-media.com/honda/civic/2023/oem/2023_honda_civic_sedan_si_fq_oem_1_1280.jpg" alt="civic" style="width:300px;height:200px;">
    <p>Toyota Corolla</p>
    <img src="https://hips.hearstapps.com/hmg-prod/images/2025-toyota-corolla-fx-102-6674930515eb4.jpg?crop=0.482xw:0.483xh;0.205xw,0.250xh&resize=768:*" alt="toyota corolla" style="width:300px;height:200px;">
    <p>Kia Forte</p>
    <img src="https://file.kelleybluebookimages.com/kbb/base/house/2012/2012-Kia-Forte-FrontSide_KIFT111_640x480.jpg?downsize=382:*"  alt="kia" style="width:300px;height:200px;">
    <p>Chevorlet Trax</p>
    <img src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/suvs/trax/masthead/02-images/2024-trax-mov-masthead.png?imwidth=960" alt="Trax" style="width:450px;height:200px;">
</div>

<h3>Pricing</h3>
<table>
    <tr>
        <td><p></p></td>
        <td><p>Average Price</p></td>
        <td><p>Lowest Price</p></td>
        <td><p>Highest Price</p></td>
    </tr>
    <tr>
        <td><p>Honda Civic</p></td>
        <td><p>$27,795</p></td>
        <td><p>$23,950</p></td>
        <td><p>$30,545</p></td> 
    </tr>
    <tr>
        <td><p>Toyota Corolla</p></td>
        <td><p>$25,500</p></td>
        <td><p>$23,185</p></td>
        <td><p>$27,900</p></td>
    </tr>
    <tr>
        <td><p>Kia Forte</p></td>
        <td><p>$23,500</p></td>
        <td><p>$21,145</p></td>
        <td><p>$26,000</p></td>
    </tr>
    <tr>
        <td><p>Chevorlet Trax</p></td>
        <td><p>$22,800</p></td>
        <td><p>$21,495</p></td>
        <td><p>$24,000</p></td>
    </tr>
</table>

<h3>Voting</h3>
<div>
    <button style="width:175px;"><p style="background-color: rgb(255, 80, 80);border: 2px solid #ddd;">Honda Civic</p></button>
    <button style="width:175px"><p style="background-color: rgb(255, 80, 80);border: 2px solid #ddd">Toyota Corolla</p></button>
    <button style="width:175px"><p style="background-color: rgb(255, 80, 80);border: 2px solid #ddd">Kia Forte</p></button>
    <button style="width:175px"><p style="background-color: rgb(255, 80, 80);border: 2px solid #ddd">Chevorlet Trax</p></button>
</div>

<h2>Discussion</h2>
<textarea placeholder="Enter your thoughts or comments here..." id="comment"></textarea>
<button onclick="addComment(22)"><p style="background-color: rgb(255, 80, 80);border: 2px solid #ddd">Add Comment</p></button>

<div class="message-box" id="messageBox">
    <p><strong>Messages:</strong></p>
</div>
</body>
</html>
