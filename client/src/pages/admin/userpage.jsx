import UserCard from "../../components/usercard.jsx";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Users() {

  const navigate = useNavigate();

  const users = [
    {
      id: 1,
      name: "Chamal Anuradha",
      email: "chamal@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=3",
      mobile: "0771234567",
      address: "Colombo, Sri Lanka",
      status: "active",
      role: "Admin",
    },
    {
      id: 2,
      name: "Nimal Perera",
      email: "nimal@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=12",
      mobile: "0714567890",
      address: "Kandy, Sri Lanka",
      status: "inactive",
      role: "User",
    },
    {
      id: 3,
      name: "Kamal Silva",
      email: "kamal@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=5",
      mobile: "0759876543",
      address: "Galle, Sri Lanka",
      status: "active",
      role: "Seller",
    },
    {
      id: 4,
      name: "Kamal Silva",
      email: "kamal@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=4",
      mobile: "0759876543",
      address: "Galle, Sri Lanka",
      status: "active",
      role: "Seller",
    },
    {
      id: 5,
      name: "Kamal Silva",
      email: "kamal@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=13",
      mobile: "0759876543",
      address: "Galle, Sri Lanka",
      status: "active",
      role: "Seller",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold">Users</h1>

        <button 
        onClick={() => navigate('/admin/adduser')}
        className="flex items-center gap-2 bg-[#F4A261] font-bold px-4 py-2 rounded-md hover:opacity-90">
          <Plus size={18} />
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

    </div>
  );
}
