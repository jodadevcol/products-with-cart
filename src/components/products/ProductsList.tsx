import { useEffect, useState } from 'react'
import DATA_DESSERTS from '../../mooks/desserts.json'
import ProductCard from './ProductCard'
import type { Product } from '../../types/product.ts'

function ProductsList() {
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    const hasProducts = DATA_DESSERTS?.desserts
    if (hasProducts) setProducts(hasProducts)
  }, [])

  return (
    <ul className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(180px,250px))] gap-x-6 gap-y-8'>
      {products &&
        products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          )
        })}
    </ul>
  )
}

export default ProductsList
