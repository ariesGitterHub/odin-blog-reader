// Import these render form functions where needed

import {
  createButton,
  createLabel,
  createInput,
  createElement,
  createImage,
} from "../templates.js";

export function renderLoginForm() {
  const loginForm = createElement("form", "", "login-form");

  const title = createElement("h1", "🖳 Login");

  const errorMessage = createElement("div", "", "error-login", "error-message");

  const emailLabel = createLabel("email-login", "Email");
  const emailInput = createInput(
    "email-login",
    "email",
    "email",
    "Enter email address",
    true,
  );
  emailInput.setAttribute("autocomplete", "username");

  const passwordLabel = createLabel("password-login", "Password");

  // const passwordRow = createElement("div", "", "row-container", "password-row");
  const passwordRow = createElement("div", "", "row-container");

  const passwordInput = createInput(
    "password-login",
    "password",
    "password",
    "Enter password",
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
    "margin-top-bottom",
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

  loginForm.append(
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

  return loginForm;
}

export function renderSignupForm() {
  const signupForm = createElement("form", "", "signup-form");

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
    "Enter first name",
    true,
  );

  const lastNameLabel = createLabel("last-name-signup", "Last Name");
  const lastNameInput = createInput(
    "last-name-signup",
    "text",
    "last_name",
    "Enter last name",
    true,
  );

  const emailLabel = createLabel("email-signup", "Email");
  const emailInput = createInput(
    "email-signup",
    "email",
    "email",
    "Enter email address",
    true,
  );
  emailInput.setAttribute("autocomplete", "username");

  const passwordLabel = createLabel("password-signup", "Password");

  // const passwordRow = createElement("div", "", "row-container", "password-row");
  const passwordRow = createElement("div", "", "row-container");

  const passwordInput = createInput(
    "password-signup",
    "password",
    "password",
    "Enter password",
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
    "margin-top-bottom",
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

  signupForm.append(
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

  return signupForm;
}

export function renderProfileForm() {
  const profileForm = createElement("form", "", "profile-form");

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

  // const passwordRow = createElement("div", "", "row-container", "password-row");
  const passwordRow = createElement("div", "", "row-container");

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
    // "margin-top-bottom",
    "margin-top",
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

  profileForm.append(
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

  return profileForm;
}

export function renderConfirmProfileDeleteForm() {
  // NEW FORM! This is hidden until deleteProfileButton is clicked
  const confirmProfileDeleteForm = createElement(
    "form",
    "",
    "confirm-profile-delete-form",
  );

  const hrLineTop = createElement("hr", "", "hr-line-warning");

  const deleteProfileMessage = createElement(
    "p",
    "Are you sure that you wish to delete your account? This action is permanent.",
    "error-form",
    "error-message",
  );

  const hrLineBottom = createElement("hr", "", "hr-line-warning");


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

  confirmProfileDeleteForm.append(
    hrLineTop,
     deleteProfileMessage,
     hrLineBottom,
      buttonRow
    );

  return confirmProfileDeleteForm;
}

export function renderCreateCommentForm(postId) {
  const createCommentForm = createElement("form", "", "create-comment-form");
  createCommentForm.id = postId;

  const createCommentDiv = createElement("div", "", "create-comment-div");

  // const errorMessage = createElement(
  //   "div",
  //   "",
  //   "error-update-comment",
  //   "error-form",
  //   "error-message",
  // );

  const messageRow = createElement(
    "div",
    "",
    "row-container",
    "gap",
    "justify-content-start",
    // "user-message-container",
  );

  const maxCharLimitMessage = createElement("p", "255 Character Limit", "max-char-limit");
  maxCharLimitMessage.id = `max-char-limit-${postId}`;

  const textArea = createElement("textarea", "");
  textArea.id = `textarea-${postId}`;
  textArea.name = "comment_message";
  textArea.maxLength = 255;

  const buttonRow = createElement(
    "div",
    "",
    "row-container",
    "justify-content-end",
  );

  const submitButton = createButton(
    "submit",
    "Submit",
    "",
    "submit-comment-button",
  );
  submitButton.dataset.postId = postId;

  const cancelButton = createButton(
    "button",
    "Cancel",
    "cancel-create-comment-form",
    "cancel-comment-button",
  );

  cancelButton.dataset.postId = postId;

  messageRow.append(maxCharLimitMessage);

  buttonRow.append(submitButton, cancelButton);
  createCommentDiv.append(
    // errorMessage,
    messageRow,
     textArea,
      buttonRow
    );
  createCommentForm.append(createCommentDiv);

  return createCommentForm;
}

export function renderUpdateCommentForm(commentId, commentMessage) {
  const updateCommentForm = createElement("form", "", "update-comment-form");
  updateCommentForm.id = `update-comment-form-${commentId}`;
  updateCommentForm.dataset.commentId = commentId;
  // updateCommentForm.id = commentId;

  const updateCommentDiv = createElement("div", "", "update-comment-div");

  // const errorMessage = createElement(
  //   "div",
  //   "",
  //   "error-update-comment",
  //   "error-form",
  //   "error-message",
  // );

  const messageRow = createElement(
    "div",
    "",
    "row-container",
    "gap",
    "justify-content-start",
    // "user-message-container",
  );

  const maxCharLimitMessage = createElement("p", "255 Character Limit", "max-char-limit");
  maxCharLimitMessage.id = `max-char-limit-${commentId}`;

  const textArea = createElement("textarea", "");
  textArea.id = `textarea-${commentId}`;
  textArea.name = "comment_message";
  textArea.value = commentMessage
  textArea.maxLength = 255;

  const buttonRow = createElement(
    "div",
    "",
    "row-container",
    "justify-content-end",
  );

  const submitButton = createButton(
    "submit",
    "Update",
    "",
    "update-comment-button",
  );

  submitButton.dataset.commentId = commentId;

  const cancelButton = createButton(
    "button",
    "Cancel",
    "cancel-update-comment-form",
    "cancel-update-comment-button",
  );

  cancelButton.dataset.commentId = commentId;

  messageRow.append(maxCharLimitMessage);

  buttonRow.append(submitButton, cancelButton);

  updateCommentDiv.append(
    // errorMessage,
    messageRow,
     textArea,
      buttonRow
    );
  updateCommentForm.append(updateCommentDiv);

  return updateCommentForm;
}

export function renderDeleteCommentForm(commentId) {
  const deleteCommentForm = createElement("form", "", "delete-comment-form");
  deleteCommentForm.dataset.commentId = commentId;
  // NOTE - can't use createButton here, as this --> "" , is not working to prevent data-action from filling in the next item into its place
  // const deleteCommentButton = createButton(
  //   "button",
  //   "Delete",
  //   // "delete-comment",
  //   "",
  //   "delete-comment-button",
  // );

  const deleteCommentButton = document.createElement("button");
  deleteCommentButton.textContent = "Delete";
  deleteCommentButton.classList.add("delete-comment-button");
  deleteCommentButton.dataset.commentId = commentId;

  deleteCommentForm.append(deleteCommentButton);

  return deleteCommentForm;
}