import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { cartReducer }  from './slices/cartSlice'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  cart: cartReducer
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({}),
)

export type RootReducer = ReturnType<typeof rootReducer>

export default store
