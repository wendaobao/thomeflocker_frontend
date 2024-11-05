import { pythonURI, fetchOptions } from '../../assets/js/api/config.js';

const argumentContainer = document.getElementById('argument-container');
let currentDebate = 'Milk or Cereal First?';
let selectedChannelId = 17;  // Channel ID for the "Milk or Cereal First?" debate

// Fetch all arguments for the specific channel
async function fetchArguments() {
    try {
        const response = await fetch(`${pythonURI}/api/posts/filter`, {
            ...fetchOptions,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ channel_id: selectedChannelId })
        });

        if (!response.ok) throw new Error('Failed to fetch arguments: ' + response.statusText);

        const argumentsData = await response.json();
        argumentContainer.innerHTML = ""; // Clear existing arguments

        argumentsData.forEach(arg => {
            const card = document.createElement("div");
            card.classList.add("argument-card");

            const text = document.createElement("p");
            text.innerHTML = `<strong>${arg.user_name}:</strong> ${arg.comment}`; // Adjusted to match backend response structure

            card.appendChild(text);
            argumentContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching arguments:', error);
    }
}

// Submit a new argument to the specific channel
async function submitArgument() {
    const argumentText = document.getElementById('argument-input').value.trim();
    if (!argumentText) {
        alert('Please enter an argument.');
        return;
    }

    const argumentData = {
        title: currentDebate,  // Matches the debate topic
        comment: argumentText, // Updated to match the "comment" field expected by the backend
        channel_id: selectedChannelId,  // Specify the channel ID for this debate
        user_name: localStorage.getItem('username') || 'Guest' // Matching backend structure
    };

    try {
        const response = await fetch(`${pythonURI}/api/post`, {
            ...fetchOptions,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(argumentData)
        });

        if (!response.ok) throw new Error('Failed to submit argument: ' + response.statusText);

        document.getElementById('argument-input').value = ''; // Clear input field
        fetchArguments(); // Refresh arguments list
    } catch (error) {
        console.error('Error submitting argument:', error);
        alert('Error submitting argument: ' + error.message);
    }
}

// Event Listeners
document.getElementById('submit-argument').addEventListener('click', submitArgument);
document.querySelectorAll('.debate-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentDebate = button.getAttribute('data-debate');
        selectedChannelId = parseInt(button.getAttribute('data-channel-id')); // Update channel ID based on button data
        document.getElementById('current-debate').textContent = `Current Debate: ${currentDebate}`;
        fetchArguments();
    });
});

// Initial Fetch for Arguments
fetchArguments();
