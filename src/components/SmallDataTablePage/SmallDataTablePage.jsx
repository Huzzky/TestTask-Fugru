import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getDataFromApi } from '../../store/action/getDataFromApi'
import TableSmallDataUser from './TableSmallDataUser'

const SmallDataTablePage = (props) => {
  useEffect(() => {
    props.getSmallDataTableUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null])

  return props.smallDataTableUser.isFetchingSmallData ? (
    <h1>Загрузка</h1>
  ) : (
    <div>
      <TableSmallDataUser />
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    smallDataTableUser: store.smallDataTableUserReducer,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSmallDataTableUser: () => dispatch(getDataFromApi(4)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SmallDataTablePage)
