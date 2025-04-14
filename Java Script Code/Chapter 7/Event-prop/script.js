// Get references to the DOM elements
const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Event Handlers
function logEvent(event) {
  console.log(`${event.currentTarget.className} (Phase: ${event.eventPhase})`);
}

// Add event listeners
grandparent.addEventListener('click', logEvent, true); // Capturing phase
parent.addEventListener('click', logEvent); // Bubbling phase
child.addEventListener('click', logEvent); // Bubbling phase
