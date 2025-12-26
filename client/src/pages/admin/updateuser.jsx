import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../../services/user";

export default function UserUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    role: "",
    status: "",
    avatar: null,
    avatarPreview: "",
  });


  useEffect(() => {
    async function loadUser() {
      try {
        const res = await getUserById(id);
        const user = res.data;

        console.log(res);

        setFormData({
          name: user.name || "",
          email: user.email || "",
          mobile: user.mobile || "",
          address: user.address || "",
          role: user.role || "",
          status: user.status || "",
          avatar: null,
          avatarPreview: user.avatar || "",
        });
      } catch (err) {
        console.error(err.message);
      }
    }
    loadUser();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle avatar change
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setFormData({ ...formData, avatar: file, avatarPreview: preview });
    }
  };

  // Handle update submit
  const handleUpdate = async () => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) data.append(key, formData[key]);
      });

      await updateUser(id, data);

      alert("User updated successfully!");
      navigate("/users");
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Update User
        </h2>

     
        <div className="flex justify-center mb-6">
      <label className="cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const preview = URL.createObjectURL(file);
              setFormData({ ...formData, avatar: file, avatarPreview: preview });
            }
          }}
        />

        <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center border border-gray-300 hover:opacity-80">
          {formData.avatarPreview ? (
            <img
              src={formData.avatarPreview}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-sm text-gray-500">
              Click to upload
            </span>
          )}
        </div>
      </label>
    </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={handleChange}
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={handleChange}
          />

          <select
            name="role"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <select
            name="status"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={handleChange}
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <textarea
            name="address"
            placeholder="Address"
            rows="3"
            className="md:col-span-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>

  
        <div className="flex justify-end gap-3 mt-6">
          <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
            Cancel
          </button>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
