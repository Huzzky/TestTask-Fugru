import {
  SORT_ID_UP,
  SORT_ID_DOWN,
  SORT_FIRSTNAME_UP,
  SORT_FIRSTNAME_DOWN,
  SORT_LASTNAME_UP,
  SORT_EMAIL_DOWN,
  SORT_LASTNAME_DOWN,
  SORT_EMAIL_UP,
  SORT_PHONE_UP,
  SORT_PHONE_DOWN,
} from '../../../const'

export function SortingSmallData(data, typeSort) {
  switch (typeSort) {
    case SORT_ID_UP:
      return (dispatch) => {
        dispatch({
          type: SORT_ID_UP,
          data: data,
        })
      }
    case SORT_ID_DOWN:
      return (dispatch) => {
        dispatch({
          type: SORT_ID_DOWN,
          data: data,
        })
      }
    case SORT_FIRSTNAME_UP:
      return (dispatch) => {
        dispatch({
          type: SORT_FIRSTNAME_UP,
          data: data,
        })
      }
    case SORT_FIRSTNAME_DOWN:
      return (dispatch) => {
        dispatch({
          type: SORT_FIRSTNAME_DOWN,
          data: data,
        })
      }
    case SORT_LASTNAME_UP:
      return (dispatch) => {
        dispatch({
          type: SORT_LASTNAME_UP,
          data: data,
        })
      }
    case SORT_LASTNAME_DOWN:
      return (dispatch) => {
        dispatch({
          type: SORT_LASTNAME_DOWN,
          data: data,
        })
      }
    case SORT_EMAIL_UP:
      return (dispatch) => {
        dispatch({
          type: SORT_EMAIL_UP,
          data: data,
        })
      }
    case SORT_EMAIL_DOWN:
      return (dispatch) => {
        dispatch({
          type: SORT_EMAIL_DOWN,
          data: data,
        })
      }
    case SORT_PHONE_UP:
      return (dispatch) => {
        dispatch({
          type: SORT_PHONE_UP,
          data: data,
        })
      }
    case SORT_PHONE_DOWN:
      return (dispatch) => {
        dispatch({
          type: SORT_PHONE_DOWN,
          data: data,
        })
      }
    default:
      return data
  }
}
