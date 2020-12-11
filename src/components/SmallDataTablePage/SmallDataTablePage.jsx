import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getDataFromApi } from '../../store/action/getDataFromApi'
import TableSmallDataUser from './TableSmallDataUser'

const SmallDataTablePage = ({
  isFetchingSmallData,
  returnError,
  lengthData,
  getSmallDataTableUser,
  rowsCount,
}) => {
  useEffect(() => {
    getSmallDataTableUser(rowsCount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null])

  return isFetchingSmallData ? (
    <h1>Подзагрузка...</h1>
  ) : returnError ? (
    <h1>Ошибка</h1>
  ) : +lengthData > 2 ? (
    <TableSmallDataUser />
  ) : (
    <h1>Догружаем...</h1>
  )
}

SmallDataTablePage.propTypes = {
  getSmallDataTableUser: PropTypes.func.isRequired,
  rowsCount: PropTypes.number.isRequired,
  smallDataTableUser: PropTypes.shape({
    isFetchingSmallData: PropTypes.bool,
    data: PropTypes.array.isRequired,
    returnedError: PropTypes.bool,
  }),
}

const mapStateToProps = (store) => {
  return {
    smallDataTableUser: store.smallDataTableUserReducer,
    returnError: store.smallDataTableUserReducer.returnedError,
    isFetchingSmallData: store.smallDataTableUserReducer.isFetchingSmallData,
    lengthData: store.smallDataTableUserReducer.data.length,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSmallDataTableUser: (rows) => dispatch(getDataFromApi(rows)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SmallDataTablePage)
