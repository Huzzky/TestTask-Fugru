import { SEARCH_ROW, SELECT_ROW, SORT_TABLE } from '../../const'

const selectRow = (id) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_ROW,
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
const searchRow = (arrValue) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_ROW,
      data: arrValue,
    })
  }
}

const pageFlip = (action) => {
  return (dispatch) => {
    dispatch({
      type: action,
    })
  }
}

export { sortDataTable, selectRow, searchRow, pageFlip }
