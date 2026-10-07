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
  const profileForm = renderProfileForm();

  modalContent.append(buttonContainer, loginForm, signupForm, profileForm);
  modalContainer.append(modalContent);
}

function renderLoginForm() {
  const modalLoginForm = createElement("form", "", "login-form");

  const title = createElement("h1", "🖳 Login");

  const errorMessage = createElement("div", "", "error-login", "error-message");

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

  const buttonRow = createElement(
    "div",
    "",
    "row-container",
    "full-width",
    "gap",
  );

  const submitButton = createButton(
    "submit",
    "Submit",
    // "submit-login",
    "",
    "full-width",
  );
  const clearButton = createButton(
    "button",
    "Clear",
    "clear-form",
    "full-width",
  );

  buttonRow.append(submitButton, clearButton);

  const oopsNeedSignupButton = createButton(
    "button",
    "*No account? Click to sign up!",
    "signup-instead",
    "full-width",
  );

  modalLoginForm.append(
    title,
    errorMessage,
    emailLabel,
    emailInput,
    passwordLabel,
    passwordInput,
    buttonRow,
    oopsNeedSignupButton,
  );

  return modalLoginForm;
}

function renderSignupForm() {
  const modalSignupForm = createElement("form", "", "signup-form");

  const title = createElement("h1", "🖳 Sign Up");

  const errorMessage = createElement(
    "div",
    "",
    "error-signup",
    "error-message",
  );

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

  const confirmPasswordLabel = createLabel(
    "confirm-password-signup",
    "Confirm-Password",
  );
  const confirmPasswordInput = createInput(
    "confirm-password-signup",
    "password",
    "confirm_password",
    "Re-enter password.",
    true,
  );

  const buttonRow = createElement(
    "div",
    "",
    "row-container",
    "full-width",
    "gap",
  );

  // TODO - instead take the user immediately to the login page after signing up!
  const submitButton = createButton(
    "submit",
    "Submit",
    // "submit-signup",
    "",
    "full-width",
  );

  const clearButton = createButton(
    "button",
    "Clear",
    "clear-form",
    "full-width",
  );

  buttonRow.append(submitButton, clearButton);

  const oopsNeedLoginButton = createButton(
    "button",
    "*Already have an account? Please click here to login.",
    "login-instead",
    "full-width",
  );

  modalSignupForm.append(
    title,
    errorMessage,
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
    buttonRow,
    oopsNeedLoginButton,
  );

  return modalSignupForm;
}

function renderProfileForm() {
  const modalProfileForm = createElement("form", "", "profile-form");

  const title = createElement("h1", "🖳 Edit Profile");

  const errorMessage = createElement(
    "div",
    "",
    "error-profile",
    "error-message",
  );

  const firstNameLabel = createLabel("first-name-profile", "First Name");
  const firstNameInput = createInput(
    "first-name-profile",
    "text",
    "first_name",
    "",
    // true,
  );

  const lastNameLabel = createLabel("last-name-profile", "Last Name");
  const lastNameInput = createInput(
    "last-name-profile",
    "text",
    "last_name",
    "",
    // true,
  );

  const emailLabel = createLabel("email-profile", "Email");
  const emailInput = createInput(
    "email-profile",
    "email",
    "email",
    "",
    // true,
  );

  const passwordLabel = createLabel("password-profile", "New Password");
  const passwordInput = createInput(
    "password-profile",
    "password",
    "password",
    "",
    // true,
  );

  const confirmPasswordLabel = createLabel(
    "confirm-password-profile",
    "Confirm New Password",
  );
  const confirmPasswordInput = createInput(
    "confirm-password-profile",
    "password",
    "confirm_password",
    "",
    // true,
  );

  const buttonRow = createElement(
    "div",
    "",
    "row-container",
    "full-width",
    "gap",
  );

  const submitButton = createButton( 
    "submit",
    "Submit",
    // "submit-profile",
    "",
    "full-width",
  );

  const clearButton = createButton(
    "button",
    "Clear",
    "clear-form",
    "full-width",
  );

  buttonRow.append(submitButton, clearButton);

  // const oopsNeedLoginButton = createButton(
  //   "button",
  //   "*Already have an account? Please click here to login.",
  //   "login-instead",
  //   "full-width",
  // );

  modalProfileForm.append(
    title,
    errorMessage,
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
    buttonRow,
    // oopsNeedLoginButton,
  );

  return modalProfileForm;
}
