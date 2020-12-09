import { REQUEST_BDATA, SUCCES_BDATA } from '../const'

const initialState = {
  bigData: [],
  isFetchingBigData: false,
}

export function bigData(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BDATA:
      return {
        ...state,
        isFetchingBigData: true,
      }
    case SUCCES_BDATA:
      return {
        ...state,
        isFetchingBigData: false,
      }
    default:
      return state
  }
}
