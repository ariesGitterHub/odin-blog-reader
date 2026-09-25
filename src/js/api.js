// TODO - needs work

const API_URL = "http://localhost:3000";

export async function get(endpoint) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}