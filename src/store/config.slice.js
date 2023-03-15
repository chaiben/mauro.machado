import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCSV, parseConfig } from '../helpers'

export const fetchConfig = createAsyncThunk(
  'config/fetchConfigStatus',
  async csvPath => {
    try {
      return getCSV(csvPath, false)
    } catch (err) {
      console.log(err)
      return null
    }
  }
)

const initialState = {
  reqStatus: {
    status: 'initial',
    isError: false,
    isSuccess: false,
    isLoading: false,
    hasData: false
  },
  config: {}
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchConfig.pending, state => {
      state.reqStatus.status = 'loading'
      state.reqStatus.isError = false
      state.reqStatus.isSuccess = false
      state.reqStatus.isLoading = true
      state.reqStatus.hasData = false
    })
    builder.addCase(fetchConfig.fulfilled, (state, action) => {
      state.reqStatus.status = 'success'
      state.reqStatus.isError = false
      state.reqStatus.isSuccess = true
      state.reqStatus.isLoading = false
      state.reqStatus.hasData = !!(
        action.payload && action.payload.length === 0
      )
      console.log('payload', action.payload)
      state.config = parseConfig(action.payload)
    })
  }
})

export default configSlice.reducer
