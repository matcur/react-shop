import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductSet } from '../components/cart/ProductSet'
import { useQuery } from '../hooks/useQuery'
import { useRequireAuth } from '../hooks/auth/useRequireAuth'
import { IProductSet, IUser } from '../models'
import { RootReducer } from '../redux/store'
import { createOrder } from '../redux/slices/orderSlice'
import { clearCart } from '../redux/slices/cartSlice'
import { addEvent } from '../redux/slices/eventSlice'

export const Cart: React.FC = () => {
  useRequireAuth()()
  
  const dispatch = useDispatch()
  const currentUser = useSelector<RootReducer, IUser>(state => state.auth.user!)

  const queryPerPage = useQuery().get('perPage')?? '0'
  const perPage = Math.max(parseInt(queryPerPage), 5)
  const queryCurrentPage = useQuery().get('page')?? '0'
  const currentPage = Math.max(parseInt(queryCurrentPage), 0)
  const offset = Math.max(currentPage - 1, 0) * perPage

  const productSets = useSelector<RootReducer, IProductSet[]>(
    state => state.cart.productSets.slice(offset, offset + perPage)
  )
  
  const order = () => {
    dispatch(createOrder({
      productSets: productSets,
      customer: currentUser,
    }))
    dispatch(clearCart())
    dispatch(addEvent({
      name: 'Order', 
      description: 'You make order.'
    }))
  }

  return (
    <div className="cart">
      {productSets.length == 0? 'Cart is empty': ''}
      {productSets.map(s => <ProductSet set={s}/>)}
      <button 
        className="order-btn"
        onClick={order}>
        Order
      </button>
    </div>
  )
}