import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent } from "../../events/IEvent";

const initialState = {
  occurredEvents: [],
} as IState

interface IState {
  occurredEvents: IEvent[]
}

const slice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<IEvent>) {
      state.occurredEvents.push(action.payload)
    },
  }
})

export const { addEvent } = slice.actions

export const eventReducer = slice.reducer