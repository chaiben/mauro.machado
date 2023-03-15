const parseConfig = data => {
  const result = {}

  data.forEach(conf => {
    result[conf[0]] = conf[1]
  })

  return result
}

export default parseConfig
