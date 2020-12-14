import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const component = ({ selectedRow }) => {
  let test = {
    city: 'Город: ',
    zip: 'Индекс: ',
    desc: 'Описание: ',
    state: 'Провинция/Штат: ',
    fullName: 'Выбран пользователь: ',
    streetAddress: 'Адрес проживания: ',
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

component.propTypes = {
  selectedRow: PropTypes.shape({
    address: PropTypes.shape({
      zip: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      streetAddress: PropTypes.string,
    }),
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    description: PropTypes.string,
  }),
}

const mapStateToProps = ({ DataTableUsersReducer }) => {
  return {
    selectedRow: DataTableUsersReducer.selectedRow,
  }
}
const BlockDescSelectedUser = memo(component)
export default connect(mapStateToProps)(BlockDescSelectedUser)
