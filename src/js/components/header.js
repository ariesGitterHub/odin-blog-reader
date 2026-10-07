import { createButton, createElement } from "../templates.js";

export function renderHeader(currentUser) {
  const headerContainer = document.querySelector("header");

  // Clear the previous #header.
  headerContainer.replaceChildren();

  const topRow = createElement(
    "div",
    "",
    "row-container",
    "justify-content-space-between",
  );

  const title = createElement("h1", "🖳 Bloggie");

  const buttonContainer = createElement("div", "", "basic-container");

  // Choose the appropriate authentication controls.
  const authControls = currentUser
    ? [
        createButton("button", "Logout", "logout", "logout-button"),
        createButton("button", "Profile", "open-modal-profile", "profile-button"),
      ]
    : [createButton("button", "Login", "open-modal-login", "login-button")];

  buttonContainer.append(...authControls);
  topRow.append(title, buttonContainer);

  // Create the login status message.
  const bottomRow = createElement("div", "", "row-container", "logged-in");

  const loginMessage = createElement(
    "p",
    currentUser
      ? // ? `Logged in as "${currentUser.email}"`
        `Welcome back ${currentUser.firstName} ${currentUser.lastName}!`
      : "Please log in to comment.",
  );

  bottomRow.append(loginMessage);

  headerContainer.append(topRow, bottomRow);
}
