import { SEND_NEW_USER_IN_TABLE, SUCCESS_NEW_USER_IN_TABLE } from '../../const'

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
    }, 1000)
  }
}

export { addNewUserInTable }
