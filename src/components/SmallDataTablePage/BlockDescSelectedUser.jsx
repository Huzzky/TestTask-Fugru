import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

const BlockDescSelectedUser = ({ selectedRow }) => {
  let test = {
    fullName: 'Выбран пользователь: ',
    desc: 'Описание: ',
    streetAddress: 'Адрес проживания: ',
    city: 'Город: ',
    state: 'Провинция/Штат: ',
    zip: 'Индекс: ',
  }

  let infoSelectedUser = {
    fullName: selectedRow.firstName + ' ' + selectedRow.lastName,
    desc: selectedRow.description
      ? selectedRow.description
      : 'Описание неизвестно',
    streetAddress: selectedRow.address.streetAddress
      ? selectedRow.address.streetAddress
      : 'Адрес неизвестен',
    city: selectedRow.address.city
      ? selectedRow.address.city
      : 'Город неизвестен',
    state: selectedRow.address.state
      ? selectedRow.address.state
      : 'Штат неизвестен',
    zip: selectedRow.address.zip
      ? selectedRow.address.zip
      : 'Индекс неизвестен',
  }

  return (
    <React.Fragment>
      <React.Fragment>
        {Object.entries(infoSelectedUser).map(([key, value]) => {
          return (
            <p key={key}>
              {test[key]}
              <b>{value ? value : 'Неизвестно'}</b>
            </p>
          )
        })}
      </React.Fragment>
    </React.Fragment>
  )
}

BlockDescSelectedUser.propTypes = {
  selectedRow: PropTypes.shape({
    address: PropTypes.shape({
      city: PropTypes.string,
      state: PropTypes.string,
      streetAddress: PropTypes.string,
      zip: PropTypes.string,
    }),
    description: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.any.isRequired,
  }),
}

const mapStateToProps = ({ smallDataTableUserReducer }) => {
  return {
    selectedRow: smallDataTableUserReducer.selectedRow,
  }
}

export default connect(mapStateToProps)(BlockDescSelectedUser)
