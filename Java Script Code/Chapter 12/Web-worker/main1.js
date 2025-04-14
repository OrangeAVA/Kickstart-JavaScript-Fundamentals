const fileInput = document.getElementById('fileInput');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Extract image pixel data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Send data to the worker
        const worker = new Worker('worker1.js');
        worker.postMessage(imageData);

        // Listen for processed image data
        worker.onmessage = (e) => {
          ctx.putImageData(e.data, 0, 0);
        };

        worker.onerror = (e) => {
          console.error('Worker error:', e.message);
        };
      };
    };

    reader.readAsDataURL(file);
  } else {
    alert('Please select an image file.');
  }
});
