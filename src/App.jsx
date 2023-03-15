import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/organims/Header'
import { CONFIG } from './config'
import { fetchConfig } from './store/config.slice'

function App () {
  const { reqStatus, config } = useSelector(state => state.config)
  const { isError, isLoading } = reqStatus
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchConfig(CONFIG.CSV))
  }, [dispatch])

  if (isLoading) return <>Loading...</>
  if (isError) {
    return <>Error</>
  }
  document.title = `${config.headerTitle} - ${config.headerSubtitle}`
  return (
    <>
      <Header />
    </>
  )
}

export default App
