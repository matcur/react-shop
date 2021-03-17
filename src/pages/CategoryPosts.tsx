import React, { useState } from 'react'
import { useParams } from "react-router"
import { Server } from './../api/server';
import { IProduct } from './../models';
import { Paginate } from '../components/common/Paginate';
import { PaginateItem } from '../components/product/PaginateItem';

interface IProps {
}

export const CategoryPosts: React.FC<IProps> = () => {
  const {id} = useParams<{id: string}>()
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  const info = {
    currentPage: 0,
    lastPage: 3,
  }
  if (!isLoaded)
    Server.getPostsByCategoryId(parseInt(id))
          .then(res => {
            setIsLoaded(true)
            setProducts(res)
          })


  return (
    <Paginate {...info}>
      {products.map(p => <PaginateItem product={p}/>)}
    </Paginate>
  )
}