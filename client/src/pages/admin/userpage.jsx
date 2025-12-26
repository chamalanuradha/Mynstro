import UserCard from "../../components/usercard.jsx";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../services/user.jsx";
import { useEffect, useState } from "react";

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await getAllUsers(); 
        setUsers(res.data || []);            
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchUsers();
  }, []); 

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold">Users</h1>

        <button 
          onClick={() => navigate('/admin/adduser')}
          className="flex items-center gap-2 bg-[#F4A261] font-bold px-4 py-2 rounded-md hover:opacity-90"
        >
          <Plus size={18} />
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}
