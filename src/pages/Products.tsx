import React, { useState } from 'react'
import { Server } from '../api/server'
import { Paginate } from '../components/product/Paginate';
import { usePageSelected } from '../hooks/usePageSelected';
import { IProduct } from '../models';

export const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  const [lastPage, setLastPage] = useState(5)
  const onPageSelected = usePageSelected(setCurrentPage, setIsLoaded)
  
  if (!isLoaded)
    Server.getProductsByPage(currentPage, 10)
          .then(res => {
            setIsLoaded(true)
            setProducts(res)
          })

  return <Paginate
            info={{currentPage, lastPage}}
            products={products}
            onPageSelected={onPageSelected}/>
}