import {
  createButton,
  createLabel,
  createInput,
  createElement,
} from "../templates.js";

export function renderModal() {
  const modalContainer = document.querySelector("#modal");

  // Clear previous #modal
  modalContainer.replaceChildren();

  const modalContent = createElement("div", "", "modal-content");

  const buttonContainer = createElement(
    "div",
    "",
    "row-container",
    "justify-content-end",
  );

  const closeModalButton = createButton(
    "button",
    "✖",
    "close-modal",
    "close-modal-button",
  );

  buttonContainer.append(closeModalButton);

  const loginForm = renderLoginForm();
  const signupForm = renderSignupForm();

  modalContent.append(
    buttonContainer,
    loginForm,
    signupForm
  );
  modalContainer.append(modalContent);
}

function renderLoginForm() {
  const modalLoginForm = createElement("form", "", "login-form");

  const title = createElement("h1", "🖳 Login");

  const emailLabel = createLabel("email-login", "Email");
  const emailInput = createInput(
    "email-login",
    "email",
    "email",
    "Enter email address.",
    true,
  );

  const passwordLabel = createLabel("password-login", "Password");
  const passwordInput = createInput(
    "password-login",
    "password",
    "password",
    "Enter password.",
    true,
  );

  const submitButton = createButton("submit", "Submit", "submit-login");
  const oopsNeedSignupButton = createButton(
    "button",
    "*No account? Click to sign up!",
    "signup-instead",
    "login-signup-button",
  );

  modalLoginForm.append(
    title,
    emailLabel,
    emailInput,
    passwordLabel,
    passwordInput,
    submitButton,
    oopsNeedSignupButton,
  );

  return modalLoginForm;
}

function renderSignupForm() {
  const modalSignupForm = createElement("form", "", "signup-form");

  const title = createElement("h1", "🖳 Sign Up");

  const firstNameLabel = createLabel("first-name-signup", "First Name");
  const firstNameInput = createInput(
    "first-name-signup",
    "text",
    "first_name",
    "Enter first name.",
    true,
  );

  const lastNameLabel = createLabel("last-name-signup", "Last Name");
  const lastNameInput = createInput(
    "last-name-signup",
    "text",
    "last_name",
    "Enter last name.",
    true,
  );

  const emailLabel = createLabel("email-signup", "Email");
  const emailInput = createInput(
    "email-signup",
    "email",
    "email",
    "Enter email address.",
    true,
  );

  const passwordLabel = createLabel("password-signup", "Password");
  const passwordInput = createInput(
    "password-signup",
    "password",
    "password",
    "Enter password.",
    true,
  );

  const confirmPasswordLabel = createLabel("confirm-password-signup", "Password");
  const confirmPasswordInput = createInput(
    "password-signup",
    "password",
    "confirm_password",
    "Re-enter password.",
    true,
  );

  // TODO - instead take the user immediately to the login page after signing up!
  const submitButton = createButton("submit", "Submit", "submit-signup");

  const oopsNeedLoginButton = createButton(
    "button",
    "*Already have an account? Please click here to login.",
    "login-instead",
    "signup-login-button",
  );

  modalSignupForm.append(
    title,
    firstNameLabel,
    firstNameInput,
    lastNameLabel,
    lastNameInput,
    emailLabel,
    emailInput,
    passwordLabel,
    passwordInput,
    confirmPasswordLabel,
    confirmPasswordInput,
    submitButton,
    oopsNeedLoginButton,
  );

  return modalSignupForm;
}
