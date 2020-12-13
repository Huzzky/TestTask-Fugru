import { ERROR_DATA, REQUEST_DATA, SUCCESS_DATA, SORT_TABLE } from '../../const'

const initialState = {
  data: [],
  isFetchingSmallData: false,
  sortBy: '',
  selectedRow: 0,
  returnedError: false,
}

const dynamicSort = (field) => {
  let sortOrder = 1
  console.log(field)
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

export function smallDataTableUserReducer(
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
    case SORT_TABLE:
      return {
        ...state,
        sortBy: data,
        data: state.data.slice().sort(dynamicSort(data)),
      }
    case 'SELECT_ROW':
      return {
        ...state,
        selectedRow: state.data.find((row) => row.id === parseInt(data)),
      }
    case 'ADD_NEW_USER_IN_TABLE':
      return {
        ...state,
        data: state.data,
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
