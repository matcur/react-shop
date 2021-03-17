import React, { useState } from 'react'
import { Server } from '../api/server'
import { IInfo, Paginate } from '../components/product/Paginate'
import { IProduct } from '../models';

export const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const info: IInfo = {
    products,
    currentPage: 0,
    lastPage: 3,
  }
  if (products.length === 0)
    Server.getProductsByPage(0, 10)
          .then(res => setProducts(res))

  return (
    <div className="body product-page">
      <Paginate info={info}/>
    </div>
  )
}