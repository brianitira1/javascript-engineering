//async programming, promises and callback functions in javascript
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = {
        id: 1,
        username: "brian",
        email: "brian@gmail.com",
      };
      resolve(userData);
    }, 2000);
  });
}

async function displayUserData() {
  try {
    const userData = await fetchUserData();
    console.log(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

displayUserData();
