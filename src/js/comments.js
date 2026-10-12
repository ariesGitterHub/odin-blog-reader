// create comment
// render comments
// edit comment
// delete comment

import { post, put, del } from "./api.js";

// export async function createNewBlogComment(userId, postId, commentMessage) {
export async function createNewBlogComment(postId, commentMessage) { // The backend supplies userId
  return post(`/api/post/${postId}`, {
    comment_message: commentMessage,
  });
}

// export async function editBlogComment(commentId, userId, commentMessage) {
export async function editBlogComment(commentId, commentMessage) {
  // return put("/api/post/:postId/:commentId");
  return put(`/api/post/${commentId}`, {
    comment_message: commentMessage,
  });
}

// export async function deleteBlogComment(commentId, userId) { // Really, userId is needed? More of a check to make sure only the actual comment author can delete this comment?
export async function deleteBlogComment(commentId) {
  return del(`/api/post/${commentId}`);
}