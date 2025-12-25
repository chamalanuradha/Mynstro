import ProductCard from "../../components/productcard";

export default function Product() {


const products = [
  {
    id: 1,
    name: "Matte Finish Lipstick",
    description: "Long-lasting matte lipstick with rich pigmentation.",
    price: 1850,
    rating: 4.8,
    sold: 320,
    stock: 25, 
    subcategory: "Lipstick",
    image: "https://cdn.pixabay.com/photo/2017/08/10/03/54/lipstick-2616874_1280.jpg",
  },
  {
    id: 2,
    name: "Herbal Hair Shampoo",
    description: "Nourishing shampoo for smooth and healthy hair.",
    price: 2450,
    rating: 4.6,
    sold: 210,
    stock: 40,
    subcategory: "Shampoo",
    image: "https://cdn.pixabay.com/photo/2017/01/13/18/33/hair-1978851_1280.jpg",
  },
  {
    id: 3,
    name: "Hair Conditioner",
    description: "Moisturizing conditioner for soft and shiny hair.",
    price: 1999,
    rating: 4.5,
    sold: 150,
    subcategory: "Conditioner",
    image: "https://cdn.pixabay.com/photo/2017/01/13/18/33/hair-1978849_1280.jpg",
  },
  {
    id: 4,
    name: "Nourishing Hair Oil",
    description: "Organic hair oil for healthy scalp and hair growth.",
    price: 1250,
    rating: 4.7,
    sold: 180,
    stock: 15, 
    subcategory: "Hair Oil",
    image: "https://cdn.pixabay.com/photo/2017/08/02/14/10/hair-2573682_1280.jpg",
  },
];


  return (
    <div className="container mx-auto px-4 py-4">

      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}
