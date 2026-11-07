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

async function init() {
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
}

init();
