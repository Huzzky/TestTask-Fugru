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

export { sortDataTable, selectRow, searchRow }
