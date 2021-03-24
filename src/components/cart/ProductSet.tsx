import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ICartProductSet } from '../../models'
import { decreaseProductCount, increaseProductCount, removeProduct as removeProductFromCart } from '../../redux/slices/cartSlice'

interface IProps {
  set: ICartProductSet
}

export const ProductSet: React.FC<IProps> = ({set}) => {
  const dispatch = useDispatch()
  
  const product = set.product
  const canDecrease = set.count > 0

  const increaseCount = () => {
    const payload = {
      product,
      amount: 1
    }
    dispatch(increaseProductCount(payload))
  }
  const tryDecreaseCount = () => {
    if (canDecrease) {
      const payload = {
        product,
        amount: 1
      }
      dispatch(decreaseProductCount(payload))
    }
  }
  const removeProduct = () => {
    dispatch(removeProductFromCart(product))
  }

  return (
    <div className="product-set">
      <div className="product-set__head">
        <span className="product-name">Name {product.name}</span>
      </div>
      <div className="product-set__content">
        <span className="product-name">Price for one {product.price}</span>
        <span className="product-name">Count {set.count}</span>
        <span className="product-name">Total price {product.price * set.count}</span>
      </div>
      <div className="product-set__actions">
        <button 
          className="product-set__action increase-product-count"
          onClick={increaseCount}
          >Increase count</button>
        <button 
          className="product-set__action decrease-product-count"
          onClick={tryDecreaseCount}
          disabled={!canDecrease}
          >Decrease count </button>
        <button 
          className="product-set__action remove-product"
          onClick={removeProduct}
          >Remove product</button>
      </div>
    </div>
  )
}