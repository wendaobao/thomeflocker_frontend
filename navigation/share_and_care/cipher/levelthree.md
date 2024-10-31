---
layout: base 
title: Levelone 
search_exclude: true
permalink: /levelthree/
---


# 🔐 **Cipher Challenge: Level 3**

Welcome to **Level 3** of the Cipher Challenge! 🧩 You’re getting the hang of this—keep going to crack this code.

---

## 🔍 **Challenge Objective**

Decode the message below by using a Caesar Cipher technique.

---

## 🧩 **Hints to Get You Started**

1. Each letter has been **shifted forward by 7.** To decode, shift back by 7.
2. Example: If the coded letter is "H," shifting back by 7 reveals "A."
3. The decrypted message will make sense as a coherent phrase.

---

## 🔢 **Cipher Text**

Ciphered message:  
`Ovxl, Oti znv ja gvznq? G nx qjzy mzsy kzlb bzgxy!`

1. **Hint**: Shift each letter back by 7.
2. **Hint**: Use intuition for familiar phrases while decoding.

---

## 📝 **Submit Your Answer**

Once you’ve cracked the code, submit your answer here:


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
  const correctAnswer = 'Here, Are you on course? I see your next goal ahead soon!'; // Define the correct answer here

  function addMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.className = className;
    messageElement.textContent = text;
    messageElement.style.margin = '5px 0';
    messageElement.style.padding = '5px';
    messageElement.style.borderRadius = '5px';
    messageElement.style.backgroundColor = className === 'user-message' ? 'black' : 'red';
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

function addCorrectMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.className = className;
    messageElement.textContent = text;
    messageElement.style.margin = '5px 0';
    messageElement.style.padding = '5px';
    messageElement.style.borderRadius = '5px';
    messageElement.style.backgroundColor = className === 'user-message' ? 'black' : 'green';
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
      addMessage(`Your answer is: ${userMessage}`, 'user-message');
      chatInput.value = '';

      // Check if the message is correct
      if (userMessage === correctAnswer) {
        setTimeout(() => {
          
          addCorrectMessage("Correct answer! Now you can move on!", 'bot-message');
        }, 1000);
      } else {
        setTimeout(() => {
          addMessage("Try again!", 'bot-message');
        }, 1000);
      }
    }
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendButton.click();
  });
</script>


This is a simple interactive chat box. Type a message and hit "Send" or press "Enter" to see it displayed.
