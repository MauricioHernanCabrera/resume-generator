const arrayToObject = (array, key) => {
  return array.reduce((map, obj) => {
    map[obj[key]] = obj
    return map
  }, {})
}

export default arrayToObject
