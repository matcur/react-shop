import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signOut } from "../../redux/slices/authSlice";

export function useSignOut() {
  const history = useHistory()
  const dispatch = useDispatch()

  return () => {
    dispatch(signOut())
    history.push('/')
  }
}