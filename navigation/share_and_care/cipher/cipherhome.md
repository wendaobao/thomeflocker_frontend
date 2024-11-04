---
layout: base
title: CipherHome
search_exclude: true
permalink: /cipherhome/
---

# 🔐 **Cipher Team**


> *"Unlocking secrets, one cipher at a time."*

<!-- Rules Button -->
<div style="display: flex; justify-content: center; margin-top: -50px; margin-left: 250px;">
    <button id="rulesButton" style="padding: 10px 20px; background-color: #ffce00; color: #27293d; border: none; border-radius: 5px; font-size: 1.2em; cursor: pointer;">
        📜 Click to View Rules
    </button>
</div>

<!-- Modal Structure -->
<div id="rulesModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); z-index: 1000; justify-content: center; align-items: center;">
    <div style="background-color: #00021D; padding: 20px; border-radius: 10px; width: 400px; color: #ffffff; position: relative;">
        <h2 style="margin-top: 0;">Rules of the Cipher Forum</h2>
        <ul>
            <li>Respect all members and their opinions.</li>
            <li>No spamming or irrelevant content.</li>
            <li>Stay on topic and keep discussions related to ciphers.</li>
            <li>Help others in the community when possible.</li>
            <li>No sharing answers to level!</li>
            <li>Have fun and enjoy decoding!</li>
            

        </ul>
        <button id="closeModal" style="padding: 5px 10px; background-color: #ff6b6b; color: #ffffff; border: none; border-radius: 5px; cursor: pointer; position: absolute; top: 10px; right: 10px;">✖️ Close</button>
    </div>
</div>

<!-- JavaScript to Handle Modal -->
<script>
    document.getElementById('rulesButton').onclick = function() {
        document.getElementById('rulesModal').style.display = 'flex';
    };

    document.getElementById('closeModal').onclick = function() {
        document.getElementById('rulesModal').style.display = 'none';
    };

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === document.getElementById('rulesModal')) {
            document.getElementById('rulesModal').style.display = 'none';
        }
    };
</script>

---

![Cipher Background](https://themepack.me/i/c/749x467/media/g/1555/bill-cipher-theme-gs2.jpg) 
### 🛠 Announcements 🛠
<div style="background-color: #27293d; padding: 20px; border-radius: 8px; border: 2px solid #ffce00; color: #e0e0e0;">
🔒 **Current Challenge**: Crack today’s cipher within the hour!  
🕒 **Next Update**: New challenge releases every hour!  
💡 **Hint**: Pay attention to every detail...
</div>

---

## 📜 Level Progression 📜

### **Start Your Journey**  
> *"Every great decoder was once a beginner!"*

---

<div style="display: flex; justify-content: center; gap: 40px; padding: 20px;">
    <!-- Coding Tips Section -->
    <div style="flex: 1; max-width: 200px; background-color: #1e1f2b; padding: 15px; border-radius: 8px; color: #ffffff;">
        ### 🧠 Coding Tips
        - **Stay Curious**: Each cipher has a unique solution.
        - **Use Caesar Shift**: Try shifting letters to reveal patterns.
        - **Frequency Analysis**: Common letters may reveal clues.
    </div>

    <!-- Level Buttons Section -->
    <div style="flex: 2;">
        <!-- Level Buttons Container -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
            <!-- Level 1 Button -->
            <a href="/flocker_frontend/levelone/" style="text-decoration: none;">
                <div style="display: flex; align-items: center; background-color: #ffdd57; color: #27293d; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #ffb400; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
                    <div style="flex-grow: 1;">
                        <strong>Level 1: Beginner 🔰</strong><br>
                        ➡️ Learn basic ciphers.<br>
                        🔑 Unlock simple puzzles.
                    </div>
                    <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
                </div>
            </a>

            <!-- Level 2 Button -->
            <a href="/flocker_frontend/leveltwo/" style="text-decoration: none;">
                <div style="display: flex; align-items: center; background-color: #80c0ff; color: #27293d; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #4293ff; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
                    <div style="flex-grow: 1;">
                        <strong>Level 2: Intermediate 🌐</strong><br>
                        ➡️ Decipher longer codes.<br>
                        📜 Moderate challenges await.
                    </div>
                    <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
                </div>
            </a>

            <!-- Level 3 Button -->
            <a href="/flocker_frontend/levelthree/" style="text-decoration: none;">
                <div style="display: flex; align-items: center; background-color: #7cf9a1; color: #27293d; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #4adb6f; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
                    <div style="flex-grow: 1;">
                        <strong>Level 3: Advanced 🔵</strong><br>
                        ➡️ Crack complex patterns.<br>
                        🧩 For seasoned decoders!
                    </div>
                    <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
                </div>
            </a>

            <!-- Level 4 Button -->
            <a href="/flocker_frontend/levelfour/" style="text-decoration: none;">
                <div style="display: flex; align-items: center; background-color: #ff6b6b; color: #27293d; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #ff3c3c; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
                    <div style="flex-grow: 1;">
                        <strong>Level 4: Expert 🔴</strong><br>
                        ➡️ Master advanced encryption.<br>
                        🚀 Very challenging!
                    </div>
                    <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
                </div>
            </a>

            <!-- Level 5 Button -->
            <a href="/flocker_frontend/levelfive/" style="text-decoration: none;">
                <div style="display: flex; align-items: center; background-color: #4d4d4d; color: #e0e0e0; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #272727; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
                    <div style="flex-grow: 1;">
                        <strong>Level 5: Master ⚫️</strong><br>
                        ➡️ Final boss of ciphers!<br>
                        🏆 Only for the brave!
                    </div>
                    <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
                </div>
            </a>
        </div>
    </div>

    <!-- Additional Tips Section -->
    <div style="flex: 1; max-width: 200px; background-color: #1e1f2b; padding: 15px; border-radius: 8px; color: #ffffff;">
        ### 🔍 Cipher Tips
        - **Patterns Matter**: Look for repeating letter groups.
        - **Letter Pairings**: Some ciphers swap letters.
        - **Use Frequency Tools**: Online tools can help!
    </div>
</div>

---

**Instructions:**

1. **Level Up**: Solve challenges to progress.
2. **Adding Levels**: To add a level, copy any of the above blocks, change the details, and place it in the sequence.

---

### 🔗 Useful Links 🔗

- [Cipher Resources](https://example.com/resources) <!-- Replace with actual URLs -->
- [Challenge Archive](https://example.com/archive) 
- [Community Forum](https://example.com/forum) 

---

**Stay Sharp, Cipher Specialist!** 🧩
