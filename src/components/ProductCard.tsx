import Image from "next/image";
import React from "react";

// type ProductCardProps = {
//     productId: string;
//     image: string;
//     name: string;
//     price: number;
//     category: string;
//     addProduct: (productId: string) => void;
// }

function ProductCard({
  productId,
  image,
  onClick,
  name,
  price,
  category,
}: ProductCardProps) {
  return (
    <button className="p-2 h-[242px] w-[167px] bg-green-100" onClick={onClick}>
      <Image src={image} alt="product-image" width={100} height={100} />
      <p className="text-base font-semibold ">{price}</p>
      <p className="text-sm font-light">{name}</p>
      <div className="flex justify-between items-center">
        <p className="text-sm font-light">{category}</p>
        <button
          className="text-sm font-semibold"
          // onClick={() => addProduct(productId)}
        >
          +
        </button>
      </div>
    </button>
  );
}

export default ProductCard;
