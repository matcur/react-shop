import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { authReducer } from './slices/authSlice'
import { cartReducer }  from './slices/cartSlice'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({}),
)

export type RootReducer = ReturnType<typeof rootReducer>

export default store
