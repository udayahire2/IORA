interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  isDarkMode: boolean;
}

export function ProductCard({ product, isDarkMode }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div
        className={`aspect-square overflow-hidden rounded-sm mb-4 ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3
        className={`mb-1 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        {product.name}
      </h3>
      <p
        className={`${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        ₹{product.price.toFixed(2)}
      </p>
    </div>
  );
}