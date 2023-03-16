import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cv, Header } from './components/organims/'
import { fetchConfig, setEnv } from './store/csv.slice'

function App ({ env = 'pro' }) {
  const { reqStatus, data } = useSelector((state) => state.csv)
  const { config } = data
  const { status, isError, isLoading } = reqStatus

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setEnv(env))
    dispatch(fetchConfig(env))
  }, [dispatch])

  if (status === 'initial' || isLoading) return <>Loading...</>
  if (isError) {
    return <>Error</>
  }
  document.title = `${config.headerTitle} - ${config.headerSubtitle}`
  return (
    <>
      <Header />
      <Cv />
    </>
  )
}

export default App
