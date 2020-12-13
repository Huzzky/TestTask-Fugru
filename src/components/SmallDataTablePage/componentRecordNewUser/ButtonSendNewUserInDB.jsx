import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { addNewUserInTable } from '../../../store/action/sendNewUserInDB'

const ButtonSendNewUserInDB = (props) => {
  const sendNewUserForDB = (e) => {
    e.preventDefault()
    let data = {
      id: props.id,
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      phone: props.phone,
      description: null,
      address: {
        streetAddress: null,
        city: null,
        state: null,
        zip: null,
      },
    }
    props.postNewUserInTable(data)
    props.setUpdateComponent()
  }
  return (
    // <form>
    <button
      onClick={(e) => sendNewUserForDB(e)}
      disabled={
        props.firstName.length > 0 &&
        props.lastName.length > 0 &&
        props.email.length > 0 &&
        (props.phone.length === 13 || props.phone.length === 10)
          ? ''
          : 'disabled'
      }
    >
      Отправить
    </button>
    // </form>
  )
}

ButtonSendNewUserInDB.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  addNewUserInTable: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  postNewUserInTable: (data) => dispatch(addNewUserInTable(data)),
})

export default connect(null, mapDispatchToProps)(ButtonSendNewUserInDB)
