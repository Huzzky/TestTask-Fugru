// import './styles/App.css'

import React, { Component, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'
import BigTablePage from './views/BigTablePage'
const SmallTablePage = React.lazy(() => import('./views/SmallTablePage'))
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavLink to="/small_table/page=1">
            <button> Маленький объем данных</button>
          </NavLink>
          <NavLink to="/big_table/page=1">
            <button>Большой объем данных</button>
          </NavLink>

          <React.Fragment>
            <Suspense fallback={<h1>Загрузка...</h1>}>
              <Switch>
                <Route path="/small_table/page=:id">
                  <SmallTablePage />
                </Route>
                <Route
                  path="/big_table/page=:id"
                  component={BigTablePage}
                ></Route>
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
