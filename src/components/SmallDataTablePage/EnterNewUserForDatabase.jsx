import PropTypes from 'prop-types'
import React from 'react'

export const EnterNewUserForDatabase = ({ type }) => {
  console.log(type)
  return (
    <div>
      <input></input>
    </div>
  )
}

EnterNewUserForDatabase.propTypes = {
  type: PropTypes.any,
}
