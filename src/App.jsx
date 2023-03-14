import Header from './components/organims/Header'
import { CONFIG } from './config'
import { parseConfig } from './helpers'
import useLoadCSV from './hooks/useLoadCSV'

function App () {
  const { loading, isError, error, data } = useLoadCSV(CONFIG.CSV, false)
  if (loading) return (<>Loading...</>)
  if (isError) {
    console.log(error)
    return (<>Error</>)
  }
  const config = parseConfig(data)
  document.title = `${config.headerTitle} - ${config.headerSubtitle}`
  console.log(config)
  return (
    <>
      <Header
        headerBottomColor={config.headerBottomColor}
        headerTopColor={config.headerTopColor}
        headerTitle={config.headerTitle}
        headerImage={config.headerImage}
        headerSubtitle={config.headerSubtitle}
        headerFontTitleColor={config.headerFontTitleColor}
        headerFontSubtitleColor={config.headerFontSubtitleColor}
      />
    </>
  )
}

export default App
