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
    <button className="px-4 py-2 text-left  w-[167px] rounded-md bg-green-950 text-white flex flex-col gap-2" onClick={onClick}>
      <Image src={image} alt="product-image" width={100} height={100} className="shadow-lg w-full " />
      <div>
      <p className="text-base font-semibold ">{price}</p>
      <p className="text-sm font-light truncate">{name}</p>
      </div>
     
      <div className="flex justify-between items-center">
        <p className="text-sm font-extralight">{category}</p>
        <button
          className="text-sm font-semibold rounded-[100%] bg-white text-green-950 p-2 w-6 h-6 justify-center items-center flex"
          // onClick={() => addProduct(productId)}
        >
          +
        </button>
      </div>
    </button>
  );
}

export default ProductCard;
