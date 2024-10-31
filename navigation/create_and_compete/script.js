class PromptGenerator {
    constructor(prompts) {
        this.prompts = prompts;
    }

    generateRandomPrompt() {
        const randomIndex = Math.floor(Math.random() * this.prompts.length);
        return this.prompts[randomIndex];
    }
}

class SubmissionManager {
    constructor() {
        this.pitches = this.loadFromLocalStorage('pitches') || [];
        this.feedbacks = this.loadFromLocalStorage('feedbacks') || [];
        this.renderSubmissions();
    }

    loadFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    saveToLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    submitPitch(pitch) {
        this.pitches.push(pitch);
        this.saveToLocalStorage('pitches', this.pitches);
        this.renderSubmissions();
    }

    submitFeedback(feedback) {
        this.feedbacks.push(feedback);
        this.saveToLocalStorage('feedbacks', this.feedbacks);
        this.renderFeedbacks();
        this.showModal();
    }

    renderSubmissions() {
        const pitchDisplay = document.getElementById('pitch-display');
        pitchDisplay.innerHTML = this.pitches.map(pitch => `<div>${pitch}</div>`).join('');
    }

    renderFeedbacks() {
        const feedbackDisplay = document.getElementById('feedback-display');
        feedbackDisplay.innerHTML = this.feedbacks.map(feedback => `<div>${feedback}</div>`).join('');
    }

    showModal() {
        const modal = document.getElementById('feedback-modal');
        modal.style.display = 'block';
        const closeButton = document.querySelector('.close-button');
        closeButton.onclick = () => modal.style.display = 'none';
        window.onclick = event => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }

    downloadJSON() {
        const data = {
            pitches: this.pitches,
            feedbacks: this.feedbacks
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'submissions.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

const prompts = [
    "Invent a new app that solves a common problem.",
    "Create a story that starts with a character finding a mysterious object.",
    "Design a gadget that can help in daily life.",
    "Pitch an innovative business idea focused on sustainability.",
    "Imagine a world where technology has completely changed education."
];

const promptGenerator = new PromptGenerator(prompts);
const submissionManager = new SubmissionManager();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-prompt').addEventListener('click', () => {
        const promptDisplay = document.getElementById('prompt-display');
        promptDisplay.innerText = promptGenerator.generateRandomPrompt();
    });

    document.getElementById('submit-pitch').addEventListener('click', () => {
        const pitchInput = document.getElementById('pitch-input');
        if (pitchInput.value.trim() !== "") {
            submissionManager.submitPitch(pitchInput.value);
            pitchInput.value = ""; // Clear input
        } else {
            alert("Please enter a pitch before submitting.");
        }
    });

    document.getElementById('submit-feedback').addEventListener('click', () => {
        const feedbackInput = document.getElementById('feedback-input');
        if (feedbackInput.value.trim() !== "") {
            submissionManager.submitFeedback(feedbackInput.value);
            feedbackInput.value = ""; // Clear input
        } else {
            alert("Please enter feedback before submitting.");
        }
    });

    // New button for downloading JSON
    const downloadButton = document.createElement('button');
    downloadButton.innerText = 'Download Submissions as JSON';
    downloadButton.addEventListener('click', () => submissionManager.downloadJSON());
    document.body.appendChild(downloadButton); // Append the button to the body
});