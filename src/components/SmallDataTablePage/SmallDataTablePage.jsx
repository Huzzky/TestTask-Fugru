import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getDataFromApi } from '../../store/action/getDataFromApi'
import TableSmallDataUser from './TableSmallDataUser'

const SmallDataTablePage = (props) => {
  useEffect(() => {
    props.getSmallDataTableUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null])

  if (props.smallDataTableUser.isFetchingSmallData) {
    return <h1>Загрузка</h1>
  } else if (!props.smallDataTableUser.isFetchingSmallData) {
    return (
      <div>
        <TableSmallDataUser />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    smallDataTableUser: store.smallDataTableUser,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSmallDataTableUser: () => dispatch(getDataFromApi(32)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SmallDataTablePage)
