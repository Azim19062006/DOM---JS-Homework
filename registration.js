let register = document.querySelector(".register_button");
let input_name = document.querySelector(".name");
let email_input = document.querySelector(".email");
let password_input = document.querySelector(".password");
let special = ["@gmail.com", "@mail.ru"];

register.addEventListener("click", function () {
  if (!/^[a-zA-Z\s]+$/.test(input_name.value)) {
    alert("Name must contain only letters and spaces.");
    return;
  }

  if (!special.some((domain) => email_input.value.endsWith(domain))) {
    alert("Email is incorrect! It should end with '@gmail.com' or '@mail.ru'.");
    return;
  }

  if (password_input.value.length < 8) {
    alert("Password must consist of 8 or more letters");
    return;
  } 

  alert("Registration successful!");
});
