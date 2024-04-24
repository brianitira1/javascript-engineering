//fetching data from a server using javascript
const url = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const firstTenPosts = data.slice(0, 10);
    renderPosts(firstTenPosts);
  } catch (error) {
    console.error(error);
  }
}

function renderPosts(posts) {
  const mainContainer = document.getElementById("container");
  for (const post of posts) {
    const container = document.createElement("div");
    container.innerHTML = `<p>${post.title}</p>`;
    mainContainer.appendChild(container);
  }
}

const fetchBtn = document.getElementById("button");
fetchBtn.addEventListener("click", () => {
  fetchPosts();
});
