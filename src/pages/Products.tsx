import React, { useEffect, useState } from 'react'
import { Server } from '../api/server'
import { Paginate } from '../components/product/Paginate';
import { IProduct } from '../models';

export const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(5)
  
  useEffect(() => {
    Server.getProductPaginate(currentPage, 10)
          .then(res => {
            setProducts(res.items)
            setLastPage(res.lastPage)
          })
  }, [products])

  return <Paginate
            info={{currentPage, lastPage}}
            products={products}
            onPageSelected={(p) => setCurrentPage(p)}/>
}