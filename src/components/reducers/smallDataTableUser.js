import { REQUEST_SDATA, SUCCES_SDATA } from '../const'

const initialState = {
  data: ['12314'],
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
    default:
      return state
  }
}
