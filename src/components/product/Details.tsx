import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { Server } from "../../api/server"
import { IProductSet, IProduct } from "../../models"
import { NotFound } from "../../pages/errors/NotFound"
import { addProduct, selectSetByProductId } from "../../redux/slices/cartSlice"
import { addEvent } from "../../redux/slices/eventSlice"
import { RootReducer } from "../../redux/store"
import { PositiveCounter } from "../common/counters/PositiveCounter"

interface IProps {
}

export const Details: React.FC<IProps> = () => {
  const cartSet = useSelector<RootReducer, IProductSet | undefined>(
    state => selectSetByProductId(state, id)
  )
  const [product, setProduct] = useState<IProduct | undefined>(cartSet?.product)
  const [isLoaded, setIsLoaded] = useState(false)
  const [count, setCount] = useState(1)
  const {id} = useParams<{id: string}>()
  const dispatch = useDispatch()

  const addInCart = () => {
    if (product == undefined)
      return

    const event = {
      name: 'productAddedToCart',
      description: `${product.name} added in cart.` 
    }

    dispatch(addProduct({product, count}))
    dispatch(addEvent(event))
  }
  const loadProduct = () => {
    if (cartSet == undefined) {
      Server.getProductById(parseInt(id))
            .then(res => setProduct(res))
            .catch(rej => {})
    }
    
    setIsLoaded(true)
  }

  if (!isLoaded) {
    loadProduct()

    return <NotFound/>
  }

  return (
    <div className="products">
      <h1>{product?.name}</h1>
      <div>{product?.description}</div>
      <div>{product?.price}</div>
      <PositiveCounter setCount={setCount} count={count}/>
      <button onClick={addInCart}>
        Add In Cart
      </button>
    </div>
  )
}