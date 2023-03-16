const groupByField = (dataArray, fieldName) => {
  const result = {}
  dataArray.forEach(data => {
    const field = data[fieldName]
    if (!result[field]) {
      result[field] = []
    }
    result[field].push(data)
  })
  return result
}

export default groupByField
