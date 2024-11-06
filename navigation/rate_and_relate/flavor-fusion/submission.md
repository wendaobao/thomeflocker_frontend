---
permalink: /flavor-fusion/submission/
layout: post
title: test submission
description: Flavor Fusion test
---

<div class="form-container">
    <h2>Add Description and Title to a Submission</h2>
    <h3 id="beingCreated">Combo being created: </h3>
    <form id="submissionForm">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>
        <label for="description">Description:</label>
        <textarea id="description" name="description" required></textarea>
        <button type="submit" onclick="submitCombo()">Add Details</button>
    </form>
</div>

<script>
    function submitCombo() {
        let comboData;
        let exampleData = {
            ingredients: [],
            user: "",
            title: "",
            description: "",
            rating: 0,    
        }
    }
</script>
