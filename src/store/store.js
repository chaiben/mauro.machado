import { configureStore } from '@reduxjs/toolkit'
import csvReducer from './csv.slice'

export const store = configureStore({
  reducer: {
    csv: csvReducer
  }
})
