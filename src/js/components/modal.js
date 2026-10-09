import {
  createButton,
  createLabel,
  createInput,
  createElement,
  createImage,
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
  const profileDeleteForm = renderProfileDeleteForm();

  modalContent.append(
    buttonContainer,
    loginForm,
    signupForm,
    profileForm,
    profileDeleteForm,
  );
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
  emailInput.setAttribute("autocomplete", "username");

  const passwordLabel = createLabel("password-login", "Password");

  const passwordRow = createElement("div", "", "row-container", "password-row");

  const passwordInput = createInput(
    "password-login",
    "password",
    "password",
    "Enter password.",
    true,
  );
  passwordInput.setAttribute("autocomplete", "current-password");

  const showPasswordButton = createButton(
    "button",
    "",
    "show-password-toggle",
    "show-password-button",
  );

  const showPasswordButtonImage = createImage(
    "src/assets/eye-off.svg",
    "an eye icon that toggles open and closed",
    "show-password-button-image",
  );

  showPasswordButtonImage.setAttribute(
    "id",
    "show-password-button-image-login",
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

  showPasswordButton.append(showPasswordButtonImage);

  passwordRow.append(passwordInput, showPasswordButton);

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
    // passwordInput,
    passwordRow,
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
  emailInput.setAttribute("autocomplete", "username");

  const passwordLabel = createLabel("password-signup", "Password");

  const passwordRow = createElement("div", "", "row-container", "password-row");

  const passwordInput = createInput(
    "password-signup",
    "password",
    "password",
    "Enter password.",
    true,
  );
  passwordInput.setAttribute("autocomplete", "new-password");

  const showPasswordButton = createButton(
    "button",
    "",
    "show-password-toggle",
    "show-password-button",
  );

  const showPasswordButtonImage = createImage(
    "src/assets/eye-off.svg",
    "an eye icon that toggles open and closed",
    "show-password-button-image",
  );

  showPasswordButtonImage.setAttribute(
    "id",
    "show-password-button-image-signup",
  );

  // const confirmPasswordLabel = createLabel(
  //   "confirm-password-signup",
  //   "Confirm-Password",
  // );

  // const confirmPasswordInput = createInput(
  //   "confirm-password-signup",
  //   "password",
  //   "confirm_password",
  //   "Re-enter password.",
  //   true,
  // );

  // confirmPasswordInput.setAttribute("autocomplete", "new-password");

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

  showPasswordButton.append(showPasswordButtonImage);

  passwordRow.append(passwordInput, showPasswordButton);

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
    // passwordInput,
    passwordRow,
    // confirmPasswordLabel,
    // confirmPasswordInput,
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
  emailInput.setAttribute("autocomplete", "username");

  const passwordLabel = createLabel("password-profile", "New Password");

  const passwordRow = createElement("div", "", "row-container", "password-row");

  const passwordInput = createInput(
    "password-profile",
    "password",
    "password",
    "",
    // true,
  );

  passwordInput.setAttribute("autocomplete", "new-password");

  const showPasswordButton = createButton(
    "button",
    "",
    "show-password-toggle",
    "show-password-button",
  );

  const showPasswordButtonImage = createImage(
    "src/assets/eye-off.svg",
    "an eye icon that toggles open and closed",
    "show-password-button-image",
  );

  showPasswordButtonImage.setAttribute(
    "id",
    "show-password-button-image-profile",
  );

  // const confirmPasswordLabel = createLabel(
  //   "confirm-password-profile",
  //   "Confirm New Password",
  // );

  // const confirmPasswordInput = createInput(
  //   "confirm-password-profile",
  //   "password",
  //   "confirm_password",
  //   "",
  //   // true,
  // );

  // confirmPasswordInput.setAttribute("autocomplete", "new-password");

  const buttonRow = createElement(
    "div",
    "",
    "row-container",
    "full-width",
    "gap",
  );

  const submitButton = createButton("submit", "Submit", "", "full-width");

  const clearButton = createButton(
    "button",
    "Clear",
    "clear-form",
    "full-width",
  );

  const deleteProfileButton = createButton(
    "button",
    "Delete",
    "open-profile-delete-confirmation",
    "full-width",
  );

  showPasswordButton.append(showPasswordButtonImage);

  passwordRow.append(passwordInput, showPasswordButton);

  buttonRow.append(submitButton, clearButton, deleteProfileButton);

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
    // passwordInput,
    passwordRow,
    // confirmPasswordLabel,
    // confirmPasswordInput,
    buttonRow,
    // oopsNeedLoginButton,
  );

  return modalProfileForm;
}

function renderProfileDeleteForm() {
  // NEW FORM! This is hidden until deleteProfileButton is clicked
  const confirmProfileDeleteForm = createElement(
    "form",
    "",
    "confirm-profile-delete-form",
  );

  const brSpace = createElement("br", "");

  const deleteProfileMessage = createElement(
    "p",
    "Are you sure that you wish to delete your account? This action is permanent.",
    "error-message",
  );

  // Submits account profile deletion
  const confirmProfileDeleteButton = createButton(
    "submit",
    "Confirm",
    "",
    "full-width",
  );

  // Cancels account profile deletion
  const cancelProfileDeleteButton = createButton(
    "button",
    "Cancel",
    "close-profile-delete-confirmation",
    "full-width",
  );

  const buttonRow = createElement(
    "div",
    "",
    "row-container",
    "full-width",
    "gap",
  );

  buttonRow.append(confirmProfileDeleteButton, cancelProfileDeleteButton);

  confirmProfileDeleteForm.append(brSpace, deleteProfileMessage, buttonRow);

  return confirmProfileDeleteForm;
}
