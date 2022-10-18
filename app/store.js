import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterslicer'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})