import { get } from "./api.js";

export async function getPublishedBlogPosts() {
  return get("/api/posts/public");
}
