import UserCard from "../../components/usercard.jsx";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../services/user.jsx";
import { useEffect, useState } from "react";

export default function Users() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // 🔹 loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const res = await getAllUsers();
        setUsers(res.data || []);
      } catch (err) {
        console.error(err.message);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const handleUserDelete = (userId) => {
    setUsers((prev) => prev.filter((u) => u._id !== userId));
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold">Users</h1>

        <button
          onClick={() => navigate("/admin/adduser")}
          className="flex items-center gap-2 bg-[#F4A261] font-bold px-4 py-2 rounded-md hover:opacity-90"
        >
          <Plus size={18} />
          Add User
        </button>
      </div>

 
      {loading && (
        <div className="text-center py-10 text-gray-500 text-lg">
          Loading users...
        </div>
      )}


      {error && !loading && (
        <div className="text-center py-10 text-red-500">
          {error}
        </div>
      )}


      {!loading && users.length === 0 && !error && (
        <div className="text-center py-10 text-gray-500">
          No users found
        </div>
      )}


      {!loading && users.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <UserCard
              key={user._id}
              user={user}
              onDelete={handleUserDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
