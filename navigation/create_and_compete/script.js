class PromptGenerator {
    constructor(prompts) {
        this.prompts = prompts;
    }

    generateRandomPrompt(category) {
        const categoryPrompts = this.prompts[category] || [];
        const randomIndex = Math.floor(Math.random() * categoryPrompts.length);
        return categoryPrompts[randomIndex] || "No prompts available for this category.";
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

// Define categories and prompts
const prompts = {
    inventions: [
        "Invent a device to make remote work easier.",
        "Create a tool to help people sleep better.",
        "Design an app to solve climate change issues."
    ],
    stories: [
        "Write a story about a world without technology.",
        "Imagine a character who discovers a hidden city.",
        "Create a sci-fi story where humans colonize Mars."
    ],
    apps: [
        "Pitch an app to improve mental health.",
        "Create an app that encourages physical activity.",
        "Design an app for personal finance management."
    ],
    businesses: [
        "Suggest a business idea focused on zero waste.",
        "Create a subscription box business concept.",
        "Pitch a business idea that targets students."
    ]
};

const promptGenerator = new PromptGenerator(prompts);
const submissionManager = new SubmissionManager();

document.addEventListener('DOMContentLoaded', () => {
    // Populate category dropdown
    const categorySelect = document.getElementById('category-select');
    Object.keys(prompts).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySelect.appendChild(option);
    });

    document.getElementById('generate-prompt').addEventListener('click', () => {
        const selectedCategory = categorySelect.value;
        const promptDisplay = document.getElementById('prompt-display');
        promptDisplay.innerText = promptGenerator.generateRandomPrompt(selectedCategory);
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
    document.body.appendChild(downloadButton);
});
