import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../models";

const initialState = {
  current: {},
  history: [{}],
} as IState

interface IState {
  current?: IOrder
  history: IOrder[]
}

const canOrder = (state: IState) => state.current == undefined

const parseMaxId = (orders: IOrder[]) => {
  let result = 0
  orders.map(o => {
    if (o.id > result)
      result = o.id
  })

  return result;
}

const slice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createOrder(state, action: PayloadAction<Pick<IOrder, 'customer' | 'productSets'>>) {
      if (!canOrder(state))
        return

      const newOrder = {
        ...action.payload,
        id: parseMaxId(state.history) + 1,
        isPayed: false,
        createdAt: 'today',
      }
      state.current = newOrder
    },
    payOrder(state, action: PayloadAction<IOrder>) {
      const order = action.payload
      if (state.current != order)
        return

      order.isPayed = true
      state.history.push(order)
    },
  }
})

export const orderReducer = slice.reducer

export const {payOrder, createOrder} = slice.actions