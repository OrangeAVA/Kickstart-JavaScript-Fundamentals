// Get references to DOM elements
const textInput = document.getElementById('textInput');
const output = document.getElementById('output');

// Helper function to display the event details
function displayEventDetails(event, eventType) {
  output.innerHTML = `
    <p><strong>Event Type:</strong> ${eventType}</p>
    <p><strong>Key:</strong> ${event.key}</p>
    <p><strong>Key Code:</strong> ${event.keyCode}</p>
    <p><strong>Alt Key Pressed:</strong> ${event.altKey}</p>
    <p><strong>Ctrl Key Pressed:</strong> ${event.ctrlKey}</p>
    <p><strong>Shift Key Pressed:</strong> ${event.shiftKey}</p>
  `;
}

// Keydown event
textInput.addEventListener('keydown', (event) => {
  displayEventDetails(event, 'keydown');
});

// Keyup event
textInput.addEventListener('keyup', (event) => {
  displayEventDetails(event, 'keyup');
});

// Keypress event (deprecated but included for demonstration)
textInput.addEventListener('keypress', (event) => {
  displayEventDetails(event, 'keypress');
});
