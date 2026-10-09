import { put, del } from "./api.js";

// TODO - and NOTE - technically the async is not needed below since the imported put is returning the promise!

// export async function updateProfile(userData) {
export function updateProfile(userData) {
  console.log("updateProfile arguments:", userData);

  return put("/api/user/profile", userData);
}

// export async function deleteProfile() {
// NOTE - userId is not needed here since the backend gets the ID from the authenticated JWT
export function deleteProfile() {
  return del("/api/user/profile");
}