import { useEffect, useState } from "react";
import ProductCard from "./ProductCard"

const ProductSection = () => {
    const [products, setProducts] = useState([])

    async function fetchProduct() {
        const data = await fetch("https://dummyjson.com/products");
        const response = await data.json();        
        if (response.products) {
            setProducts(response.products)
        } else {
            setProducts([])
        }
        
    }

    useEffect(() => {
        fetchProduct()
    },[])

  return (
    <div className="container mx-auto bg-white p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(({ id, title, images, price }) => (
            <ProductCard key={id} id={id} title={title} image={images[0]} price={price} />
        ))}
      </div>
    </div>
  );
}

export default ProductSection
