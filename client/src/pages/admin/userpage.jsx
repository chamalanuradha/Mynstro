import UserCard from "../../components/usercard.jsx";

export default function Users() {


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
      <div className=" mx-auto bg-white text-4xl font-bold">
        <h1>Users</h1>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

    </div>
  );
}
