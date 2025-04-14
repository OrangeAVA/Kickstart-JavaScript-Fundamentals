onmessage = function (e) {
  const imageData = e.data;
  const data = imageData.data;
  console.log("Worker received data"); // Should appear in browser dev tools

  // Apply grayscale filter
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg;     // Red
    data[i + 1] = avg; // Green
    data[i + 2] = avg; // Blue
    // Alpha remains unchanged (data[i + 3])
  }

  postMessage(imageData); // Send back the modified image
};
