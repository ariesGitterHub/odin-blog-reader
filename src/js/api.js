const API_URL = "http://localhost:3000";

export async function get(endpoint) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      credentials: "include",
    });

    // if (!response.ok) {
    //   throw new Error(`Request failed: ${response.status}`);
    // }

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(
        // NOTE - the optional chaining (?.) prevents an error if the response doesn't contain an error property
        errorData.error?.message || `Request failed: ${response.status}`,
      );
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function post(endpoint, data) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // if (!response.ok) {
    //   throw new Error(`Request failed: ${response.status}`);
    // }

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(
        // NOTE - the optional chaining (?.) prevents an error if the response doesn't contain an error property
        errorData.error?.message || `Request failed: ${response.status}`,
      );
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function put(endpoint, data) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // if (!response.ok) {
    //   throw new Error(`Request failed: ${response.status}`);
    // }

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(
        // NOTE - the optional chaining (?.) prevents an error if the response doesn't contain an error property
        errorData.error?.message || `Request failed: ${response.status}`,
      );
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function del(endpoint) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "DELETE",
      credentials: "include",
    });

    // if (!response.ok) {
    //   throw new Error(`Request failed: ${response.status}`);
    // }

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(
        // NOTE - the optional chaining (?.) prevents an error if the response doesn't contain an error property
        errorData.error?.message || `Request failed: ${response.status}`,
      );
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}


