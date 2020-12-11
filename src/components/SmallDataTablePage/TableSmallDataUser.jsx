import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { tableSortingFields } from '../../const'
import { sortDataTable } from '../../store/action/getDataFromApi'
import BlockDescSelectedUser from './BlockDescSelectedUser'
import { selectRow } from '../../store/action/getDataFromApi'
import { EnterNewUserForDatabase } from './EnterNewUserForDatabase'

const TableSmallDataUser = (props) => {
  console.log(props)
  const [openBlockDescUserById, setOpenBlcokDescUserById] = useState(false)
  const [openBlockInputsNewUser, setOpenBlockInputsNewUser] = useState(false)

  useEffect(() => {}, [props.smallDataTableUser])

  let tableSmall32 = props.smallDataTableUser.data.map((index, key) => {
    return (
      <tr
        onClick={(event) => {
          setOpenBlcokDescUserById(true)
          props.selectRow(event.currentTarget.id)
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

  return (
    <React.Fragment>
      <button
        onClick={() =>
          setOpenBlockInputsNewUser(openBlockInputsNewUser ? false : true)
        }
      >
        {openBlockInputsNewUser ? '-' : '+'}
      </button>
      <table>
        <thead>
          <tr>
            {Object.entries(tableSortingFields).map(([key, value]) => {
              return (
                <td key={key}>
                  <div
                    onClick={() => {
                      props.sortDataTable(
                        key === props.sortBy ? '-' + key : key,
                      )
                    }}
                  >
                    {value}
                    {key === props.sortBy ? '▼' : ''}
                    {'-' + key === props.sortBy ? '▲' : ''}
                  </div>

                  {openBlockInputsNewUser ? (
                    <EnterNewUserForDatabase type={key} />
                  ) : (
                    <React.Fragment />
                  )}
                </td>
              )
            })}
          </tr>
        </thead>
        <tbody>{tableSmall32}</tbody>
      </table>
      {openBlockDescUserById ? (
        <div>
          <BlockDescSelectedUser />
        </div>
      ) : (
        <React.Fragment />
      )}
    </React.Fragment>
  )
}

TableSmallDataUser.propTypes = {
  selectRow: PropTypes.func,
  smallDataTableUser: PropTypes.shape({
    data: PropTypes.array,
  }),

  sortBy: PropTypes.any,
  sortDataTable: PropTypes.func,
}

const mapStateToProps = ({ smallDataTableUserReducer }) => {
  return {
    smallDataTableUser: smallDataTableUserReducer,
    sortBy: smallDataTableUserReducer.sortBy,
  }
}

const mapDispatchToProps = (dispatch) => ({
  sortDataTable: (key) => dispatch(sortDataTable(key)),
  selectRow: (id) => dispatch(selectRow(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TableSmallDataUser)
