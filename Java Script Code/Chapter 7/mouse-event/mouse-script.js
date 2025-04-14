// Get references to DOM elements
const box = document.getElementById('mouseBox');
const eventLog = document.getElementById('eventLog');

// Helper function to log events
function logEvent(message) {
  eventLog.textContent = message;
}

// Mouse click event
box.addEventListener('click', () => {
  logEvent('Box clicked!');
  box.style.backgroundColor = 'lightcoral'; // Change background color
});

// Mouse double-click event
box.addEventListener('dblclick', () => {
  logEvent('Box double-clicked!');
  box.style.backgroundColor = 'orange';
});

// Mouse over event
box.addEventListener('mouseover', () => {
  logEvent('Mouse over the box');
  box.classList.add('highlight'); // Add a highlight class
});

// Mouse out event
box.addEventListener('mouseout', () => {
  logEvent('Mouse left the box');
  box.classList.remove('highlight'); // Remove the highlight class
});

// Mouse down event
box.addEventListener('mousedown', () => {
  logEvent('Mouse button pressed down');
  box.style.border = '4px solid red';
});

// Mouse up event
box.addEventListener('mouseup', () => {
  logEvent('Mouse button released');
  box.style.border = '2px solid darkblue';
});
