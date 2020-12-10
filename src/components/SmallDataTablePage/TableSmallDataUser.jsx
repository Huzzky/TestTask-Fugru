import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { tableSortingFields } from '../../const'
import { sortDataTable } from '../../store/action/getDataFromApi'

const TableSmallDataUser = (props) => {
  useEffect(() => {}, [props.smallDataTableUser])

  const choicePersonUserInSmallTable = (event) => {
    console.log(event.currentTarget.id)
  }

  let tableSmall32 = props.smallDataTableUser.data.map((index, key) => {
    return (
      <tr onClick={choicePersonUserInSmallTable} id={index.id} key={key}>
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
      <table>
        <thead>
          <tr>
            {Object.entries(tableSortingFields).map(([key, value]) => {
              return (
                <td
                  key={key}
                  onClick={() => {
                    props.sortDataTable(key === props.sortBy ? '-' + key : key)
                  }}
                >
                  {value}
                  {key === props.sortBy ? '▼' : ''}
                  {'-' + key === props.sortBy ? '▲' : ''}
                </td>
              )
            })}
          </tr>
        </thead>
        <tbody>{tableSmall32}</tbody>
      </table>
    </React.Fragment>
  )
}

const mapStateToProps = ({ smallDataTableUserReducer }) => {
  return {
    smallDataTableUser: smallDataTableUserReducer,
    sortBy: smallDataTableUserReducer.sortBy,
  }
}

const mapDispatchToProps = (dispatch) => ({
  sortDataTable: (key) => dispatch(sortDataTable(key)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TableSmallDataUser)
