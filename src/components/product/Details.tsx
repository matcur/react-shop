import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { Server } from "../../api/server"
import { ICartProductSet, IProduct } from "../../models"
import { NotFound } from "../../pages/errors/NotFound"
import { addProduct, selectSetByProductId } from "../../redux/slices/cartSlice"
import { addEvent } from "../../redux/slices/eventSlice"
import { RootReducer } from "../../redux/store"
import { PositiveCounter } from "../common/counters/PositiveCounter"

interface IProps {
}

export const Details: React.FC<IProps> = () => {
  const [product, setProduct] = useState<IProduct>()
  const [isLoaded, setIsLoaded] = useState(false)
  const [count, setCount] = useState(1)
  const {id} = useParams<{id?: string | undefined}>()
  const dispatch = useDispatch()
  const cartSet = useSelector<RootReducer, ICartProductSet | undefined>(
    state => selectSetByProductId(state, id)
  )

  if (id === undefined)
    return <NotFound/>

  const addInCart = () => {
    if (product == undefined)
      return

    dispatch(addProduct({product, count}))
    dispatch(
      addEvent({ name: 'productAddedToCart', description: `${product.name} added in cart.` })
    )
  }
  const loadProduct = () => {
    if (cartSet == undefined) {
      Server.getProductById(parseInt(id))
            .then(res => setProduct(res))
            .catch(rej => {})
    } else {
      setProduct(cartSet.product)
      setCount(cartSet.count)
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