import React from "react";
import OfferCard from "../../components/offerscard.jsx";

// Dummy data
const offers = [
  {
    id: 1,
    title: "Summer Sale - Lipstick",
    description: "Get your favorite matte lipsticks at 20% off!",
    image: "https://cdn.pixabay.com/photo/2017/08/10/03/54/lipstick-2616874_1280.jpg",
    startDate: "2025-12-25",
    endDate: "2026-01-05",
    discount: 20,
  },
  {
    id: 2,
    title: "Hair Care Combo",
    description: "Shampoo + Conditioner combo at 15% discount for healthy hair.",
    image: "https://cdn.pixabay.com/photo/2017/01/13/18/33/hair-1978849_1280.jpg",
    startDate: "2025-12-20",
    endDate: "2026-01-10",
    discount: 15,
  },
  {
    id: 3,
    title: "Nourishing Hair Oil",
    description: "Organic hair oil for healthy scalp and hair growth at 10% off.",
    image: "https://cdn.pixabay.com/photo/2017/08/02/14/10/hair-2573682_1280.jpg",
    startDate: "2025-12-22",
    endDate: "2026-01-12",
    discount: 10,
  },
];

export default function OffersPage() {
  return (
    <div className="container mx-auto px-4 py-4">
  
  <div className=" mx-auto bg-white text-4xl font-bold">
        <h1>Current Offers</h1>
</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
}
