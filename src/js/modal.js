import { login, signup } from "./auth.js";

export function showModalViaLoginButton() {
  const loginButton = document.querySelector(".login-button");
  const modalContainer = document.querySelector("#modal-container");

  loginButton.addEventListener("click", () => {
    modalContainer.style.display = "block"
  })
}

export function closeModalViaCloseModalButton() {
  const closeModalButton = document.querySelector(".close-modal-button");
  const modalContainer = document.querySelector("#modal-container");

  closeModalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
}

// export function renderModal() {
//   const modalContainer = document.querySelector("#modal-container");

//   const modalContent = document.createElement("div");
//   modalContent.classList.add("modal-content");

//   // Signup
//   // const modalSignupForm = document.createElement("form");
//   // modalSignupForm.classList.add("signup-form");

//   // Other stuff needed for signup
//   // const labelFirstName = document.createElement("label")
//   // const inputFirstName = document.createElement("input")
//   // const labelLastName = document.createElement("label")
//   // const inputLastName = document.createElement("input")
//   // const labelReenterPassword = document.createElement("label");
//   // const inputReenterPassword = document.createElement("input");

//   // Login
//   const modalLoginForm = document.createElement("form");
//   modalLoginForm.classList.add("login-form");

//   const loginRowContainer = document.createElement("div");
//   loginRowContainer.classList.add("row-container", "space-between");

//   const loginTitle = document.createElement("h1");
//   loginTitle.textContent = "🖳 Login";

//   const closeModalButton = document.createElement("button");
//   closeModalButton.textContent = "✖";
//   closeModalButton.classList.add("close-modal-button");
//   closeModalButton.setAttribute("type", "button");

//   const loginEmailLabel = document.createElement("label");
//   loginEmailLabel.textContent = "Email";
//   loginEmailLabel.setAttribute("for", "email-login");

//   const loginEmailInput = document.createElement("input");
//   loginEmailInput.setAttribute("id", "email-login");
//   loginEmailInput.setAttribute("type", "email");
//   loginEmailInput.setAttribute("name", "email");
//   loginEmailInput.setAttribute("placeholder", "Enter your email");
//   loginEmailInput.required = true;

//   const loginPasswordLabel = document.createElement("label");
//   loginPasswordLabel.textContent = "Password";
//   loginPasswordLabel.setAttribute("for", "password-login");

//   const loginPasswordInput = document.createElement("input");
//   loginPasswordInput.setAttribute("id", "password-login");
//   loginPasswordInput.setAttribute("type", "password");
//   loginPasswordInput.setAttribute("name", "password");
//   loginPasswordInput.setAttribute("placeholder", "Enter your password");
//   loginPasswordInput.required = true;

//   const submitButton = document.createElement("button");
//   submitButton.textContent = "Submit";
//   submitButton.setAttribute("type", "submit");

//   // Handle form submission
//   modalLoginForm.addEventListener("submit", async (event) => {
//     // Reminder - event.preventDefault() stops the browser from performing its normal form submission. That leaves JavaScript in control.
//     event.preventDefault();

//     const email = loginEmailInput.value;
//     const password = loginPasswordInput.value;

//     try {
//       const data = await login(email, password);

//       console.log("Login successful:", data);

//       // I'll eventually update the navbar,
//       // close the modal, and show the comment form here.
//     } catch (err) {
//       console.error("Login failed:", err);
//     }
//   });

//     const loginSignupButton = document.createElement("button");
//     loginSignupButton.textContent = "No account? Sign up here!";
//     loginSignupButton.classList.add("login-signup-button");
//     loginSignupButton.setAttribute("type", "button");

//   loginRowContainer.append(loginTitle, closeModalButton);

//   modalLoginForm.append(
//     loginRowContainer,
//     loginEmailLabel,
//     loginEmailInput,
//     loginPasswordLabel,
//     loginPasswordInput,
//     submitButton,
//     loginSignupButton,
//   );
//   modalContent.append(modalLoginForm);
//   modalContainer.append(modalContent);
// } 

