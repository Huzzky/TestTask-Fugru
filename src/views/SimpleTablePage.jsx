import React, { Component } from 'react'
import SmallDataTablePage from '../components/SmallDataTablePage/SmallDataTablePage'

class SimpleTablePage extends Component {
  render() {
    return <SmallDataTablePage rowsCount={1000} />
  }
}

export default SimpleTablePage
