import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

const BlockDescSelectedUser = ({ selectedRow }) => {
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
        <p>
          Выбран пользователь{' '}
          <b>
            {infoSelectedUser.fullName !== undefined
              ? infoSelectedUser.fullName
              : 'Unknown User'}
          </b>
        </p>
        <p>Описание:</p>
        <p>
          {infoSelectedUser.desc !== undefined
            ? infoSelectedUser.desc
            : 'No description'}
        </p>
        <p>
          Адрес проживания:{' '}
          <b>
            {infoSelectedUser.streetAddress !== undefined
              ? infoSelectedUser.streetAddress
              : 'Unknown address'}
          </b>
        </p>
        <p>
          Город:{' '}
          <b>
            {infoSelectedUser.city !== undefined
              ? infoSelectedUser.city
              : 'Unknown City'}
          </b>
        </p>
        <p>
          Провинция/штат:{' '}
          <b>
            {infoSelectedUser.state !== undefined
              ? infoSelectedUser.state
              : 'Unknown State'}
          </b>
        </p>
        <p>
          Индекс:{' '}
          <b>
            {infoSelectedUser.zip !== undefined
              ? infoSelectedUser.zip
              : 'Unknown ZIP'}
          </b>
        </p>
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
