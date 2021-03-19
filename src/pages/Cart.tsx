import React from 'react'
import { useSelector } from 'react-redux'
import { ProductSet } from '../components/cart/ProductSet'
import { useQuery } from '../hooks/useQuery'
import { ICartProductSet } from '../models'
import { RootReducer } from '../redux/store'

export const Cart: React.FC = () => {
  const queryPerPage = useQuery().get('perPage')?? '0'
  const perPage = Math.max(parseInt(queryPerPage), 5)
  const queryCurrentPage = useQuery().get('page')?? '0'
  const currentPage = Math.max(parseInt(queryCurrentPage), 0)

  const offset = Math.max(currentPage - 1, 0) * perPage
  const productSets = useSelector<RootReducer, ICartProductSet[]>(
    state => state.cart.productSets.slice(offset, offset + perPage)
  )

  return (
    <div className="cart">
      {productSets.length == 0? 'Cart is empty': ''}
      {productSets.map(s => <ProductSet set={s}/>)}
    </div>
  )
}