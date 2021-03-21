import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Server } from '../../api/server'
import { ICartProductSet, IProduct } from '../../models'
import { RootReducer } from '../store'

interface IState {
  productSets: ICartProductSet[]
}

const initialState = {
  productSets: Server.getCurrentUserCart().productSets
} as IState

const findSetIndexByProductId = (state: IState, id: number) => {
  return state.productSets.findIndex(s => s.product.id == id)
}

const findSetByProductId = (state: IState, id: number) => {
  return state.productSets.find(s => s.product.id == id)
}

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ICartProductSet>) {
      state.productSets.push(action.payload)
    },
    removeProduct(state, action: PayloadAction<IProduct>) {
      const index = findSetIndexByProductId(state, action.payload.id)
      if (index != -1)
        state.productSets.splice(index, 1)
    },
    increaseProductCount(state, action: PayloadAction<{product: IProduct, amount: number}>) {
      const payload = action.payload
      const set = findSetByProductId(state, payload.product.id)
      if (set != null) {
        set.count += payload.amount
      }
    },
    decreaseProductCount(state, action: PayloadAction<{product: IProduct, amount: number}>) {
      const payload = action.payload
      const set = findSetByProductId(state, payload.product.id)
      if (set != null) {
        set.count -= payload.amount
      }
    },
  },
})

export const { addProduct, removeProduct, increaseProductCount, decreaseProductCount } = slice.actions

export const selectSetByProductId = (state: RootReducer, id: number | string | undefined) => {
  if (id == undefined)
    return undefined

  return state.cart.productSets.find(s => s.product.id == id)
}

export const cartReducer = slice.reducer