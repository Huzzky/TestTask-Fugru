import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

const BlockDescSelectedUser = (props) => {
  let infoSelectedUser = {
    fullName: props.selectedRow.firstName + ' ' + props.selectedRow.lastName,
    desc: props.selectedRow.description,
    streetAddress: props.selectedRow.address.streetAddress,
    city: props.selectedRow.address.city,
    state: props.selectedRow.address.state,
    zip: props.selectedRow.address.zip,
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
      city: PropTypes.any,
      state: PropTypes.any,
      streetAddress: PropTypes.any,
      zip: PropTypes.any,
    }),
    description: PropTypes.any,
    firstName: PropTypes.string,
    lastName: PropTypes.any,
  }),
}

const mapStateToProps = ({ smallDataTableUserReducer }) => {
  return {
    selectedRow: smallDataTableUserReducer.selectedRow,
  }
}

export default connect(mapStateToProps)(BlockDescSelectedUser)
