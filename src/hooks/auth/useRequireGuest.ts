import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { selectIsUserAuth } from "../../redux/slices/authSlice"
import { RootReducer } from "../../redux/store"

export function useRequireGuest(redirectRoute: string = '/') {
  const history = useHistory()
  const isUserAuth = useSelector<RootReducer>(selectIsUserAuth)

  return () => {
    if (isUserAuth)
      history.push(redirectRoute)
  }
} 