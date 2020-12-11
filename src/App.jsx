// import './styles/App.css'

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'
import SmallDataTablePage from './components/SmallDataTablePage/SmallDataTablePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavLink to="/small_table">
            <button> Маленький объем данных</button>
          </NavLink>
          <NavLink to="/big_table">
            <button>Большой объем данных</button>
          </NavLink>

          <Switch>
            <Route path="/small_table">
              <SmallDataTablePage rowsCount={4} />
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

export default App
