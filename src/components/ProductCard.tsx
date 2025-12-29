interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square overflow-hidden rounded-sm mb-4 bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="mb-1 text-foreground">
        {product.name}
      </h3>
      <p className="text-muted-foreground">
        ₹{product.price.toFixed(2)}
      </p>
    </div>
  );
}