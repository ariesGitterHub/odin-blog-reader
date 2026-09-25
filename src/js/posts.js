// fetch posts
// render posts

import { get } from "./api.js";

export async function getPublishedBlogPosts() {
  return get("/api/posts/public");
}

export async function renderPosts(posts) {
  const postsContainer = document.querySelector("#posts");

  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const article = document.createElement("article");

    article.innerHTML = `
      <h2>${post.postTitle}</h2>
      <p>${post.postMessage}</p>
    `;

    postsContainer.append(article);
  });
}