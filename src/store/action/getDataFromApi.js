import {
  REQUEST_DATA,
  SUCCESS_DATA,
  ERROR_DATA,
  SORT_TABLE,
  SEND_NEW_USER_IN_TABLE,
  SUCCESS_NEW_USER_IN_TABLE,
} from '../../const'
import { fetchData } from '../../apiRequests'

const getDataFromApi = (rows) => {
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

const addNewUserInTable = (data) => {
  return (dispatch) => {
    dispatch({
      type: SEND_NEW_USER_IN_TABLE,
    })
    setTimeout(() => {
      dispatch({
        type: SUCCESS_NEW_USER_IN_TABLE,
        data: data,
      })
    }, 2000)
  }
}

const selectRow = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'SELECT_ROW',
      data: id,
    })
  }
}

const sortDataTable = (field) => {
  return (dispatch) => {
    dispatch({
      type: SORT_TABLE,
      data: field,
    })
  }
}

export { getDataFromApi, sortDataTable, selectRow, addNewUserInTable }
