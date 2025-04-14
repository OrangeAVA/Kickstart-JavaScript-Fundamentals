// URL to fetch JSON data
const url = 'https://jsonplaceholder.typicode.com/posts';

// Fetch JSON data and display it dynamically on the webpage
const fetchPosts = async () => {
  try {
    const response = await fetch(url); // Fetch data from the URL
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    const posts = await response.json(); // Parse the JSON data

    renderPosts(posts); // Call a function to render the posts
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('postsContainer').innerHTML =
      `<p style="color: red;">Unable to load posts: ${error.message}</p>`;
  }
};

// Render posts dynamically in the DOM
const renderPosts = (posts) => {
  const container = document.getElementById('postsContainer');
  container.innerHTML = ''; // Clear any existing content

  // Iterate over the posts and create HTML for each
  posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.className = 'post';

    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;

    container.appendChild(postElement); // Add the post to the container
  });
};

// Call the function to fetch and render posts
fetchPosts();
