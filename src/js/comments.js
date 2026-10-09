// create comment
// render comments
// edit comment
// delete comment

import { post, put, del } from "./api.js";

export async function createNewBlogComment(userId, postId, commentMessage) {
  return post("/api/post/:postId");
}

export async function editBlogComment(commentId, userId, commentMessage) {
  return put("/api/post/:postId/:commentId");
}

export async function deleteBlogComment(commentId, userId) { // Really, userId is needed? More of a check to make sure only the actual comment author can delete this comment?
  return del("/api/post/:postId/:commentId");
}