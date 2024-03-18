// import { configureStore } from '@reduxjs/toolkit'
// import { userReducer } from './reducers/userReducer'
import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { rootReducer } from './reducers'

export const store = createStore(rootReducer, applyMiddleware(thunk))

// export const store = configureStore({
// 	reducer: {
// 		user: userReducer,
// 	},
// })
