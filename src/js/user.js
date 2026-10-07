import { put, del } from "./api.js";

// TODO - and NOTE - technically the async is not needed below since the imported put is returning the promise!

// export async function updateProfile(userData) {
export function updateProfile(userData) {
  console.log("updateProfile arguments:", userData);

  return put("/api/user/profile", userData);
}

// export async function deleteProfile(userId) {
export function deleteProfile(userId) {
  console.log("Deleted user id:", userId);

  return del("api/delete/profile", userId);
}