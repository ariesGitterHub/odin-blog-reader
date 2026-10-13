import { post, put, del } from "./api.js";

// NOTE - technically async is not needed below since the imported helper functions in api.js are returning the promise!!!

// export async function createNewBlogComment(postId, commentMessage) { 
export function createNewBlogComment(postId, commentMessage) { 
  return post(`/api/post/${postId}`, {
    // The backend supplies userId
    comment_message: commentMessage,
  });
}

// export async function editBlogComment(commentId, commentMessage) {
export function editBlogComment(commentId, commentMessage) {
  // return put("/api/post/:postId/:commentId");
  return put(`/api/post/${commentId}`, {
    comment_message: commentMessage,
  });
}

// export async function deleteBlogComment(commentId) {
export function deleteBlogComment(commentId) {
  return del(`/api/post/${commentId}`);
}