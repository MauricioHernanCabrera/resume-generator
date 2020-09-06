import moment from 'moment'

const monthYear = (str) => {
  return moment(str).format('MMMM YYYY')
  return str
}

export { monthYear }
