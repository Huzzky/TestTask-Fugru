import {
  ERROR_SDATA,
  REQUEST_SDATA,
  SUCCESS_SDATA,
  SORT_ID_UP,
  SORT_ID_DOWN,
  SORT_FIRSTNAME_UP,
  SORT_FIRSTNAME_DOWN,
} from '../../const'
import { sortFN } from '../../funcsSort/sortFN'
import { sortID } from '../../funcsSort/sortID'

const initialState = {
  data: [],
  isFetchingSmallData: false,
  isLoaded: false,
}

export function smallDataTableUser(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SDATA:
      return {
        ...state,
        isFetchingSmallData: true,
      }
    case SUCCESS_SDATA:
      return {
        ...state,
        data: action.data,
        isFetchingSmallData: false,
        isLoaded: true,
      }
    case SORT_ID_UP:
      return {
        ...state,
        data: sortID(action.data),
      }
    case SORT_ID_DOWN:
      return {
        ...state,
        data: sortID(action.data).reverse(),
      }

    case SORT_FIRSTNAME_UP:
      sortFN(action.data)
      return {
        ...state,
        data: sortFN(action.data),
      }
    case SORT_FIRSTNAME_DOWN:
      sortFN(action.data)
      return {
        ...state,
        data: sortFN(action.data).reverse(),
      }

    case ERROR_SDATA:
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
