// fetch posts
// render posts

import { get } from "./api.js";
import { formatExactDate } from "../utils/format-date.utils.js";

export async function getPublishedBlogPosts() {
  return get("/api/posts/public");
}

export function renderPosts(posts) {
  const postsContainer = document.querySelector("#posts-container");

  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postArticle = document.createElement("article");
    postArticle.classList.add("post-article");

    const postTitle = document.createElement("h2");
    postTitle.textContent = post.postTitle;

    const postCreatedAt = document.createElement("p"); 
    postCreatedAt.classList.add("time-stamp") 
    const postUpdatedAt = document.createElement("p");
    postUpdatedAt.classList.add("time-stamp"); 

    if (post.createdAt === post.updatedAt) {
      postCreatedAt.textContent = `Created: ${formatExactDate(post.createdAt)}`;
    } else {
      // postCreatedAt.textContent = `Created: ${formatExactDate(post.createdAt)}`;
      postUpdatedAt.textContent = `Updated: ${formatExactDate(post.updatedAt)}`;
    }

    const commentButton = document.createElement("button");
    commentButton.classList.add("comment-button");
    commentButton.textContent = "Comment"

    const hrLine = document.createElement("hr");
    hrLine.classList.add("hr-line");

    const postMessage = document.createElement("p");
    postMessage.classList.add("post-message")
    postMessage.textContent = post.postMessage;

    postArticle.append(
      postTitle,
      postCreatedAt,
      postUpdatedAt,
      commentButton,
      hrLine,
      postMessage,
    );    

    post.comments.forEach((comment) => {
      const postArticleComment = document.createElement("article");
      postArticleComment.classList.add("post-article-comment");

      const postCommentAuthor = document.createElement("h3");
      postCommentAuthor.textContent = `${comment.user.firstName} ${comment.user.lastName}`;   

      const postCommentCreatedAt = document.createElement("p");
      postCommentCreatedAt.classList.add("time-stamp"); 
      const postCommentUpdatedAt = document.createElement("p");
      postCommentUpdatedAt.classList.add("time-stamp"); 

      if (comment.createdAt === comment.updatedAt) {
        postCommentCreatedAt.textContent = `Created: ${formatExactDate(comment.createdAt)}`; 
      } else {
        // postCommentCreatedAt.textContent = `Created: ${formatExactDate(comment.createdAt)}`; 
        postCommentUpdatedAt.textContent = `Updated: ${formatExactDate(comment.updatedAt)}`;  
      }    

      const postCommentMessage = document.createElement("p");
      postCommentMessage.classList.add("post-comment-message");
      postCommentMessage.textContent = comment.commentMessage;   
      
      postArticleComment.append(
        postCommentAuthor,
        postCommentCreatedAt,
        postCommentUpdatedAt,
        postCommentMessage,
      );

      postArticle.append(postArticleComment)
    })

    postsContainer.append(postArticle);
  });
}