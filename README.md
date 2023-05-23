# storage1



# Save and Show Text Document

This document describes a simple web application that allows you to save and display text. It consists of an input field, save button, show button, and an output area.

## Usage

1. Enter the desired text in the input field.
2. Press the "Save" button or hit the "Enter" key to save the text to local storage.
3. Press the "Show" button or hold the "Shift" key to display the saved text in the output area.

## HTML Structure

```html
<div class="container">
  <button id="save">Save</button>
  <input type="text" placeholder="Write...">
  <button id="show">Show</button>
  <p>Press Enter key to save. Press Shift key to show.</p>
  <div class="output"></div>
</div>
```

## CSS Styling

```css
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input {
  width: 20rem;
  height: 2.2rem;
  outline: none;
  background-color: lightsalmon;
  border-radius: 6px;
}

.output {
  width: 77rem;
  height: 15rem;
  border: 2px red solid;
  overflow: auto;
  white-space: pre-wrap;
  background-color: rgb(235, 231, 231);
}

#save,
#show {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
}
```

## JavaScript Code

```javascript
document.addEventListener('DOMContentLoaded', function() {
  var saveButton = document.getElementById('save');
  var showButton = document.getElementById('show');
  var inputText = document.getElementById('inputText');
  var outputDiv = document.querySelector('.output');

  saveButton.addEventListener('click', saveText);
  inputText.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      saveText();
    }
  });

  showButton.addEventListener('click', showText);
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Shift') {
      showText();
    }
  });

  function saveText() {
    var text = inputText.value.trim();
    if (text !== '') {
      localStorage.setItem('savedText', text);
      inputText.value = '';
      alert('Text saved successfully!');
    }
  }

  function showText() {
    var savedText = localStorage.getItem('savedText');
    if (savedText !== null) {
      outputDiv.textContent = savedText;
    } else {
      outputDiv.textContent = 'No saved text found.';
    }
  }
});
```
