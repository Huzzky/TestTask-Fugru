import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TableSmallDataUser from './TableSmallDataUser'

const CheckingSmallDataTable = ({
  isFetchingSmallData,
  returnError,
  lengthDataTable,
}) => {
  useEffect(() => {}, [lengthDataTable])

  return isFetchingSmallData ? (
    <h1>Подзагрузка...</h1>
  ) : returnError ? (
    <h1>Ошибка</h1>
  ) : lengthDataTable > 0 ? (
    <TableSmallDataUser />
  ) : (
    <h1>Неизвестная ошибка. Перезагрузите страницу</h1>
  )
}

CheckingSmallDataTable.propTypes = {
  lengthDataTable: PropTypes.number.isRequired,
  smallDataTableUser: PropTypes.shape({
    isFetchingSmallData: PropTypes.bool,
    data: PropTypes.array,
    returnedError: PropTypes.bool,
  }),
}

const mapStateToProps = (store) => {
  return {
    lengthDataTable: store.DataTableUsersReducer.data.length,
    returnError: store.DataTableUsersReducer.returnedError,
    isFetchingSmallData: store.DataTableUsersReducer.isFetchingSmallData,
  }
}

export default connect(mapStateToProps)(CheckingSmallDataTable)
