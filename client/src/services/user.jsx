const API_URL = "http://localhost:5000/api/user";

/* =========================
   REGISTER
   ========================= */
export async function registerUser(formData) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
}

/* =========================
   LOGIN
   ========================= */
export async function loginUser({ email, password }) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  return response.json();
}


export async function getUserById(userId) {
  const token = JSON.parse(localStorage.getItem("token"));

  const response = await fetch(`${API_URL}/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch user");
  }

  return data;
}


export async function updateUser(userId, formData) {
  const token = JSON.parse(localStorage.getItem("token"));

  const response = await fetch(`${API_URL}/${userId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
   
    },
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update user");
  }

  return data;
}
