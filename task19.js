//sending data to a server  using javascript
const url = "https://jsonplaceholder.typicode.com/posts";

async function sendPost(data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = response.json();
    console.log("post sent successfully", result);
  } catch (error) {
    console.error(error);
  }
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const body = document.getElementById("body").value.trim();

  if (title !== "" && body !== "") {
    const postData = {
      title: title,
      body: body,
    };

    sendPost(postData);
  } else {
    console.error("title and body cannot be empty");
  }
});



