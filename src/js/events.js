import { logout, login } from "./auth.js";
import { renderHeader } from "./components/header.js";
import { state } from "./state.js";

export function registerEventListeners() {
  const app = document.querySelector("#app");

  app.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-action]");

    if (!button) return;

    const action = button.dataset.action;

    const modalContainer = document.querySelector("#modal");
    const loginForm = document.querySelector(".login-form");
    const signupForm = document.querySelector(".signup-form");

    switch (action) {
      case "logout":
        try {
          await logout();
          state.currentUser = null;
          renderHeader(state.currentUser);
          // console.log("💀")
        } catch (err) {
          console.error("Logout failed:", err);
        }
        break;

      case "login":
        // Open login form on modal.
        modalContainer.style.display = "block";
        // console.log("🔥")
        break;

      case "signup-instead":
        // Open signup form on modal/close login form.
        loginForm.style.display = "none";
        signupForm.style.display = "flex";
        console.log("😸")
        break;

      case "login-instead":
        // Open signup form on modal/close login form.
        loginForm.style.display = "flex";
        signupForm.style.display = "none";
        console.log("😸")
        break;

      case "profile":
        // Open profile UI.
        break;

      case "close-modal":
        // Close modal.
        modalContainer.style.display = "none";
        break;

      case "signup":
        // Open profile UI.
        break;
    }
  });
}
