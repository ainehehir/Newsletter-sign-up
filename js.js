const form = document.querySelector("form");
const email = document.getElementById("email");
const error = document.getElementById("error");
const content = document.getElementById("content");

// reg exp for email
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//check for a valid form when the document loads
window.addEventListener("load", () => {
  const isValid = email.value.length !== 0 && emailRegExp.test(email.value);
  if (isValid) {
    validForm;
  }
});

//check the form validation when the user submit form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = email.value.length !== 0 && emailRegExp.test(email.value);

  if (!isValid) {
    inValidForm();
  } else {
    validForm();
  }
});

// valid form, remove error msg & create a successful msg
function validForm() {
  if (email.classList.contains("invalid")) {
    email.classList.remove("invalid");
  }
  //email.classList.remove("invalid");
  error.textContent = "";
  error.className = "error";
  content.innerHTML = "";
  content.innerHTML = `<div id="message">
    <img src="./assets/images/icon-success.svg" alt="" />
    <h3>Thanks for subscribing!</h3>
    <p>
      A confirmation email has been sent to <strong>${email.value}</strong>. Please
      open it and click the button inside to confirm your subscription.
    </p>
    <button class="submit" id="dismiss" onclick=" location.reload();">Dismiss message</button>
  </div>`;
}

// invalid form

function inValidForm() {
  email.classList.add("invalid");
  error.textContent = "Valid email required";
  error.className = "error active";
  email.focus();

  //   remove the error msg when email reg exp has been met
  email.addEventListener("input", () => {
    console.log(email.value);
    if (email.value.length !== 0 && emailRegExp.test(email.value)) {
      error.textContent = "";
      if (email.classList.contains("invalid")) {
        email.classList.remove("invalid");
      }
    }
  });
}
