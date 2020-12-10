import {
  ERROR_SDATA,
  REQUEST_SDATA,
  SUCCESS_SDATA,
  SORT_ID_UP,
  SORT_ID_DOWN,
  SORT_FIRSTNAME_UP,
  SORT_FIRSTNAME_DOWN,
  SORT_LASTNAME_UP,
  SORT_LASTNAME_DOWN,
  SORT_EMAIL_UP,
  SORT_EMAIL_DOWN,
  SORT_PHONE_UP,
  SORT_PHONE_DOWN,
} from '../../const'
import {
  sortFN,
  sortID,
  sortLN,
  sortEmail,
  sortPhone,
} from '../../funcsSort/funcsSort'

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
      return {
        ...state,
        data: sortFN(action.data),
      }
    case SORT_FIRSTNAME_DOWN:
      return {
        ...state,
        data: sortFN(action.data).reverse(),
      }
    case SORT_LASTNAME_UP:
      return {
        ...state,
        data: sortLN(action.data),
      }
    case SORT_LASTNAME_DOWN:
      return {
        ...state,
        data: sortLN(action.data).reverse(),
      }
    case SORT_EMAIL_UP:
      return {
        ...state,
        data: sortEmail(action.data),
      }
    case SORT_EMAIL_DOWN:
      return {
        ...state,
        data: sortEmail(action.data).reverse(),
      }
    case SORT_PHONE_UP:
      return {
        ...state,
        data: sortPhone(action.data),
      }
    case SORT_PHONE_DOWN:
      return {
        ...state,
        data: sortPhone(action.data).reverse(),
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
