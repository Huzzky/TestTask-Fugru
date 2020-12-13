import {
  ERROR_DATA,
  REQUEST_DATA,
  SUCCESS_DATA,
  SORT_TABLE,
  SELECT_ROW,
  SUCCESS_NEW_USER_IN_TABLE,
  SEND_NEW_USER_IN_TABLE,
  SEARCH_ROW,
  tableSortingFields,
} from '../../const'

const initialState = {
  data: [],
  isFetchingSmallData: false,
  sortBy: '',
  selectedRow: 0,
  returnedError: false,
  reserveData: [],
}

const regSearchRow = (enteredString, sdata, reserveData) => {
  if (enteredString === '') {
    return reserveData
  } else {
    if (reserveData.length !== sdata.length) {
      sdata = reserveData
    }
    let dataSearch = []
    let arrSData = sdata
    enteredString = enteredString.split(' ')
    Object.entries(enteredString).map(([keyString, valueString]) => {
      Object.entries(tableSortingFields).map(([key, value]) => {
        arrSData.filter((valueFilter) => {
          let phoneString = ''
          if (key === 'phone') {
            phoneString = valueFilter.phone
              .replace(/\(/g, '')
              .replace(/\)/g, '')
              .replace(/-/g, '')
            let test = valueString.split('').filter(function (i) {
              return phoneString.split('').indexOf(i) < 0
            })

            if (test.length === 0) {
              dataSearch.push(valueFilter)
            }
          }
          if (
            '' + valueFilter[key] === valueString ||
            phoneString === valueString
          ) {
            dataSearch.unshift(valueFilter)
          }
          return ''
        })
        return ''
      })
      return ''
    })
    return dataSearch
  }
}

const dynamicSort = (field) => {
  let sortOrder = 1
  if (field[0] === '-') {
    // * Обратная сортировка
    sortOrder = -1
    field = field.substr(1)
  }
  return (a, b) => {
    // * Если a будет меньше, чем б, то result будет -1 и не поменяются местами
    // * Аналогично с а больше б, но поменяются местами
    const result = a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0
    return result * sortOrder
  }
}

export default function DataTableUsersReducer(
  state = initialState,
  { type, data },
) {
  switch (type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetchingSmallData: true,
      }
    case SUCCESS_DATA:
      return {
        ...state,
        data: data,
        reserveData: data,
        isFetchingSmallData: false,
      }
    case ERROR_DATA:
      return {
        ...state,
        data: [
          {
            id: 'null',
            email: 'null',
            firstName: 'null',
            lastName: 'null',
            phone: 'null',
            address: 'null',
          },
        ],
        isFetchingSmallData: false,
        returnedError: true,
      }
    case SEARCH_ROW:
      return {
        ...state,
        data: regSearchRow(data, state.data, state.reserveData),
      }
    case SORT_TABLE:
      return {
        ...state,
        sortBy: data,
        data: state.data.slice().sort(dynamicSort(data)),
      }
    case SELECT_ROW:
      return {
        ...state,
        selectedRow: state.data.find((row) => row.id === parseInt(data)),
      }
    case SEND_NEW_USER_IN_TABLE:
      return {
        ...state,
        isFetchingSmallData: true,
      }
    case SUCCESS_NEW_USER_IN_TABLE:
      console.log(state)
      state.data.unshift(data)
      return {
        ...state,
        data: state.data,
        isFetchingSmallData: false,
      }
    default:
      return {
        data: [
          {
            id: 'null',
            email: 'null',
            firstName: 'null',
            lastName: 'null',
            phone: 'null',
            address: 'null',
          },
        ],
      }
  }
}
