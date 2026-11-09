import "./css/styles.css";
import { state } from "./js/state.js";
import { getCsrfToken } from "./js/api.js";
import { registerEventListeners } from "./js/events.js";
import { getCurrentUser } from "./js/auth.js";
import { getPublishedBlogPosts } from "./js/posts.js";
import { renderHeader } from "./js/components/header.js";
import { renderPosts } from "./js/components/posts-view.js";
import { renderFooter } from "./js/components/footer.js";
import { renderModal } from "./js/components/modal.js";
import { createElement } from "./js/templates.js";

async function init() {
  const headerContainer = document.querySelector("header");
  const postContainer = document.querySelector("#posts");
  const loadingWaitMessage = createElement("p", "Waking up server, connecting to the blog...", "loading-wait-message");
  const loadingErrorMessage = createElement(
    "p",
    "Unable to connect to the blog. Please try again.",
    "loading-error-message"
  );

  headerContainer.append(loadingWaitMessage);

  try {
    // NEW, add CSRF Token... await getCsrfToken() executes before users can submit login, signup, comment, or other state-changing requests.
    await getCsrfToken();

    // NOTE - as per state.js, state.currentUser starts as null, and both state.posts and state.users starts as = []

    const userData = await getCurrentUser();
    state.currentUser = userData.user;

    renderHeader(state.currentUser);

    const postData = await getPublishedBlogPosts();
    state.posts = postData.posts;

    renderPosts(state.posts, state.currentUser);

    renderModal();

    renderFooter();

    registerEventListeners();

    // headerContainer.remove(loadingWaitMessage); // This deletes the header in normal circumstances

  } catch (err) {
    console.error("Blog initialization failed:", err);

    headerContainer.remove(loadingWaitMessage);
    postContainer.append(loadingErrorMessage);
  }
}

init();
