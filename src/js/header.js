export function renderHeader() {
  const headerContainer = document.querySelector("header");

  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "🖳 Bloggie";

  const headerButtonContainer = document.createElement("div");
  headerButtonContainer.classList.add("header-button-container");

  const headerButtonLogin = document.createElement("button");
  headerButtonLogin.textContent = "Login";
  headerButtonLogin.classList.add("header-button");

  const headerButtonProfile = document.createElement("button");
  headerButtonProfile.textContent = "Profile";
  headerButtonProfile.classList.add("header-button");

  headerButtonContainer.append(headerButtonLogin, headerButtonProfile);

  headerContainer.append(headerTitle, headerButtonContainer);
}