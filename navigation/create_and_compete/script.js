// Prompts array for random selection and tracking used prompts
const prompts = [
    "Pitch an eco-friendly invention",
    "Create a storyline about space exploration",
    "Describe an app that solves a common problem",
    "Imagine a business that helps communities",
    "Invent a product that would simplify daily chores"
];
let usedPrompts = [];

// Leaderboard data and functions
const leaderboard = {};
function updateLeaderboard(user) {
    leaderboard[user] = (leaderboard[user] || 0) + 1;
    renderLeaderboard();
}

// Function to render leaderboard
function renderLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard');
    leaderboardList.innerHTML = '';
    const sortedUsers = Object.keys(leaderboard).sort((a, b) => leaderboard[b] - leaderboard[a]);
    sortedUsers.slice(0, 5).forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user}: ${leaderboard[user]} contributions`;
        leaderboardList.appendChild(li);
    });
}

// Generate a new prompt
document.getElementById('generate-prompt').onclick = () => {
    if (prompts.length === usedPrompts.length) usedPrompts = [];
    let prompt;
    do {
        prompt = prompts[Math.floor(Math.random() * prompts.length)];
    } while (usedPrompts.includes(prompt));
    usedPrompts.push(prompt);
    document.getElementById('prompt-display').innerText = `Prompt: ${prompt}`;
};

// Handle pitch submission
document.getElementById('submit-pitch').onclick = () => {
    const pitchText = document.getElementById('pitch-input').value;
    if (pitchText.trim() === '') return alert("Please enter a pitch.");
    document.getElementById('pitch-display').innerHTML = `<strong>Your Pitch:</strong> ${pitchText}`;
    document.getElementById('pitch-input').value = '';
};

// Handle feedback submission with voting functionality
document.getElementById('submit-feedback').onclick = () => {
    const feedbackText = document.getElementById('feedback-input').value;
    if (feedbackText.trim() === '') return alert("Please enter feedback.");
    const feedbackDiv = document.createElement('div');
    feedbackDiv.classList.add('feedback-item');
    feedbackDiv.innerHTML = `
        <p>${feedbackText}</p>
        <button class="upvote">⬆</button><span class="votes">0</span>
        <button class="downvote">⬇</button>
    `;
    document.getElementById('feedback-display').appendChild(feedbackDiv);
    document.getElementById('feedback-input').value = '';

    // Upvote and downvote functionality
    feedbackDiv.querySelector('.upvote').onclick = () => adjustVotes(feedbackDiv, 1);
    feedbackDiv.querySelector('.downvote').onclick = () => adjustVotes(feedbackDiv, -1);

    // Update leaderboard for contributor
    updateLeaderboard("User1");  // Replace with dynamic user data if available
};

// Adjust votes function
function adjustVotes(element, value) {
    const votesElement = element.querySelector('.votes');
    const newVotes = parseInt(votesElement.innerText) + value;
    votesElement.innerText = newVotes;
    element.style.transform = `scale(${1 + Math.min(0.1, Math.abs(newVotes) * 0.01)})`;
}
