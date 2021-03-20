import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models'
import { RootReducer } from '../store'

const initialState = {
  user: undefined,
  authData: undefined,
} as IState

interface IState {
  user?: IUser
  authData?: IAuthData
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize(state, action: PayloadAction<{user: IUser, authData: IAuthData}>) {
      const payload = action.payload
      const authData = payload.authData;

      state.user = payload.user
      state.authData = authData

      localStorage.setItem('token', authData.token)
      localStorage.setItem('tokenExpireDate', authData.tokenExpireDate)
    },
    signOut(state) {
      state.user = undefined
      state.authData = undefined

      localStorage.removeItem('token')
      localStorage.removeItem('tokenExpireDate')
    },
  }
})

export interface IAuthData {
  token: string
  tokenExpireDate: string
}

export const authReducer = slice.reducer

export const { authorize, signOut } = slice.actions

export const selectIsUserAuth = (state: RootReducer) => {
  return state.auth.user != undefined
}

