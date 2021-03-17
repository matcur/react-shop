import React, { useState } from 'react'
import { useParams } from "react-router"
import { Server } from './../api/server';
import { IProduct } from './../models';
import { Paginate } from '../components/product/Paginate';
import { usePageSelected } from '../hooks/usePageSelected';

interface IProps {
}

export const CategoryPosts: React.FC<IProps> = () => {
  const {id} = useParams<{id: string}>()
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const onPageSelected = usePageSelected(setCurrentPage, setIsLoaded)

  if (!isLoaded)
    Server.getPostsByCategoryId(parseInt(id))
          .then(res => {
            setIsLoaded(true)
            setProducts(res)
          })
  
  return <Paginate 
            info={{currentPage, lastPage}}
            products={products}
            onPageSelected={onPageSelected}/>
}