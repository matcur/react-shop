import React, { useState } from 'react'
import { Server } from '../api/server'
import { ProductSet } from '../components/cart/ProductSet'
import { ICartProductSet } from '../models'

export const Cart: React.FC = () => {
  const [perPage, setPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  const [lastPage, setLastPage] = useState(5)
  const [productSets, setProductSets] = useState<ICartProductSet[]>([])

  if (!isLoaded) {
    const offset = currentPage * 5;
    setProductSets(Server.getCartProducts().slice(offset, offset + perPage))
    setIsLoaded(true)
  }

  return (
    <div className="cart">
      {productSets.length == 0? 'Cart is empty': ''}
      {productSets.map(s => <ProductSet set={s}/>)}
    </div>
  )
}