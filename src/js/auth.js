import { get, post } from "./api.js";

// NOTE and REMINDER - technically async is not needed below since the imported helper functions in api.js are returning the promise!!!

export function login(email, password) {
  return post("/api/auth/login", {
    email,
    password,
  });
}

export function logout() {
  return post("/api/auth/logout");
}

export function signup(firstName, lastName, email, password) {
  return post("/api/auth/signup", {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  });
}

export function getCurrentUser() {
  return get("/api/auth/me");
}

export function getPasswordRules() {
  return get("/api/auth/password-rules");
}
