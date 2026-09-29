import "./css/styles.css";
import { getPublishedBlogPosts, renderPosts } from "./js/posts.js";
import { renderFooter } from "./js/footer.js"

async function init() {
  const data = await getPublishedBlogPosts();

  renderPosts(data.posts);
  renderFooter();

  // console.log(data.posts);
}

init();
