import "./css/styles.css";
import { getPublishedBlogPosts, renderPosts } from "./js/posts.js";

async function init() {
  const data = await getPublishedBlogPosts();

  renderPosts(data.posts);

  console.log(data.posts);
}

init();
