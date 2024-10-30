---
layout: base 
title: Levelone 
search_exclude: true
permalink: /levelone/
---
    

# 🔐 **Cipher Challenge: Level 1**

Welcome to **Level 1** of the Cipher Challenge! 🧩 Get ready to put your code-breaking skills to the test. Decipher the message, find the hidden phrase, and unlock the path to the next level.

---

## 🔍 **Challenge Objective**

Your goal is to **decode the hidden message** provided. Use your problem-solving skills and creativity to reveal the secret phrase.

---

## 🧩 **Hints to Get You Started**

1. The numbers might correspond to **ASCII characters** or **another encoding format**.
2. Pay attention to the **structure of the numbers**—do they look like hex, binary, or something else?
3. Don’t overlook **spaces** or groupings—they might contain clues.

---

## 📝 **Submit Your Answer**

Once you’ve cracked the code, submit your answer here:

```markdown
- **Answer**: `type-your-answer-here`







# Chat Box Demo

This is a basic chat box rendered with HTML inside Markdown.

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

This is a simple interactive chat box. Type a message and hit "Send" or press "Enter" to see it displayed.
