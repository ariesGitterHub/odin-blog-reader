import { get, post } from "./api.js";

// export async function signup(userData) {
//   return post("/api/auth/signup", userData)
// }

export async function login(email, password) {
  return post("/api/auth/login", {
    email,
    password,
  });
}

export async function logout() {
  return post("/api/auth/logout");
}

export async function signup(firstName, lastName, email, password) {
  return post("/api/auth/signup", {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  });
}

export async function getCurrentUser() {
  return get("/api/auth/me");
}
