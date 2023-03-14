import { useEffect, useState } from 'react'
import Papa from 'papaparse'

function useLoadCSV (CSVPath, header = true) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    try {
      Papa.parse(CSVPath, {
        header,
        download: true,
        complete: function (results) {
          if (results.errors.length) { setError(results.errors) }
          if (results.data.length) { setData(results.data) }
          setLoading(false)
        }
      })
    } catch (err) {
      console.log('error:', err)
    }
  }, [CSVPath])

  return { data, loading, error, isError: !!error, isSuccess: !!data }
}

export default useLoadCSV
