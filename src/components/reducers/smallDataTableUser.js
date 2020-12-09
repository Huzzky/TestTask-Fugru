import { ERROR_SDATA, REQUEST_SDATA, SUCCES_SDATA } from '../const'

const initialState = {
  data: [],
  isFetchingSmallData: false,
}

export function smallDataTableUser(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SDATA:
      return {
        ...state,
        isFetchingSmallData: true,
      }
    case SUCCES_SDATA:
      return {
        ...state,
        data: action.data,
        isFetchingSmallData: false,
      }
    case ERROR_SDATA:
      return {
        ...state,
        data: [
          {
            id: null,
            email: null,
            firstName: null,
            lastName: null,
            phone: null,
            address: null,
          },
        ],
        isFetchingSmallData: false,
      }
    default:
      return {
        data: [
          {
            id: null,
            email: null,
            firstName: null,
            lastName: null,
            phone: null,
            address: null,
          },
        ],
      }
  }
}
