import DiscountCard from "../../components/disscountcard.jsx";

export default function DiscountsPage() {
const discounts = [
  {
    id: 1,
    title: "Lipstick Mega Discount",
    category: "Beauty",
    subcategory: "Lipstick",
    amount: 2000,
    discountAmount: 1500,
    discountPercentage: 25,
    image: "https://cdn.pixabay.com/photo/2017/08/10/03/54/lipstick-2616874_1280.jpg",
  },
  {
    id: 2,
    title: "Hair Care Special",
    category: "Beauty",
    subcategory: "Shampoo",
    amount: 2500,
    discountAmount: 1999,
    discountPercentage: 20,
    image: "https://cdn.pixabay.com/photo/2017/01/13/18/33/hair-1978851_1280.jpg",
  },
];


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Discounts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
        {discounts.map((discount) => (
          <DiscountCard key={discount.id} discount={discount} />
        ))}
      </div>
    </div>
  );
}
