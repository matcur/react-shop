import React, { useState } from 'react'
import { useStore } from 'react-redux'
import { ICartProductSet } from '../../models'

interface IProps {
  set: ICartProductSet
}

export const ProductSet: React.FC<IProps> = ({set}) => {
  // Todo переделать при добавлении redux
  const [count, setCount] = useState(set.count)
  
  const product = set.product
  const canDecrease = count > 0

  const increaseCount = () => setCount(count => count + 1)
  const decreaseCount = () => {
    if (canDecrease)
      setCount(count => count - 1)
  }

  return (
    <div className="product-set">
      <div className="product-set__head">
        <span className="product-name">Name {product.name}</span>
      </div>
      <div className="product-set__content">
        <span className="product-name">Price for one {product.price}</span>
        <span className="product-name">Count {count}</span>
        <span className="product-name">Total price {product.price * count}</span>
      </div>
      <div className="product-set__actions">
        <button 
          className="product-set__action increase-product-count"
          onClick={increaseCount}
          >Increase count</button>
        <button 
          className="product-set__action decrease-product-count"
          onClick={decreaseCount}
          >Decrease count </button>
        <button 
          className="product-set__action remove-product"
          onClick={() => {}}
          >Remove product</button>
      </div>
    </div>
  )
}