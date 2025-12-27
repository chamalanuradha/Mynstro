const API_URL = "http://localhost:5000/api/user";
const token = localStorage.getItem("token")

export async function registerUser(formData) {

;

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

export async function getAllUsers() {
  
  const response = await fetch(`${API_URL}/allusers`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch users");
  }
  return data;
}

export async function getUserById(userId) {
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

export async function userDelete(userId) {

  const response = await fetch(`${API_URL}/delete/${userId}`, {
    method: "DELETE",
    headers: {  
      Authorization: `Bearer ${token}`,
   
    }, 
  });

  const data = await response.json(); 
  if (!response.ok) {
    throw new Error(data.message || "Failed to delete user");
  }

  return data;
}