import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SmallDataTablePage from '../components/SmallDataTablePage/SmallDataTablePage'
import { getDataFromApi } from '../store/action/getDataFromApi'
var { registerObserver } = require('react-perf-devtool')

registerObserver()

class SmallTablePage extends Component {
  componentDidMount() {
    this.props.getSmallDataTableUser(32)
  }

  render() {
    return <SmallDataTablePage rowsCount={32} />
  }
}

SmallTablePage.propTypes = {
  getDataFromApi: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  getSmallDataTableUser: (rows) => dispatch(getDataFromApi(rows)),
})

export default connect(null, mapDispatchToProps)(SmallTablePage)
