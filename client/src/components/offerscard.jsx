import { Pencil, Trash2 } from "lucide-react";

export default function OfferCard({ offer }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "ADMIN";

  return (
    <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden w-full p-4 mb-4">

      {/* Offer Image */}
      <div className="relative">
        <img
          src={offer.image}
          alt={offer.title}
          className="h-52 w-full object-cover rounded-lg"
        />
      </div>

      {/* Offer Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-xl">{offer.title}</h3>
        <p className="text-sm text-gray-500">
          {offer.description.length > 80
            ? offer.description.slice(0, 80) + "..."
            : offer.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-700">
          <span>
            Start: <span className="font-semibold">{offer.startDate}</span>
          </span>
          <span>
            End: <span className="font-semibold">{offer.endDate}</span>
          </span>
        </div>

        <div className="text-gray-700 text-sm">
          Discount: <span className="font-bold text-[#F4A261]">{offer.discount}%</span>
        </div>

        {/* Actions */}
        <div className="flex justify-end pt-2 gap-2">
          {isAdmin ? (
            <>
              <button
                className="p-2 rounded-full bg-[#F4A261] text-black hover:bg-blue-200 transition"
                title="Update"
              >
                <Pencil size={16} />
              </button>
              <button
                className="p-2 rounded-full bg-[#F4A261] text-black hover:bg-red-200 transition"
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
