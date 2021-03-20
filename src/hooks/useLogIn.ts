import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { IUser } from "../models";
import { authorize, IAuthData } from "../redux/slices/authSlice";

export function useLogIn() {
  const history = useHistory()
  const dispatch = useDispatch()

  return (user: IUser, authData: IAuthData) => {
    dispatch(
      authorize({user, authData})
    )
    history.push('/')
  }
}