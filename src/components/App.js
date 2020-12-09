import './styles/App.css'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getSmallDataTableUser } from './action/getSmallDataTableUser'
import { SmallDataTablePage } from './SmallDataTablePage/SmallDataTablePage'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      choice: '',
    }
  }

  render() {
    console.log(this.props)
    const { getSmallDataTableUser, smallDataTableUser } = this.props
    return (
      <div className="App">
        <Router>
          <NavLink
            to="/small_table"
            onClick={() => {
              getSmallDataTableUser()
            }}
          >
            <button> Маленький объем данных</button>
          </NavLink>
          <NavLink to="/big_table">
            <button>Большой объем данных</button>
          </NavLink>

          <Switch>
            <Route path="/small_table">
              <SmallDataTablePage
                getSmallDataTableUser={getSmallDataTableUser}
                smallDataTableUser={smallDataTableUser}
              />
            </Route>
            <Route path="/big_table">
              <h1>Большая таблица</h1>
            </Route>
            <Route path="/">
              <h1>Выберите объем данных</h1>
            </Route>
          </Switch>
        </Router>
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
  getSmallDataTableUser: () => dispatch(getSmallDataTableUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
