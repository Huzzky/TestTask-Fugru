import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectRow } from '../../store/action/workWithTable'

const component = ({
  RowsOfUsersData,
  setOpenBlockDescUserById,
  selectRow,
}) => {
  console.log(RowsOfUsersData)
  return RowsOfUsersData.map((index, key) => {
    return (
      <tr
        onClick={(event) => {
          setOpenBlockDescUserById()
          selectRow(event.currentTarget.id)
        }}
        id={index.id}
        key={key}
      >
        <td>{index.id}</td>
        <td>{index.firstName}</td>
        <td>{index.lastName}</td>
        <td>{index.email}</td>
        <td>{index.phone}</td>
      </tr>
    )
  })
}

component.propTypes = {
  RowsOfUsersData: PropTypes.array,
}

const mapStateToProps = (store) => ({
  RowsOfUsersData: store.DataTableUsersReducer.data,
})

const mapDispatchToProps = (dispatch) => ({
  selectRow: (id) => dispatch(selectRow(id)),
})

const RowsOfUsersData = memo(component)

export default connect(mapStateToProps, mapDispatchToProps)(RowsOfUsersData)
