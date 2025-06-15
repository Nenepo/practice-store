"use client"
import ProductCard from '@/components/ProductCard'
import { products } from '@/utils/products'
import { useRouter } from 'next/navigation';
import React from 'react'

function ProductsPage() {
    const router = useRouter();
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {products.map((product) => {
            return <ProductCard key={product.productId} onClick={() => router.push(`/product/${product.productId}`)} {...product} />
        })}

    </div>
  )
}

export default ProductsPage