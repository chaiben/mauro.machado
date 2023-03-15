import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { CONFIG } from '../config'
import { getCSV, parseConfig } from '../helpers'

export const fetchConfig = createAsyncThunk(
  'csv/fetchConfigStatus',
  async (env) => {
    try {
      let config = await getCSV(CONFIG.CSV, false)
      config = parseConfig(config)
      const category = await getCSV(`${CONFIG.CSV}&gid=${config[env + 'Cat']}`)
      const cv = await getCSV(`${CONFIG.CSV}&gid=${config[env]}`)
      return { config, category, cv }
    } catch (err) {
      console.log(err)
      return null
    }
  }
)

const initialState = {
  env: 'pro',
  reqStatus: {
    status: 'initial',
    isError: false,
    isSuccess: false,
    isLoading: false,
    hasData: false
  },
  data: {
    config: null,
    category: null,
    cv: null
  }
}

const csvSlice = createSlice({
  name: 'csv',
  initialState,
  reducers: {
    setEnv (state, action) {
      state.env = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConfig.pending, (state) => {
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
      state.data = action.payload
    })
  }
})

export const { setEnv } = csvSlice.actions

export default csvSlice.reducer
