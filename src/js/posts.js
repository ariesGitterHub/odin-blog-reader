import { get } from "./api.js";

// NOTE and REMINDER - technically async is not needed below since the imported helper functions in api.js are returning the promise!!!


// NOTE - only "published" posts are seem in Blog Writer, not all the posts (published and unpublished) that are available of Blog Writer
export function getPublishedBlogPosts() {
  return get("/api/posts/public");
}
