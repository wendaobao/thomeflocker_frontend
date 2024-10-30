class PromptGenerator {
    constructor() {
        this.prompts = {
            "Inventions": [
                "Create a device that solves a common daily problem.",
                "Imagine a machine that can help with household chores.",
                "Invent a gadget for improving personal health.",
                "Design an eco-friendly transportation solution.",
                "Create a wearable technology for safety."
            ],
            "Stories": [
                "Write a story that begins with finding an ancient map.",
                "Imagine a world where dreams are real.",
                "Create a tale set in a future where robots control daily life.",
                "Write about a person who can read minds.",
                "Imagine a scenario where humanity lives underwater."
            ],
            "Apps": [
                "Design an app that promotes healthy habits.",
                "Create an educational game for children.",
                "Imagine an app that connects people based on hobbies.",
                "Design an app that monitors environmental changes.",
                "Create a social media platform for artists."
            ],
            "Business Ventures": [
                "Pitch a business idea that tackles food waste.",
                "Imagine a startup focused on sustainable fashion.",
                "Design a service to simplify online shopping.",
                "Create a business model for mental health support.",
                "Pitch an idea for a local community space."
            ]
        };
    }

    generateRandomPrompt(category) {
        if (category && this.prompts[category]) {
            const randomIndex = Math.floor(Math.random() * this.prompts[category].length);
            return this.prompts[category][randomIndex];
        } else {
            const allPrompts = Object.values(this.prompts).flat();
            const randomIndex = Math.floor(Math.random() * allPrompts.length);
            return allPrompts[randomIndex];
        }
    }

    getCategories() {
        return Object.keys(this.prompts);
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

    submitPitch(pitch, category) {
        const newPitch = { text: pitch, category, score: 0, feedback: [] };
        this.pitches.push(newPitch);
        this.saveToLocalStorage('pitches', this.pitches);
        this.renderSubmissions();
    }

    submitFeedback(pitchIndex, feedbackText) {
        const feedbackEntry = { text: feedbackText, score: 0 };
        this.pitches[pitchIndex].feedback.push(feedbackEntry);
        this.saveToLocalStorage('pitches', this.pitches);
        this.renderSubmissions();
    }

    upvotePitch(pitchIndex) {
        this.pitches[pitchIndex].score += 1;
        this.saveToLocalStorage('pitches', this.pitches);
        this.renderSubmissions();
    }

    upvoteFeedback(pitchIndex, feedbackIndex) {
        this.pitches[pitchIndex].feedback[feedbackIndex].score += 1;
        this.saveToLocalStorage('pitches', this.pitches);
        this.renderSubmissions();
    }

    renderSubmissions() {
        const pitchDisplay = document.getElementById('pitch-display');
        pitchDisplay.innerHTML = this.pitches.map((pitch, index) => `
            <div class="pitch">
                <p><strong>Category:</strong> ${pitch.category}</p>
                <p>${pitch.text}</p>
                <button onclick="submissionManager.upvotePitch(${index})">👍 ${pitch.score}</button>
                <h4>Feedback:</h4>
                <div class="feedback-list">
                    ${pitch.feedback.map((fb, fbIndex) => `
                        <p>${fb.text} <button onclick="submissionManager.upvoteFeedback(${index}, ${fbIndex})">👍 ${fb.score}</button></p>
                    `).join('')}
                </div>
                <textarea id="feedback-input-${index}" placeholder="Offer feedback..."></textarea>
                <button onclick="submissionManager.submitFeedback(${index}, document.getElementById('feedback-input-${index}').value)">Submit Feedback</button>
            </div>
        `).join('');
    }
}

// Set up the prompt generator and submission manager
const promptGenerator = new PromptGenerator();
const submissionManager = new SubmissionManager();

document.addEventListener('DOMContentLoaded', () => {
    // Populate categories in the dropdown
    const categorySelect = document.getElementById('category-select');
    promptGenerator.getCategories().forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    // Generate prompt based on selected category
    document.getElementById('generate-prompt').addEventListener('click', () => {
        const category = categorySelect.value;
        const promptDisplay = document.getElementById('prompt-display');
        promptDisplay.innerText = promptGenerator.generateRandomPrompt(category);
    });

    // Submit pitch
    document.getElementById('submit-pitch').addEventListener('click', () => {
        const pitchInput = document.getElementById('pitch-input');
        const category = categorySelect.value;
        if (pitchInput.value.trim() !== "") {
            submissionManager.submitPitch(pitchInput.value, category);
            pitchInput.value = ""; // Clear input
        } else {
            alert("Please enter a pitch before submitting.");
        }
    });
});
