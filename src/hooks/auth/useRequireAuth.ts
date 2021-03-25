import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectIsUserAuth } from "../../redux/slices/authSlice";

export function useRequireAuth(route: string = '/log-in') {
  const isUserAuth = useSelector(selectIsUserAuth)
  const history = useHistory()
  
  return () => {
    if (!isUserAuth) {
      history.push(route)
    }
  }
}