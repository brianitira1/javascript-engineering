//working with json and simulation api async operation in javascript

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const jsonData = `[
        { "name": "john", "age": 19, "role": "ethical hacker" },
        { "name": "david", "age": 20, "role": "iot engineer" },
        { "name": "brian", "age": 21, "role": "web apps engineer" }
      ]`;

      try {
        const userData = JSON.parse(jsonData);
        resolve(userData);
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
}

function displayUserData(users) {
  const container = document.getElementById("user-data-container");

  for (const user of users) {
    const userContainer = document.createElement("div");
    userContainer.innerHTML = `
        <p>name: ${user.name}</p>
         <p>age: ${user.age}</p>
          <p>role: ${user.role}</p>
        `;

    container.appendChild(userContainer);
  }
}

fetchUserData()
  .then((users) => {
    displayUserData(users);
  })
  .catch((error) => {
    console.error("Error fetching user data:", error);
  });
