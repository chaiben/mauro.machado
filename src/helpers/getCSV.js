import Papa from 'papaparse'

const getCSV = (csvPath, header = true) => {
  return new Promise((resolve, reject) => {
    Papa.parse(csvPath, {
      header,
      download: true,
      complete: function (results) {
        resolve(results.data)
      },
      error (err) {
        reject(err)
      }
    })
  })
}

export default getCSV
