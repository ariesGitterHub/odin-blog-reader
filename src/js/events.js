import { login, logout, signup } from "./auth.js";
import { updateProfile, deleteProfile } from "./user.js";
import { renderHeader } from "./components/header.js";
import { state } from "./state.js";

export function registerEventListeners() {
  const app = document.querySelector("#app");

  const modalContainer = document.querySelector("#modal");

  const loginForm = document.querySelector(".login-form");
  const signupForm = document.querySelector(".signup-form");
  const profileForm = document.querySelector(".profile-form");
  const confirmProfileDeleteForm = document.querySelector(
    ".confirm-profile-delete-form",
  );

  const errorMessageLogin = document.querySelector(".error-login");
  const errorMessageSignup = document.querySelector(".error-signup");
  const errorMessageProfile = document.querySelector(".error-profile");

  // Needed for show-password-button
  const passwordLogin = document.querySelector("#password-login");
  const passwordSignup = document.querySelector("#password-signup");
  const passwordProfile = document.querySelector("#password-profile");

  const showPasswordButtonImageLogin = document.querySelector("#show-password-button-image-login");
  const showPasswordButtonImageSignup = document.querySelector(
    "#show-password-button-image-signup",
  );
  const showPasswordButtonImageProfile = document.querySelector(
    "#show-password-button-image-profile",
  );

  // Needed for case "open-modal-profile" so that known values are show in profile fields
  const firstNameProfileInput = profileForm.querySelector(
    "#first-name-profile",
  );
  const lastNameProfileInput = profileForm.querySelector("#last-name-profile");
  const emailProfileInput = profileForm.querySelector("#email-profile");
  const passwordProfileInput = profileForm.querySelector("#password-profile");
  // const confirmPasswordProfileInput = profileForm.querySelector(
  //   "#confirm-password-profile",
  // );

  // Helper function for showing password in login, signup, and profile update forms; allows me to delete confirm password fields and reduce coding baggage
  function togglePasswordVisibility(passwordInput, eyeImage) {
    console.log("Password input field -->", passwordInput);
    console.log("Show Password Image --> ", eyeImage);
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      // eyeImage.setAttribute("src", "src/assets/eye.svg");
      eyeImage.src = "src/assets/eye.svg";
    } else {
      passwordInput.type = "password";
      // eyeImage.setAttribute("src", "src/assets/eye-off.svg");
      eyeImage.src = "src/assets/eye-off.svg";
    }
  }

  app.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-action]");

    if (!button) return;

    const action = button.dataset.action;

    switch (action) {
      case "open-modal-login":
        // Used to open the modal via the login button, always starts with the login form, other forms should not show
        modalContainer.style.display = "block";

        loginForm.style.display = "flex";
        signupForm.style.display = "none";
        profileForm.style.display = "none";
        confirmProfileDeleteForm.style.display = "none";

        passwordLogin.type = "password";
        break;

      case "signup-instead":
        // Switches to the signup form on the modal while the modal is open, other forms should not show
        loginForm.style.display = "none";
        signupForm.style.display = "flex";
        profileForm.style.display = "none";
        confirmProfileDeleteForm.style.display = "none";
        passwordSignup.type = "password";
        showPasswordButtonImageSignup.src = "src/assets/eye-off.svg";
        loginForm.reset();
        break;

      case "login-instead":
        // Switches back to login form while the modal is open
        loginForm.style.display = "flex";
        signupForm.style.display = "none";
        profileForm.style.display = "none";
        confirmProfileDeleteForm.style.display = "none";
        passwordLogin.type = "password";
        showPasswordButtonImageLogin.src = "src/assets/eye-off.svg";
        signupForm.reset();
        break;

      case "open-modal-profile":
        // Used to open the modal via the profile button, but this time only shows the profile form.
        modalContainer.style.display = "block";

        loginForm.style.display = "none"; // Ensures that login form is not displayed
        signupForm.style.display = "none"; // Ensures that signup form is not displayed
        profileForm.style.display = "flex";
        confirmProfileDeleteForm.style.display = "none"; // Ensures that signup form is not displayed
        passwordProfile.type = "password";
        showPasswordButtonImageProfile.src = "src/assets/eye-off.svg";

        // Populates the profile form fields
        firstNameProfileInput.value = state.currentUser.firstName;
        lastNameProfileInput.value = state.currentUser.lastName;
        emailProfileInput.value = state.currentUser.email;
        // passwordProfileInput.value = "";
        // confirmPasswordProfileInput.value = "";
        passwordProfileInput.value = "";
        break;

      case "close-modal":
        // Closes the modal; this can stay simple with only setting the modal to display = none, as the two modal openers above do the job in directing me to the desired form
        modalContainer.style.display = "none";
        break;

      case "clear-form":
        // Clears all the error messages generically as a catch all button; there was an issue with signup errors persisting
        errorMessageLogin.textContent = "";
        errorMessageSignup.textContent = "";
        errorMessageProfile.textContent = "";

        loginForm.reset();
        signupForm.reset();
        profileForm.reset();
        break;

      case "show-password-toggle":
        if (loginForm.style.display === "flex") {
        togglePasswordVisibility(passwordLogin, showPasswordButtonImageLogin);
        }

        if (signupForm.style.display === "flex") {
        togglePasswordVisibility(passwordSignup, showPasswordButtonImageSignup);
        }

        if (profileForm.style.display === "flex") {
        togglePasswordVisibility(passwordProfile, showPasswordButtonImageProfile);
        }
        break;

      case "open-profile-delete-confirmation":
        confirmProfileDeleteForm.style.display = "block";
        break;

      case "close-profile-delete-confirmation":
        confirmProfileDeleteForm.style.display = "none";
        break;

      case "logout":
        try {
          await logout();

          // Clear the state.currentUser
          state.currentUser = null;
          loginForm.reset();
          renderHeader(state.currentUser);

          // TODO - TESTING
          location.reload();
          
          console.log("✋Logged out, goodbye!");
        } catch (err) {
          console.error("Logout failed:", err);
        }
        break;
    }
  });

  app.addEventListener("submit", async (event) => {
    const form = event.target;

    // The three forms used in this app
    if (
      form !== loginForm &&
      form !== signupForm &&
      form !== profileForm &&
      form !== confirmProfileDeleteForm
    )
      return;

    event.preventDefault();

    if (form === loginForm) {
      const emailLogin = form.querySelector("#email-login").value;
      const passwordLogin = form.querySelector("#password-login").value;

      try {
        const loginData = await login(emailLogin, passwordLogin);

        // Set the state.currentUser
        state.currentUser = loginData.user;
        renderHeader(state.currentUser);

        modalContainer.style.display = "none";
        // TODO - TESTING
        location.reload();

        console.log("🎈Login successful:", state.currentUser);
      } catch (err) {
        console.error("Login failed:", err);
        errorMessageLogin.textContent = err.message;
      }
    }

    if (form === signupForm) {
      const firstNameSignupInput =
        form.querySelector("#first-name-signup").value;
      const lastNameSignupInput = form.querySelector("#last-name-signup").value;
      const emailSignupInput = form.querySelector("#email-signup").value;
      const passwordSignupInput = form.querySelector("#password-signup").value;
      // const confirmPasswordSignupInput = form.querySelector(
      //   "#confirm-password-signup",
      // );

      // NOTE - confirmPasswordSignupInput is unlike the other variables above because "setCustomValidity" and the other methods below need to work on the actual DOM element and not that DOM element's value
      // const confirmPasswordValue = confirmPasswordSignupInput.value;

      // if (passwordSignupInput !== confirmPasswordValue) {
      //   confirmPasswordSignupInput.setCustomValidity("Passwords do not match.");
      //   confirmPasswordSignupInput.reportValidity();
      //   return;
      // }

      // confirmPasswordSignupInput.setCustomValidity("");

      try {
        console.log("signupData ===", {
          firstNameSignupInput,
          lastNameSignupInput,
          emailSignupInput,
          passwordSignupInput,
        });

        const signupData = await signup(
          firstNameSignupInput,
          lastNameSignupInput,
          emailSignupInput,
          passwordSignupInput,
        );

        // Below immediately takes the signup person to the login form so they can actually log with the new signup info they created
        loginForm.style.display = "flex";
        signupForm.style.display = "none";
        profileForm.style.display = "none"; // Ensures that this is not displayed
      } catch (err) {
        console.error("Signup failed:", err);
        errorMessageSignup.textContent = err.message;
      }
    }

    if (form === profileForm) {
      // Again, the below two variable are handled this way because "setCustomValidity" and the others need actual DOM elements
      // let passwordProfileValue = passwordProfileInput.value;
      // let confirmPasswordProfileValue = confirmPasswordProfileInput.value;

      // if (passwordProfileValue !== "" || confirmPasswordProfileValue !== "") {
      //   if (passwordProfileValue !== confirmPasswordProfileValue) {
      //     confirmPasswordProfileInput.setCustomValidity(
      //       "Passwords do not match.",
      //     );
      //     confirmPasswordProfileInput.reportValidity();
      //     return;
      //   }

      //   confirmPasswordProfileInput.setCustomValidity("");
      // }

      try {
        // NOTE - this is the correct data object shape that the backend needs AND expects
        const profileData = await updateProfile({
          first_name: firstNameProfileInput.value,
          last_name: lastNameProfileInput.value,
          email: emailProfileInput.value,
          // password: passwordProfileValue,
          password: passwordProfileInput.value,
        });

        modalContainer.style.display = "none";

        // Update the state.currentUser
        state.currentUser = profileData.user;
        console.log("😇Profile update successful:", state.currentUser);
        renderHeader(state.currentUser);
      } catch (err) {
        console.error("Profile update failed:", err);
        errorMessageProfile.textContent = err.message;
      }
    }

    if (form === confirmProfileDeleteForm) {
      try {
        console.log("Preparing to delete user-->", state.currentUser);

        const confirmDeletion = await deleteProfile();

        // Reset the state.currentUser
        // TODO - double check to ensure user  is deleted from db
        state.currentUser = null;
        renderHeader(state.currentUser);

        // Reset modalContainer and confirmProfileDeleteForm to display = none
        modalContainer.style.display = "none";
        confirmProfileDeleteForm.style.display = "none";

        errorMessageLogin.textContent = "";
        errorMessageSignup.textContent = "";
        errorMessageProfile.textContent = "";

        // Reset all forms
        loginForm.reset();
        signupForm.reset();
        profileForm.reset();

        console.log("User account deleted");
      } catch (err) {
        console.error("Profile account deletion failed:", err);
        errorMessageLogin.textContent = err.message;
      }
    }
  });
}
