import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/tasksReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
