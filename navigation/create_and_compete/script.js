// Array of random prompts
const prompts = [
    "Invent a new app that solves a common problem.",
    "Create a story that starts with a character finding a mysterious object.",
    "Design a gadget that can help in daily life.",
    "Pitch an innovative business idea focused on sustainability.",
    "Imagine a world where technology has completely changed education."
];

// Function to generate a random prompt
function generateRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const promptDisplay = document.getElementById('prompt-display');
    promptDisplay.innerText = prompts[randomIndex];
}

// Attach event listener to the button
document.getElementById('generate-prompt').addEventListener('click', generateRandomPrompt);

