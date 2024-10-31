---
layout: base 
title: Levelone 
search_exclude: true
permalink: /levelthree/
---



# 🔐 **Cipher Challenge: Level 3**

Welcome to **Level 3**! 🔒 You've made it this far, but things are about to get more challenging. At this level, you’ll need to rely on pattern recognition, logic, and perhaps even a bit of research. Can you decode the next cipher?

---

## 🔍 **Challenge Objective**

Your goal is to **crack the Level 3 encrypted message**. This cipher may contain multiple layers or use unfamiliar methods, so approach with an open mind!

---

## 📜 **Encrypted Message**

```plaintext
// Place Level 3 encrypted message here


1. Explore **substitution ciphers** and consider letter frequencies in the English language.
2. Watch out for **common phrases** or patterns that may repeat—these could provide a foothold.
3. This level may require knowledge of **more advanced ciphers** (e.g., Vigenère, Atbash). Research might be necessary.


- **Answer**: `type-your-answer-here`

<div id="chat-container" style="width: 300px; margin: 20px 0; border: 2px solid #ddd; border-radius: 5px; padding: 10px; font-family: Arial, sans-serif;">
  <div id="chat-box" style="height: 200px; overflow-y: scroll; border-bottom: 2px solid #ddd; margin-bottom: 10px; padding: 10px; background-color: #f9f9f9;">
    <div id="chat-messages"></div>
  </div>
  <input type="text" id="chat-input" placeholder="Type a message..." style="width: calc(100% - 60px); padding: 8px; margin-right: 5px; border: 1px solid #ccc; border-radius: 5px;" />
  <button id="send-button" style="padding: 8px; background-color: #007bff; color: white; border: none; border-radius: 5px;">Send</button>
</div>

<script>
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const sendButton = document.getElementById('send-button');

  function addMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.className = className;
    messageElement.textContent = text;
    messageElement.style.margin = '5px 0';
    messageElement.style.padding = '5px';
    messageElement.style.borderRadius = '5px';
    messageElement.style.backgroundColor = className === 'user-message' ? '#dcf8c6' : '#e0e0e0';
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
      addMessage(`User: ${userMessage}`, 'user-message');
      chatInput.value = '';
      setTimeout(() => {
        addMessage("Bot: I'm here to help!", 'bot-message');
      }, 1000);
    }
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendButton.click();
  });
</script>
