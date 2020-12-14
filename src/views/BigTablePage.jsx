import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getDataFromApi } from '../store/action/getDataFromApi'
import SearchBar from '../components/SearchBar/SearchBar'
import CheckingBigDataTable from '../components/BigDataTablePage/CheckingBigDataTable'
import Pagination from '../components/BigDataTablePage/Pagination'

export class BigTablePage extends Component {
  componentDidMount() {
    this.props.getBigDataTableUser(1000, +this.props.match.params.id - 1)
  }

  render() {
    return (
      <>
        <br />
        <SearchBar />
        <Pagination />
        <CheckingBigDataTable />
      </>
    )
  }
}

BigTablePage.propTypes = {
  getBigDataTableUser: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.any,
    }),
  }),
}

const mapDispatchToProps = (dispatch) => ({
  getBigDataTableUser: (rows, page) => dispatch(getDataFromApi(rows, page)),
})

export default connect(null, mapDispatchToProps)(BigTablePage)
