import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import spamReducer from './reducers/spamReducer'

//ADD REDUCERS HERE
const rootReducer = combineReducers({
  spam: spamReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
