import { REQUEST_DATA, SUCCESS_DATA, ERROR_DATA, SORT_TABLE } from '../../const'
import { fetchData } from '../../apiRequests'

export function getDataFromApi(rows) {
  return (dispatch) => {
    dispatch({
      type: REQUEST_DATA,
    })
    fetchData({ rows })
      .then((data) => {
        dispatch({
          type: SUCCESS_DATA,
          data,
        })
      })
      .catch((_) => {
        dispatch({
          type: ERROR_DATA,
        })
      })
  }
}

export const sortDataTable = (field) => {
  return (dispatch) => {
    dispatch({
      type: SORT_TABLE,
      data: field,
    })
  }
}
