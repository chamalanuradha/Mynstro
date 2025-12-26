import React, { useEffect, useState } from "react";
import { getUserById, updateUser } from "../../services/user";

const DEFAULT_AVATAR =
  "https://cdn-icons-png.flaticon.com/512/847/847969.png";

export default function UserUpdatePage({ userId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar: null,
    mobile: "",
    address: "",
    status: "",
    role: "",
  });

  const [avatarPreview, setAvatarPreview] = useState(DEFAULT_AVATAR);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "ADMIN";

  // Fetch user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getUserById(userId);

        setFormData({
          name: data.name,
          email: data.email,
          avatar: null,
          mobile: data.mobile,
          address: data.address,
          status: data.status,
          role: data.role,
        });

        setAvatarPreview(data.avatar || DEFAULT_AVATAR);
      } catch (error) {
        console.error("Fetch user failed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData({ ...formData, avatar: file });
    setAvatarPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();

    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("mobile", formData.mobile);
    payload.append("address", formData.address);

    if (formData.avatar) {
      payload.append("avatar", formData.avatar);
    }

    if (isAdmin) {
      payload.append("status", formData.status);
      payload.append("role", formData.role);
    }

    try {
      setLoading(true);
      await updateUser(userId, payload);
      alert("User updated successfully");
    } catch (error) {
      console.error("Update failed", error);
      alert("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded relative">
      <div className="absolute top-4 right-4 text-center">
        <img
          src={avatarPreview}
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover border"
        />

        <label className="block mt-2 text-sm text-blue-600 cursor-pointer">
          Change
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </label>
      </div>

      <h2 className="text-xl font-semibold mb-6">Update User</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Name"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Email"
          />

          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Mobile"
          />

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Address"
          />

          {isAdmin && (
            <>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="blocked">Blocked</option>
              </select>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </>
          )}

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {loading ? "Updating..." : "Update User"}
          </button>
        </form>
      )}
    </div>
  );
}
