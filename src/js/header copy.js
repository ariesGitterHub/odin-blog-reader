import { logout } from "./auth.js"
// import { renderPosts } from "./posts.js";

export function renderHeader(currentUser) {
  const headerContainer = document.querySelector("header");

  // Removes the existing child elements before you build the new header, compare with innerHTML
  headerContainer.replaceChildren();

  const rowContainerTop = document.createElement("div");
  rowContainerTop.classList.add(
    "row-container",
    "justify-content-space-between",
  );

  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "🖳 Bloggie";

  const headerButtonContainer = document.createElement("div");
  headerButtonContainer.classList.add("header-button-container");

  const headerLoginButton = document.createElement("button");
  headerLoginButton.textContent = "Login";
  headerLoginButton.classList.add("login-button");
  headerLoginButton.setAttribute("type", "button");

  const headerLogoutButton = document.createElement("button");
  headerLogoutButton.textContent = "Logout";
  headerLogoutButton.classList.add("logout-button");
  headerLogoutButton.setAttribute("type", "button");

  const headerProfileButton = document.createElement("button");
  headerProfileButton.textContent = "Profile";
  headerProfileButton.classList.add("profile-button");
  headerProfileButton.setAttribute("type", "button");

  // headerButtonContainer.append(
  //   headerLoginButton,
  //   headerLogoutButton,
  //   headerProfileButton,
  // );

  // NOTE - use below rather than using the .hidden class and adding more stuff to the DOM
  if (currentUser) {
    headerButtonContainer.append(headerLogoutButton, headerProfileButton);
  } else {
    headerButtonContainer.append(headerLoginButton);
  }

  rowContainerTop.append(headerTitle, headerButtonContainer);
  headerContainer.append(rowContainerTop);

  const rowContainerBottom = document.createElement("div");
  rowContainerBottom.classList.add("row-container", "logged-in");
  const currentLoginMessage = document.createElement("p");

  rowContainerBottom.append(currentLoginMessage);
  headerContainer.append(rowContainerBottom);

  if (currentUser) {
    // headerLoginButton.style.display = "none";
    // headerLogoutButton.style.display = "block";
    // headerProfileButton.style.display = "block";
    currentLoginMessage.textContent = `Logged in as "${currentUser.email}"`;
  } else {
    // headerLoginButton.style.display = "block";
    // headerLogoutButton.style.display = "none";
    // headerProfileButton.style.display = "none";
    currentLoginMessage.textContent = `Please log in to comment.`;
  }

  if (headerLogoutButton) {
    headerLogoutButton.addEventListener("click", async (event) => {
      event.preventDefault;
      try {
        await logout();
        // NOTE - update the header to reflect the logged-out state
        // renderHeader(null);

        currentUser = null;
        renderHeader(currentUser);
        console.log("Null? Current User = ", currentUser);
      } catch (err) {
        console.error("Logout failed:", err);
      }

      // renderHeader(null);
    });
  }
}