import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getDataFromApi } from '../../store/action/getDataFromApi'
import TableSmallDataUser from './TableSmallDataUser'

const SmallDataTablePage = (props) => {
  console.log(props)
  useEffect(() => {
    props.getSmallDataTableUser(props.rowsCount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null])

  return props.smallDataTableUser.isFetchingSmallData ? (
    <h1>Подзагрузка...</h1>
  ) : props.smallDataTableUser.data.length > 2 ? (
    <div>
      <TableSmallDataUser />
    </div>
  ) : (
    <h1>Вторая подзагрузка</h1>
  )
}

SmallDataTablePage.propTypes = {
  getSmallDataTableUser: PropTypes.func.isRequired,
  rowsCount: PropTypes.number.isRequired,
  smallDataTableUser: PropTypes.shape({
    isFetchingSmallData: PropTypes.bool,
    data: PropTypes.array.isRequired,
  }),
}

const mapStateToProps = (store) => {
  return {
    smallDataTableUser: store.smallDataTableUserReducer,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSmallDataTableUser: (rows) => dispatch(getDataFromApi(rows)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SmallDataTablePage)
