import type { FC } from "react";
import { Link } from "react-router";

interface CardProps {
    id: number;
    image: string;
    title: string;
    price: number;
}

const ProductCard: FC<CardProps> = ({ id, image, title, price }) => {
  return (
    <div className="boder-green-200 overflow-hidden rounded-lg border bg-white">
      <Link to={`/product/${id}`}>
        <img className="h-48 w-full object-cover" src={image} alt={title} />
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
        </Link>
        <p className="mb-4 text-gray-600">${price}</p>
        <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard
