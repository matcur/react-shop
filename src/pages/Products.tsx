import React, { useState } from 'react'
import { Server } from '../api/server'
import { Paginate } from '../components/product/Paginate';
import { IProduct } from '../models';

export const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const info = {
    currentPage: 0,
    lastPage: 3,
  }
  if (products.length === 0)
    Server.getProductsByPage(0, 10)
          .then(res => setProducts(res))

  return <Paginate info={info} products={products}/>
}