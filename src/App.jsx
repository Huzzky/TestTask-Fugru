// import './styles/App.css'

import React, { Component, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'
const SimpleTablePage = React.lazy(() => import('./views/SimpleTablePage'))
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

          <React.Fragment>
            <Suspense fallback={<h1>Загрузка...</h1>}>
              <Switch>
                <Route path="/small_table">
                  <SimpleTablePage />
                </Route>
                <Route path="/big_table">
                  <h1>Большая таблица</h1>
                </Route>
                <Route path="/">
                  <h1>Выберите объем данных</h1>
                </Route>
              </Switch>
            </Suspense>
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default App
