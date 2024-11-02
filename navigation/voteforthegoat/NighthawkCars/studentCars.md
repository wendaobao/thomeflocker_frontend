---
layout: page
title: Student Cars
description: Student Car Information and Chatroom
permalink: /voteforthegoat/nighthawkCars/studentCars/
---


<table>
    <tr>
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
    <title>Student Cars</title>
    <style>
        body {
            background-color: white;
            color: rgb(255, 80, 80);
            font-family: Arial, sans-serif;
        }
        h2, h3 {
            color: rgb(255, 80, 80);
            border-bottom: 2px solid rgb(255, 80, 80);
            font-weight: bold; /* Bold text */
            text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8),  /* White shadow */
                         2px 2px 0 rgba(255, 255, 255, 0.6); /* Lighter shadow */
            border-radius: 10px; /* Rounded effect */
            padding: 10px; /* Space around the text */
        }
        p {
            color: white;   
        }
        button {
            background-color: rgb(255, 80, 80);
            color: white;
            border: none;
            padding: 10px 15px;
            margin: 5px;
            cursor: pointer;
            border-radius: 15px; /* Rounded corners */
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: rgb(220, 60, 60); /* Slightly darker on hover */
        }
        div {
            margin: 20px 0;
        }
        .message-box {
            border: 1px solid rgb(200, 200, 200); /* Light gray border */
            border-radius: 10px; /* Rounded corners */
            padding: 10px; /* Padding inside the box */
            height: 150px; /* Fixed height */
            overflow-y: auto; /* Scrollable */
            margin-top: 10px; /* Space above message box */
        }
    </style>
</head>
<body>

<h3> Top 10 best cars for teens (if you are looking to buy one): </h3>
<p>1. Honda Civic </p> 
<p>2. Subaru BRZ </p> 
<p>3. Toyota GR86 </p> 
<p>4. Honda Accord </p> 
<p>5. Honda CRV </p> 
<p>6. Ford Maverick </p> 
<p>7. Chevrolet Trax </p> 
<p>8. Toyota Prius </p> 
<p>9. Mazda CX-30 </p> 
<p>10. Mazda 3 </p> 

<h3>Helpful tip</h3>
<p> - The cars that are cheap and last the longest are typically $15000 for used cars and $25000 for new cars</p>

<h3>Submit which car you have here!</h3>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dropdown Submission with Name and Comment</title>
    <style>
        .message-box1 {
            border: 1px solid #ddd;
            padding: 10px;
            margin-top: 10px;
            max-width: 400px;
        }
        .message-box1 p {
            margin: 5px 0;
        }
    </style>
</head>
<body>

<h2>Select an Option</h2>
<input type="text" id="nameInput" placeholder="Enter your name">
<br><br>
<select id="optionSelect">
    <option value="Select">Select an option</option>
    <option value="Option 1">Toyota</option>
    <option value="Option 2">Ford</option>
    <option value="Option 3">Chevrolet</option>
    <option value="Option 4">Honda</option>
    <option value="Option 5">Nissan</option>
    <option value="Option 6">Jeep</option>
    <option value="Option 7">Hyundai</option>
    <option value="Option 8">KIA</option>
    <option value="Option 9">RAM</option>
    <option value="Option 10">Subaru</option>
    <option value="Option 11">GMC</option>
    <option value="Option 12">Volkswagen</option>
    <option value="Option 13">BMW</option>
    <option value="Option 14">Mazda</option>
    <option value="Option 15">Mercedes-Benz</option>
    <option value="Option 16">Lexus</option>
    <option value="Option 17">Tesla</option>
    <option value="Option 18">Dodge</option>
    <option value="Option 19">Audi</option>
    <option value="Option 20">Buick</option>
    <option value="Option 21">Acura</option>
    <option value="Option 22">Volvo</option>
    <option value="Option 23">Cadillac</option>
    <option value="Option 24">Chrysler</option>
    <option value="Option 25">Mitsubishi</option>
    <option value="Option 26">Land Rover</option>
    <option value="Option 27">Lincoln</option>
    <option value="Option 28">Porsche</option>
    <option value="Option 29">Infiniti</option>
    <option value="Option 30">Mini Cooper</option>
    <option value="Option 31">Other</option>
</select>
<br><br>
<textarea id="commentInput" placeholder="Enter car make, year, specifics..."></textarea>
<br><br>
<button onclick="submitOption()"><p style="background-color: rgb(255, 80, 80);border: 2px solid #ddd">Submit Option</p></button>

<div class="message-box1" id="messageBox1">
    <p><strong>Selections:</strong></p>
</div>

<script>
function submitOption() {
    // Get the values of the name, selected option, and additional comment
    const name = document.getElementById("nameInput").value;
    const option = document.getElementById("optionSelect").value;
    const comment1 = document.getElementById("commentInput").value;

    // Check if the name and option are not empty
    if (name.trim() !== "" && option.trim() !== "") {
        // Create a new paragraph element for the submission
        const newNameAndOption = document.createElement("p");
        newNameAndOption.textContent = `- ${name}: ${option}`;
        const newSpecifics = document.createElement("p");
        newSpecifics.textContent = `  Specifics: ${comment1}`;

        // Add the new submission to the message box
        document.getElementById("messageBox1").appendChild(newNameAndOption);
        document.getElementById("messageBox1").appendChild(newSpecifics);

        // Clear the input fields
        document.getElementById("nameInput").value = "";
        document.getElementById("optionSelect").value = "Select"; // Reset to select option
        document.getElementById("commentInput").value = "";
    } else {
        alert("Please enter your name and select an option.");
    }
}
</script>

<h2>Discussion</h2>
<textarea placeholder="Enter your thoughts about cars here..." id="comment"></textarea>
<button onclick="addComment()"><p style="background-color: rgb(255, 80, 80);border: 2px solid #ddd">Add Comment</p></button>

<div class="message-box" id="messageBox">
    <p><strong>Messages:</strong></p>
</div>

<script>
function addComment() {
    // Get the value of the textarea
    const comment = document.getElementById("comment").value;

    // Check if the comment is not empty
    if (comment.trim() !== "") {
        // Create a new paragraph element for the comment
        const newComment = document.createElement("p");
        newComment.textContent = `- You: ${comment}`;

        // Add the new comment to the message box
        document.getElementById("messageBox").appendChild(newComment);

        // Clear the textarea
        document.getElementById("comment").value = "";
    }
}
</script>

</body>