import React from "react";
import { Pencil, Trash2 } from "lucide-react"; // icons

export default function UserCard({ user }) {
  return (
    <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden p-4">

    
      <span
        className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-semibold ${
          user.status === "active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {user.status}
      </span>


      <div className="flex items-center gap-4">
        <img
          src={user.avatar || "https://ui-avatars.com/api/?name=User"}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover border"
        />

        <div>
          <h3 className="font-semibold text-lg">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>


      <div className="mt-4 space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-medium">Mobile:</span>{" "}
          {user.mobile || "N/A"}
        </p>

        <p className="line-clamp-2">
          <span className="font-medium">Address:</span>{" "}
          {user.address || "N/A"}
        </p>
      </div>

 
      <div className="mt-4">
        <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold">
          {user.role}
        </span>
      </div>

  
      <div className="absolute bottom-3 right-3 flex gap-2">
        <button
          className="p-2 rounded-full bg-[#F4A261] text-black-600 hover:bg-blue-200 transition"
          title="Update"
        >
          <Pencil size={16} />
        </button>

        <button
          className="p-2 rounded-full bg-[#F4A261] text-black-600 hover:bg-red-200 transition"
          title="Delete"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