export function renderModal() {
  const modalContainer = document.querySelector("#modal-container");
  const modalContent = document.createElement("div");

  modalContent.classList.add("modal-content");

  const closeModalButtonContainer = document.createElement("div");
  closeModalButtonContainer.classList.add(
    "row-container",
    "justify-content-end",
  );

  const closeModalButton = document.createElement("button");
  closeModalButton.textContent = "✖";
  closeModalButton.classList.add("close-modal-button");
  closeModalButton.setAttribute("type", "button");

  const loginForm = renderLoginForm();
  const signupForm = renderSignupForm();

  // signupForm.style.display = "none";

  closeModalButtonContainer.append(closeModalButton);

  modalContent.append(
    closeModalButtonContainer,
    loginForm,
    signupForm
  );
  modalContainer.append(modalContent);
} 

function renderLoginForm() {
  const modalLoginForm = document.createElement("form");
  modalLoginForm.classList.add("login-form");

  const loginTitle = document.createElement("h1");
  loginTitle.textContent = "🖳 Login";

  const loginEmailLabel = document.createElement("label");
  loginEmailLabel.textContent = "Email";
  loginEmailLabel.setAttribute("for", "email-login");

  const loginEmailInput = document.createElement("input");
  loginEmailInput.setAttribute("id", "email-login");
  loginEmailInput.setAttribute("type", "email");
  loginEmailInput.setAttribute("name", "email");
  loginEmailInput.setAttribute("placeholder", "Enter your email");
  loginEmailInput.required = true;

  const loginPasswordLabel = document.createElement("label");
  loginPasswordLabel.textContent = "Password";
  loginPasswordLabel.setAttribute("for", "password-login");

  const loginPasswordInput = document.createElement("input");
  loginPasswordInput.setAttribute("id", "password-login");
  loginPasswordInput.setAttribute("type", "password");
  loginPasswordInput.setAttribute("name", "password");
  loginPasswordInput.setAttribute("placeholder", "Enter your password");
  loginPasswordInput.required = true;

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.setAttribute("type", "submit");

  // Handle form submission
  modalLoginForm.addEventListener("submit", async (event) => {
    // Reminder - event.preventDefault() stops the browser from performing its normal form submission. That leaves JavaScript in control.
    event.preventDefault();

    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;

    try {
      const data = await login(email, password);

      console.log("Login successful:", data);

      const modalContainer = document.querySelector("#modal-container");
      modalContainer.style.display = "none";

      // I'll eventually update the navbar,
      // close the modal, and show the comment form here.
    } catch (err) {
      console.error("Login failed:", err);
    }
  });

  const loginSignupButton = document.createElement("button");
  loginSignupButton.textContent = "*No account? Sign up here!";
  loginSignupButton.classList.add("login-signup-button");
  loginSignupButton.setAttribute("type", "button");

  loginSignupButton.addEventListener("click", () => {
    const loginForm = document.querySelector(".login-form");
    const signupForm = document.querySelector(".signup-form");
    loginForm.style.display = "none";
    signupForm.style.display = "flex";
  });

  modalLoginForm.append(
    loginTitle,
    loginEmailLabel,
    loginEmailInput,
    loginPasswordLabel,
    loginPasswordInput,
    submitButton,
    loginSignupButton,
  );

  return modalLoginForm;
} 

