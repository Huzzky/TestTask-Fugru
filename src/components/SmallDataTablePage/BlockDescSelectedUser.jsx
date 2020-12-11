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
    desc: selectedRow.description,
    streetAddress: selectedRow.address.streetAddress,
    city: selectedRow.address.city,
    state: selectedRow.address.state,
    zip: selectedRow.address.zip,
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
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      streetAddress: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
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
