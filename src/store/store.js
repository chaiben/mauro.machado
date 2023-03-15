import { configureStore } from '@reduxjs/toolkit'
import configReducer from './config.slice'

export const store = configureStore({
  reducer: {
    config: configReducer
  }
})
