---
layout: base 
title: Leveleight 
search_exclude: true
permalink: /leveleight/
---

# 🔐 **Cipher Challenge: Level 8**

Welcome to **Level 8**! 🧩 This time, you’ll need to think backward with a **Reverse Cipher.**

---

## 🔍 **Challenge Objective**

Decode the message by **reversing** the order of the characters.

---

## 🧩 **Hints to Get You Started**

1. The message is encrypted by simply **reversing the entire text.**
2. Example: Reversing "gnitset si sihT" reveals "This is testing."
3. Trust that the phrase will become clear after reversing.

---

## 🔢 **Cipher Text**

Ciphered message:  
`!erehw si ti slliw tneves eht morf neddih saw taht`

1. **Hint**:  Reverse the entire text.
2. **Hint**: The sentence will make sense after you reorder the characters.

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
  const correctAnswer = 'That was hidden from the seventh is it where!'; // Define the correct answer here

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
