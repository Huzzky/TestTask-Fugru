import React from 'react'
import { connect } from 'react-redux'

const BlockDescSelectedUser = (props) => {
  return (
    <React.Fragment>
      <React.Fragment>
        <p>
          Выбран пользователь <b>{props.selectedRow.firstName}</b>
        </p>
        <p>Описание:</p>
        <p>{props.selectedRow.description}</p>
        <p>
          Адрес проживания: <b>{props.selectedRow.address.streetAddress}</b>
        </p>
        <p>
          Город: <b>{props.selectedRow.address.city}</b>
        </p>
        <p>
          Провинция/штат: <b>{props.selectedRow.address.state}</b>
        </p>
        <p>
          Индекс: <b>{props.selectedRow.address.zip}</b>
        </p>
      </React.Fragment>
    </React.Fragment>
  )
}

const mapStateToProps = ({ smallDataTableUserReducer }) => {
  return {
    selectedRow: smallDataTableUserReducer.selectedRow,
  }
}

export default connect(mapStateToProps)(BlockDescSelectedUser)
