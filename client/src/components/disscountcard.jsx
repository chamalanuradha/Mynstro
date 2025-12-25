import { Pencil, Trash2, Tag } from "lucide-react";

export default function DiscountCard({ discount }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "ADMIN";

  return (
    <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden w-full">

   
      <div className="relative">
        <img
          src={discount.image}
          alt={discount.title}
          className="h-52 w-full object-cover"
        />

      
        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {discount.category} • {discount.subcategory}
        </span>
      </div>

   
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-1">
          {discount.title}
        </h3>

       
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 line-through">
            Rs {discount.amount}
          </span>

          <span className="text-[#F4A261] font-bold text-lg">
            Rs {discount.discountAmount}
          </span>
        </div>

  
        <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
          <Tag size={16} />
          {discount.discountPercentage}% OFF
        </div>


        <div className="flex items-center justify-end pt-2 gap-2">
          {isAdmin ? (
            <>
              <button
                className="p-2 rounded-full bg-[#F4A261] hover:opacity-80"
                title="Update"
              >
                <Pencil size={16} />
              </button>
              <button
                className="p-2 rounded-full bg-red-500 text-white hover:opacity-80"
                title="Delete"
              >
                <Trash2 size={16} />
              </button>
            </>
          ) : (
            <button className="bg-[#F4A261] text-white px-4 py-2 rounded-md hover:opacity-90 text-sm">
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
