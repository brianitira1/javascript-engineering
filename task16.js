//form validation in javascript

const form = document.getElementById("myform");

form.addEventListener("submit", (event) => {
  let usernameInput = document.getElementById("username");
  let passwordInput = document.getElementById("password");
  let confirmPasswordInput = document.getElementById("confirm-password");
  let ageInput = document.getElementById("age");

  if (usernameInput.value.trim() === "") {
    alert("please enter username!");
    event.preventDefault();
  } else if (passwordInput.value.trim() === "") {
    alert("please enter password!");
    event.preventDefault();
  } else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
    alert("password do not much please check again!");
    event.preventDefault();
  } else if (ageInput.value.trim() !== "") {
    if (isNaN(ageInput.value)) {
      alert("age must be a number!");
      event.preventDefault();
    } else if (parseFloat(ageInput.value) < 18) {
      alert("sorry you are still young!");
      event.preventDefault();
    }
  }
});
