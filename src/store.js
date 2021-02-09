import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import DevTools from './DevTools'
import { products, productsSagas } from './components/products'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  products
})

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), DevTools.instrument())
)

sagaMiddleware.run(productsSagas)

export default store
