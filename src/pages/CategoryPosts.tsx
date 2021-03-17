import React, { useState } from 'react'
import { useParams } from "react-router"
import { Server } from './../api/server';
import { IProduct } from './../models';
import { IInfo, Paginate } from '../components/product/Paginate';

interface IProps {
}

export const CategoryPosts: React.FC<IProps> = () => {
  const {id} = useParams<{id: string}>()
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  const info: IInfo = {
    products,
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
    <Paginate info={info}/>
  )
}