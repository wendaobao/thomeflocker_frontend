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
<p>   </p>
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
<p>   </p>
<p> - The cars that are cheap and last the longest are typically $15000 for used cars and $25000 for new cars</p>
<p> - Get the car with the best mileage and that is from a reliable car company and doesn't require frequent maintainence </p>
<p> - Make sure the car has good ratings, and research about the top cars that fit your needs </p>
<p> - Note about above comment: Use reliable sites to do your research (Edmunds, Car and Driver, KBB, TrueCar, etc) </p>
<p> - Once you get your car, drive safely and have fun! </p>

<h2>Submit which car you have here!</h2>

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

<h3>Select an Option</h3>
<p>   </p>
<input type="text" id="nameInput" placeholder="Enter your name">
<br><br>
<select id="optionSelect">
    <option value="">Select an option</option>
    <option value="Toyota">Toyota</option>
    <option value="Ford">Ford</option>
    <option value="Chevrolet">Chevrolet</option>
    <option value="Honda">Honda</option>
    <option value="Nissan">Nissan</option>
    <option value="Jeep">Jeep</option>
    <option value="Hyundai">Hyundai</option>
    <option value="KIA">KIA</option>
    <option value="RAM">RAM</option>
    <option value="Subaru">Subaru</option>
    <option value="GMC">GMC</option>
    <option value="Volkswagen">Volkswagen</option>
    <option value="BMW">BMW</option>
    <option value="Mazda">Mazda</option>
    <option value="Mercedes-Benz">Mercedes-Benz</option>
    <option value="Lexus">Lexus</option>
    <option value="Tesla">Tesla</option>
    <option value="Dodge">Dodge</option>
    <option value="Audi">Audi</option>
    <option value="Buick">Buick</option>
    <option value="Acura">Acura</option>
    <option value="Volvo">Volvo</option>
    <option value="Cadillac">Cadillac</option>
    <option value="Chrysler">Chrysler</option>
    <option value="Mitsubishi">Mitsubishi</option>
    <option value="Land Rover">Land Rover</option>
    <option value="Lincoln">Lincoln</option>
    <option value="Porsche">Porsche</option>
    <option value="Infiniti">Infiniti</option>
    <option value="Mini Cooper">Mini Cooper</option>
    <option value="Other">Other</option>
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

<h3>Discussion</h3>
<p>   </p>
<textarea placeholder="Enter your thoughts about cars here..." id="comment"></textarea>
<br><br>
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