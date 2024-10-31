---
layout: base 
title: Levelone 
search_exclude: true
permalink: /leveltwo/
---



# 🔐 **Cipher Challenge: Level 2**

Welcome to **Level 2**! 🔎 You've cracked the first code—now it's time to tackle something a bit trickier. Think creatively, apply new techniques, and remember: every clue could be a key to unlocking the message!

---

## 🔍 **Challenge Objective**

Your goal is to **decode this next-level message**. This cipher may require you to combine techniques or recognize patterns from Level 1. Keep your eyes open for details!

---

## 📜 **Encrypted Message**

```plaintext
// Place Level 2 encrypted message here

1. Try **reversing** or **shifting** characters in the message. Familiar ciphers like **Caesar** might be involved.
2. Sometimes ciphers can be nested—**more than one layer** may exist here.
3. Double-check for patterns in numbers or characters. Could they relate to **positions** or **groupings**?

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




