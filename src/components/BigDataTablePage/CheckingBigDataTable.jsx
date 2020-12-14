import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TableDataUser from '../TableDataUser'

const CheckingBigDataTable = ({
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
    <TableDataUser />
  ) : (
    <h1>Пусто</h1>
  )
}

CheckingBigDataTable.propTypes = {
  lengthDataTable: PropTypes.number.isRequired,
  smallDataTableUser: PropTypes.shape({
    data: PropTypes.array,
    returnedError: PropTypes.bool,
    isFetchingSmallData: PropTypes.bool,
  }),
}

const mapStoreToProps = (store) => {
  return {
    returnError: store.DataTableUsersReducer.returnedError,
    lengthDataTable: store.DataTableUsersReducer.data.length,
    isFetchingSmallData: store.DataTableUsersReducer.isFetchingSmallData,
  }
}

export default connect(mapStoreToProps)(CheckingBigDataTable)
