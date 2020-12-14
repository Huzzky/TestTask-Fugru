import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { tableSortingFields } from '../const'
import { sortDataTable } from '../store/action/workWithTable'
import BlockDescSelectedUser from './BlockDescSelectedUser'
import { RecordNewUserForDatabase } from './componentRecordNewUser/RecordNewUserForDatabase'
import RowsOfUsersData from './RowsOfUsersData'

const TableDataUser = ({ DataTableUsersReducer, sortDataTable, sortBy }) => {
  const [openBlockDescUserById, setOpenBlockDescUserById] = useState(false)
  const [openBlockInputsNewUser, setOpenBlockInputsNewUser] = useState(false)
  useEffect(() => {}, [DataTableUsersReducer, DataTableUsersReducer.data])

  const funcSetOpenBlockDescUserById = () => {
    setOpenBlockDescUserById(true)
  }

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
                <td
                  key={key}
                  onClick={() => {
                    sortDataTable(key === sortBy ? '-' + key : key)
                  }}
                >
                  {value}
                  {key === sortBy ? '▼' : ''}
                  {'-' + key === sortBy ? '▲' : ''}
                </td>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {openBlockInputsNewUser ? (
            <RecordNewUserForDatabase />
          ) : (
            <tr>
              <td />
            </tr>
          )}
          {/* {tableSmall32} */}
          <RowsOfUsersData
            setOpenBlockDescUserById={funcSetOpenBlockDescUserById}
          />
        </tbody>
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

TableDataUser.propTypes = {
  smallDataTableUser: PropTypes.shape({
    data: PropTypes.array,
  }),

  sortBy: PropTypes.string,
  sortDataTable: PropTypes.func.isRequired,
}

const mapStateToProps = ({ DataTableUsersReducer }) => {
  return {
    DataTableUsersReducer: DataTableUsersReducer,
    sortBy: DataTableUsersReducer.sortBy,
  }
}

const mapDispatchToProps = (dispatch) => ({
  sortDataTable: (key) => dispatch(sortDataTable(key)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TableDataUser)
