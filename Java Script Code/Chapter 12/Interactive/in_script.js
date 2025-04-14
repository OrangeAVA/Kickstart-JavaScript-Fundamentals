const canvas = document.getElementById('interactiveCanvas');
const ctx = canvas.getContext('2d');

// Toolbar elements
const colorPicker = document.getElementById('colorPicker');
const lineWidthInput = document.getElementById('lineWidth');
const eraseBtn = document.getElementById('eraseBtn');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');

// Initial state
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentColor = '#000000';
let currentLineWidth = 2;
let isErasing = false;

// Function to start drawing
function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to draw on the canvas
function draw(e) {
  if (!isDrawing) return; 

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = isErasing ? '#FFFFFF' : currentColor;
  ctx.lineWidth = currentLineWidth;
  ctx.lineCap = 'round';
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to stop drawing
function stopDrawing() {
  isDrawing = false;
  ctx.beginPath();
}

// Event listeners for mouse events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Touch support (for mobile)
canvas.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  lastX = touch.clientX - rect.left;
  lastY = touch.clientY - rect.top;
  isDrawing = true;
});

canvas.addEventListener('touchmove', (e) => {
  if (!isDrawing) return;
  e.preventDefault();
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  draw({ offsetX: touch.clientX - rect.left, offsetY: touch.clientY - rect.top });
});

canvas.addEventListener('touchend', stopDrawing);

// Change color
colorPicker.addEventListener('input', (e) => {
  currentColor = e.target.value;
  isErasing = false;
});

// Change line width
lineWidthInput.addEventListener('input', (e) => {
  currentLineWidth = e.target.value;
});

// Eraser mode
eraseBtn.addEventListener('click', () => {
  isErasing = true;
});

// Clear canvas
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save drawing
saveBtn.addEventListener('click', () => {
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'drawing.png';
  link.click();
});
