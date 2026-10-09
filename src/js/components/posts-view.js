import { createButton, createElement } from "../templates.js";
import { formatExactDate } from "../../utils/format-date.utils.js";
// import { state } from "../state.js";

export function renderPosts(posts, currentUser) {
  console.log("currentUser ==> ", currentUser);

  const postsContainer = document.querySelector("#posts");

  postsContainer.replaceChildren();

  posts.forEach((post) => {
    const postArticle = renderPost(post, currentUser);
    postsContainer.append(postArticle);
  });
}

function renderPost(post, currentUser) {
  const postArticle = createElement("article", "", "post-article");

  const postTitle = createElement("h2", post.postTitle);

  const postTimestamp = renderTimestamp(post.createdAt, post.updatedAt);

  const postMessage = createElement("p", post.postMessage, "post-message");

  const hrLine = createElement("hr", "", "hr-line-post");

  postArticle.append(postTitle, postTimestamp, hrLine, postMessage);

  if (currentUser) {
    const commentButtonRow = createElement(
      "div",
      "",
      "row-container",
      "justify-content-start",
      "margin-post-button-rows",
    );

    const commentButton = createButton(
      "button",
      "Comment",
      "create-comment",
      "comment-button",
    );

    // Identify which post the button belongs to.
    commentButton.dataset.postId = post.id;

    commentButtonRow.append(commentButton)
    postArticle.append(commentButtonRow);
  }

  post.comments.forEach((comment) => {
    const commentElement = renderComment(comment, currentUser);
    postArticle.append(commentElement);
  });

  return postArticle;
}

function renderComment(comment, currentUser) {
  const commentArticle = createElement("article", "", "post-article-comment");

  const authorName = `${comment.user.firstName} ${comment.user.lastName}`;
  console.log("Comment shape ==>", comment);

  const commentAuthor = createElement("h3", authorName);

  const commentTimestamp = renderTimestamp(
    comment.createdAt,
    comment.updatedAt,
  );

  const hrLine = createElement("hr", "", "hr-line-comment");

  const commentMessage = createElement(
    "p",
    comment.commentMessage,
    "post-comment-message",
  );

  commentArticle.append(
    commentAuthor,
    commentTimestamp,
    hrLine,
    commentMessage,
  );

  // Ownership information can be used here to conditionally
  // render the Edit button once the current-user comparison is defined.

    if (currentUser !== null && currentUser.id === comment.user.id) {
      const editButtonRow = createElement(
        "div",
        "",
        "row-container",
        "justify-content-end",
        "margin-post-button-rows",
      );

      const editCommentButton = createButton(
        "button",
        "Edit",
        "edit-comment",
        "edit-comment-button",
      );

      const deleteCommentButton = createButton(
        "button",
        "Delete",
        "delete-comment",
        "delete-comment-button",
      );

      // Identify which post the button belongs to.
      // commentButton.dataset.postId = post.id;
      editButtonRow.append(editCommentButton, deleteCommentButton);
      commentArticle.append(editButtonRow);
    }

  return commentArticle;
}

function renderTimestamp(createdAt, updatedAt) {
  if (createdAt === updatedAt) {
    return createElement(
      "p",
      `Created: ${formatExactDate(createdAt)}`,
      "time-stamp",
    );
  }

  return createElement(
    "p",
    `Updated: ${formatExactDate(updatedAt)}`,
    "time-stamp",
  );
}