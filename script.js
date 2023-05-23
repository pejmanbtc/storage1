let input = document.querySelector('input');
let output = document.querySelector('.output');
let savedText = '';

// رویداد کلیک برای دکمه سیو
document.getElementById('save').addEventListener('click', () => {
  savedText = input.value;
  localStorage.setItem('savedText', savedText);
  input.value = '';
});

// رویداد کلیک برای دکمه شو
document.getElementById('show').addEventListener('click', () => {
  if (savedText) {
    const separator = document.createElement('hr');
    separator.style.marginTop = '10px';
    output.appendChild(separator);
    output.appendChild(document.createTextNode(savedText));
  }
});

// رویداد کلیک برای دکمه داخل صفحه
document.addEventListener('keydown', event => {
  const key = event.key;
  if (key === 'Enter') {
    savedText = input.value;
    localStorage.setItem('savedText', savedText);
    input.value = '';
  } else if (key === 'Shift') {
    if (savedText) {
      const separator = document.createElement('hr');
      separator.style.marginTop = '10px';
      output.appendChild(separator);
      output.appendChild(document.createTextNode(savedText));
    }
  }
});