import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar/SearchBar'
import CheckingSmallDataTable from '../components/SmallDataTablePage/CheckingSmallDataTable'
import { getDataFromApi } from '../store/action/getDataFromApi'
var { registerObserver } = require('react-perf-devtool')

registerObserver()

class SmallTablePage extends Component {
  componentDidMount() {
    this.props.getSmallDataTableUser(32)
  }

  render() {
    return (
      <>
        <br />
        <SearchBar />
        <CheckingSmallDataTable rowsCount={32} />
      </>
    )
  }
}

SmallTablePage.propTypes = {
  getDataFromApi: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  getSmallDataTableUser: (rows) => dispatch(getDataFromApi(rows)),
})

export default connect(null, mapDispatchToProps)(SmallTablePage)
