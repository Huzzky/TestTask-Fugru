import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { pageFlip } from '../../store/action/workWithTable'
import { NEXT_PAGE, PREVIOUS_PAGE } from '../../const'
import { Link } from 'react-router-dom'

const Pagination = ({
  data50Users,
  data,
  pageFlip,
  pageSelect,
  isFetchingSmallData,
  returnedError,
}) => {
  useEffect(() => {}, [data50Users, data, pageSelect])
  return (
    <div>
      <Link to={'/big_table/page=' + pageSelect / 50}>
        <button
          disabled={
            pageSelect === 0 || isFetchingSmallData || returnedError
              ? 'disabled'
              : ''
          }
          onClick={() => {
            pageFlip(PREVIOUS_PAGE)
          }}
        >
          {'<<'} page
        </button>
      </Link>
      <Link to={'/big_table/page=' + (pageSelect / 50 + 1)}>
        <button
          disabled={
            data.length - 50 === pageSelect ||
            isFetchingSmallData ||
            returnedError
              ? 'disabled'
              : ''
          }
          onClick={() => {
            pageFlip(NEXT_PAGE)
          }}
        >
          page {'>>'}
        </button>
      </Link>
    </div>
  )
}

Pagination.propTypes = {
  dataLength: PropTypes.number,
}

const mapStoreToProps = (store) => {
  return {
    isFetchingSmallData: store.DataTableUsersReducer.isFetchingSmallData,
    returnedError: store.DataTableUsersReducer.returnedError,

    data: store.DataTableUsersReducer.data,
    data50Users: store.DataTableUsersReducer.data,
    pageSelect: store.DataTableUsersReducer.pageSelect,
  }
}
const mapDispatchToProps = (dispatch) => ({
  pageFlip: (action) => dispatch(pageFlip(action)),
})
export default connect(mapStoreToProps, mapDispatchToProps)(Pagination)
