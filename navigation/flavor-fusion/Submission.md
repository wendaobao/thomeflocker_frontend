---
permalink: /flavor-fusion/submission/
layout: post
title: test submission
description: Flavor Fusion test
---

<div class="form-container">
    <h2>Add Description and Title to a Submission</h2>
    <form id="submissionForm">
        <label for="submissionSelect">Select Submission:</label>
        <select id="submissionSelect" name="submissionSelect" required>
            <option value="">Select a submission</option>
            <!-- Options will be populated dynamically -->
        </select>
        
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>
        
        <label for="description">Description:</label>
        <textarea id="description" name="description" required></textarea>
        
        <button type="submit">Add Details</button>
    </form>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Populate the submission select options dynamically
        const submissions = [
            { id: 1, name: 'Submission 1' },
            { id: 2, name: 'Submission 2' },
            { id: 3, name: 'Submission 3' }
        ];
        
        const submissionSelect = document.getElementById('submissionSelect');
        submissions.forEach(submission => {
            const option = document.createElement('option');
            option.value = submission.id;
            option.textContent = submission.name;
            submissionSelect.appendChild(option);
        });

        // Handle form submission
        document.getElementById('submissionForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const selectedSubmission = submissionSelect.value;
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            
            // Handle the form data (e.g., send it to the server or update the UI)
            console.log(`Submission ID: ${selectedSubmission}`);
            console.log(`Title: ${title}`);
            console.log(`Description: ${description}`);
            
            alert('Details added successfully!');
            this.reset();
        });
    });
</script>