export function renderSignupForm() {
  const modalSignupForm = document.createElement("form");
  modalSignupForm.classList.add("signup-form");

  const signupTitle = document.createElement("h1");
  signupTitle.textContent = "🖳 Sign Up";

  const signupFirstNameLabel = document.createElement("label");
  signupFirstNameLabel.textContent = "First Name";
  signupFirstNameLabel.setAttribute("for", "first-name-signup");

  const signupFirstNameInput = document.createElement("input");
  signupFirstNameInput.setAttribute("id", "first-name-signup");
  signupFirstNameInput.setAttribute("type", "text");
  signupFirstNameInput.setAttribute("name", "first_name");
  signupFirstNameInput.setAttribute("placeholder", "Enter first name");
  signupFirstNameInput.required = true;

  const signupLastNameLabel = document.createElement("label");
  signupLastNameLabel.textContent = "Last Name";
  signupLastNameLabel.setAttribute("for", "last-name-signup");

  const signupLastNameInput = document.createElement("input");
  signupLastNameInput.setAttribute("id", "last-name-signup");
  signupLastNameInput.setAttribute("type", "text");
  signupLastNameInput.setAttribute("name", "last_name");
  signupLastNameInput.setAttribute("placeholder", "Enter last name");
  signupLastNameInput.required = true;

  const signupEmailLabel = document.createElement("label");
  signupEmailLabel.textContent = "Email";
  signupEmailLabel.setAttribute("for", "email-signup");

  const signupEmailInput = document.createElement("input");
  signupEmailInput.setAttribute("id", "email-signup");
  signupEmailInput.setAttribute("type", "email");
  signupEmailInput.setAttribute("name", "email");
  signupEmailInput.setAttribute("placeholder", "Enter your email");
  signupEmailInput.required = true;

  const signupPasswordLabel = document.createElement("label");
  signupPasswordLabel.textContent = "Password";
  signupPasswordLabel.setAttribute("for", "password-signup");

  const signupPasswordInput = document.createElement("input");
  signupPasswordInput.setAttribute("id", "password-signup");
  signupPasswordInput.setAttribute("type", "password");
  signupPasswordInput.setAttribute("name", "password");
  signupPasswordInput.setAttribute("placeholder", "Enter your password");
  signupPasswordInput.required = true;

  const signupConfirmPasswordLabel = document.createElement("label");
  signupConfirmPasswordLabel.textContent = "Confirm Password";
  signupConfirmPasswordLabel.setAttribute("for", "confirm-password-signup");

  const signupConfirmPasswordInput = document.createElement("input");
  signupConfirmPasswordInput.setAttribute("id", "confirm-password-signup");
  signupConfirmPasswordInput.setAttribute("type", "password");
  signupConfirmPasswordInput.setAttribute("name", "confirm_password");
  signupConfirmPasswordInput.setAttribute("placeholder", "Re-enter password");
  signupConfirmPasswordInput.required = true;

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.setAttribute("type", "submit");

  // Handle form submission
  modalSignupForm.addEventListener("submit", async (event) => {
    // Reminder - event.preventDefault() stops the browser from performing its normal form submission. That leaves JavaScript in control.
    event.preventDefault();

    const firstName = signupFirstNameInput.value;
    const lastName = signupLastNameInput.value;
    const email = signupEmailInput.value;
    const password = signupPasswordInput.value;
    const confirmPassword = signupConfirmPasswordInput.value;

    // if (password !== confirmPassword) {
    //   console.error("Passwords do not match.");
    //   return;
    // }

      if (password !== confirmPassword) {
        signupConfirmPasswordInput.setCustomValidity("Passwords do not match.");
        signupConfirmPasswordInput.reportValidity();
        return;
      }

      signupConfirmPasswordInput.setCustomValidity("");

    try {
      const data = await signup({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      });

      console.log("Signup successful:", data);

      const modalContainer = document.querySelector("#modal-container");
      modalContainer.style.display = "none";

      // I'll eventually update the navbar,
      // close the modal, and show the comment form here.
    } catch (err) {
      console.error("Signup failed:", err);
    }
  });

  const signupLoginButton = document.createElement("button");
  signupLoginButton.textContent = "Already signed up? Login here!";
  signupLoginButton.classList.add("signup-login-button");
  signupLoginButton.setAttribute("type", "button");

  signupLoginButton.addEventListener("click", () => {
    const loginForm = document.querySelector(".login-form");
    const signupForm = document.querySelector(".signup-form");
    signupForm.style.display = "none";
    loginForm.style.display = "flex";
  });

  modalSignupForm.append(
    signupTitle,
    signupFirstNameLabel,
    signupFirstNameInput,
    signupLastNameLabel,
    signupLastNameInput,
    signupEmailLabel,
    signupEmailInput,
    signupPasswordLabel,
    signupPasswordInput,
    signupConfirmPasswordLabel,
    signupConfirmPasswordInput,
    submitButton,
    signupLoginButton,
  );

  return modalSignupForm
} 