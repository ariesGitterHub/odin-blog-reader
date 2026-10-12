import { login, logout, signup } from "./auth.js";
import { updateProfile, deleteProfile } from "./user.js";
import { createNewBlogComment, editBlogComment, deleteBlogComment } from "./comments.js";
import { renderHeader } from "./components/header.js";
import { state } from "./state.js";
// import { nextDay } from "date-fns";
// import { nextDay } from "date-fns"; Typo???

export function registerEventListeners() {
  const app = document.querySelector("#app");

  const modalContainer = document.querySelector("#modal");

  const loginForm = document.querySelector(".login-form");
  const signupForm = document.querySelector(".signup-form");
  const profileForm = document.querySelector(".profile-form");
  const confirmProfileDeleteForm = document.querySelector(
    ".confirm-profile-delete-form",
  );
  const createCommentForm = document.querySelector(".create-comment-form");
  const updateCommentForm = document.querySelector(".update-comment-form");
  const deleteCommentForm = document.querySelector(".delete-comment-form");

  const errorMessageLogin = document.querySelector(".error-login");
  const errorMessageSignup = document.querySelector(".error-signup");
  const errorMessageProfile = document.querySelector(".error-profile");
  const errorMessageComment = document.querySelector(".error-comment"); // TODO - fix this for delete, need a div that can be seen without a form...

  // Needed for show-password-button
  const passwordLogin = document.querySelector("#password-login");
  const passwordSignup = document.querySelector("#password-signup");
  const passwordProfile = document.querySelector("#password-profile");

  const showPasswordButtonImageLogin = document.querySelector(
    "#show-password-button-image-login",
  );
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

  function openCreateCommentForm(button) {
    const postId = button.dataset.postId;
    const createCommentForm = document.getElementById(postId);

    button.style.display = "none";
    createCommentForm.style.display = "block";

    charCount(postId);
  }

  function closeCreateCommentForm(button) {
    const postId = button.dataset.postId;
    const createCommentForm = document.getElementById(postId);

    const articleContainer = button.closest(".post-article");
    const commentButton = articleContainer.querySelector(".comment-button");

    commentButton.style.display = "block";
    createCommentForm.style.display = "none";
  }

  function openUpdateCommentForm(button) {
    const commentId = button.dataset.commentId;
    const existingComment = document.getElementById(commentId);
    const updateCommentForm = document.getElementById(
      `update-comment-form-${commentId}`,
    );

    existingComment.style.display = "none";
    updateCommentForm.style.display = "block";

    charCount(commentId);
  }

  function closeUpdateCommentForm(button) {
    const commentId = button.dataset.commentId;
    console.log("commentId ===", commentId);
    
    const existingComment = document.getElementById(commentId);
    const updateCommentForm = document.getElementById(
      `update-comment-form-${commentId}`,
    );

    existingComment.style.display = "block";
    updateCommentForm.style.display = "none";
  }

  function charCount(postOrCommentId) {
    const charCountTargetElement = document.getElementById(`textarea-${postOrCommentId}`);
    const maxCharLimitMessage = document.getElementById(`max-char-limit-${postOrCommentId}`);
    
    charCountTargetElement.addEventListener("input", () => {
      const charCount = charCountTargetElement.value.length;
      console.log("Test of charCount...", charCount);
      
      maxCharLimitMessage.textContent = `${charCount}/255 Characters`;
    });
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
          togglePasswordVisibility(
            passwordSignup,
            showPasswordButtonImageSignup,
          );
        }

        if (profileForm.style.display === "flex") {
          togglePasswordVisibility(
            passwordProfile,
            showPasswordButtonImageProfile,
          );
        }
        break;

      case "open-profile-delete-confirmation":
        confirmProfileDeleteForm.style.display = "block";
        break;

      case "close-profile-delete-confirmation":
        confirmProfileDeleteForm.style.display = "none";
        break;

      case "open-create-comment-form":
        openCreateCommentForm(button);
        break;

      case "cancel-create-comment-form":
        closeCreateCommentForm(button);
        break;

      case "open-update-comment-form":
        openUpdateCommentForm(button);
        break;

      case "cancel-update-comment-form":
        closeUpdateCommentForm(button);
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

    // const submitButton = event.submitter
    // console.log("this is submit button --- ", submitButton);

    // const targetSubmitButton = form.querySelector(".submit-comment-button");
    // console.log("I hope to see the unique submit button that I actually click ... ", targetSubmitButton);

    // Multiple forms used in this app
    if (
      form !== loginForm &&
      form !== signupForm &&
      form !== profileForm &&
      form !== confirmProfileDeleteForm &&
      // form !== createCommentForm
      form !== createCommentForm &&
      !form.matches(".create-comment-form") &&
      form !== updateCommentForm &&
      !form.matches(".update-comment-form") &&
      form !== deleteCommentForm &&
      !form.matches(".delete-comment-form")
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
        // console.log("signupData ===", {
        //   firstNameSignupInput,
        //   lastNameSignupInput,
        //   emailSignupInput,
        //   passwordSignupInput,
        // });

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
        console.log("😀Profile update successful:", state.currentUser);
        renderHeader(state.currentUser);
      } catch (err) {
        console.error("Profile update failed:", err);
        errorMessageProfile.textContent = err.message;
      }
    }

    if (form === confirmProfileDeleteForm) {
      try {
        // console.log("Preparing to delete user-->", state.currentUser);

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

        console.log("💀 User account deleted");
      } catch (err) {
        console.error("Profile account deletion failed:", err);
        errorMessageLogin.textContent = err.message;
      }
    }

    // Create Comment
    if (form.matches(".create-comment-form")) {
      const postId = form.id;

      const commentDraftTextArea = document.querySelector(
        `#textarea-${postId}`,
      );
      // console.log("Text area should read: ", commentDraftTextArea.value); // ✅

      const commentDraftMessage = commentDraftTextArea.value;
      // console.log("Better be the same as above log ", commentDraftMessage);

      try {
        const commentData = await createNewBlogComment(
          // userId, Not needed, backend handles this
          postId,
          commentDraftMessage,
        );

        // TODO - TESTING
        location.reload();

        console.log("Comment created", commentData);
      } catch (err) {
        console.error("Comment creation failed:", err);
        errorMessageComment.textContent = err.message;
      }
    }

    // Update Comment
    if (form.matches(".update-comment-form")) {
      const commentId = form.dataset.commentId;
      console.log("form.dataset.commentId === ", commentId);

      const commentUpdateTextArea = document.getElementById(
        `textarea-${commentId}`,
      );
      // console.log("Text area should read: ", commentUpdateTextArea.value); // ✅

      // const maxCharLimitMessage = document.getElementById(`max-char-limit-${commentId}`);

      const commentUpdateMessage = commentUpdateTextArea.value;
      let commentUpdateMessageCount = commentUpdateMessage.length;
      console.log(commentUpdateMessageCount);
      
      // console.log(commentUpdateMessage);

      // console.log("Better be the same as above log ", commentDraftMessage);

      try {
        const commentUpdateData = await editBlogComment(
          // userId, Not needed, backend handles this
          commentId,
          commentUpdateMessage,
        );

        console.log("Comment update", commentUpdateData);

        // TODO - TESTING
        location.reload();

      } catch (err) {
        console.error("Comment update failed:", err);
        errorMessageComment.textContent = err.message;
      }
    }

    // Delete Comment
    // NOTE - these are hard deletes with no warning message
    if (form.matches(".delete-comment-form")) {
      const commentId = form.dataset.commentId;
      console.log("form.dataset.commentId === ", commentId);

      try {
        const deleteCommentData = await deleteBlogComment(
          // userId, Not needed, backend handles this
          commentId,
        );

        console.log("Comment deleted", deleteCommentData);

        // TODO - TESTING
        location.reload();

      } catch (err) {
        console.error("Comment deletion failed:", err);
        errorMessageComment.textContent = err.message;
      }
    }
  });
}
